import { sp } from "@pnp/sp";
import * as _ from 'lodash';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import { IDateTimeFieldValue } from "@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker";
import * as XLSX from 'xlsx';

const moment = extendMoment(Moment);

export default class DataLayer {
    private _efforData: any;
    public get efforData(): any {
        return this._efforData;
    }
    public set efforData(v: any) {
        this._efforData = v;
    }

    private _weekData: any;
    public get weekData(): any {
        return this._weekData;
    }
    public set weekData(v: any) {
        this._weekData = v;
    }

    private _effortDataBasedOnUser: any;
    public get effortDataBasedOnUser(): any {
        return this._effortDataBasedOnUser;
    }
    public set effortDataBasedOnUser(v: any) {
        this._effortDataBasedOnUser = v;
    }

    private _employeeData: any;
    public get employeeData(): any {
        return this._employeeData;
    }
    public set employeeData(v: any) {
        this._employeeData = v;
    }


    private _weekObjectMaaping: any;
    public get weekObjectMaaping(): any {
        return this._weekObjectMaaping;
    }
    public set weekObjectMaaping(v: any) {
        this._weekObjectMaaping = v;
    }


    private _weekDaysMapping: any;
    public get weekDaysMapping(): any {
        return this._weekDaysMapping;
    }
    public set weekDaysMapping(v: any) {
        this._weekDaysMapping = v;
    }


    private _holidayData: any;
    public get holidayData(): any {
        return this._holidayData;
    }
    public set holidayData(v: any) {
        this._holidayData = v;
    }




    constructor(datetime?: IDateTimeFieldValue) {
        this.effortDataBasedOnUser = [];
        this.weekObjectMaaping = {};
        this.weekDaysMapping = {};
        if (datetime) {
            this.getWeekDays(moment(datetime.value).month(), moment(datetime.value).year());
        }
    }

    private async getEfforData(efforList: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let batch = sp.createBatch();
            let count: number = 0;
            this.weekData.map((val, index) => {
                let countdays: number = 0;
                let startDate = val.start.format('YYYY-MM-DD');
                let endDay = val.end.format('YYYY-MM-DD');
                let currDate: any = moment(startDate).startOf('day');
                let lastDate: any = moment(endDay).startOf('day');
                lastDate = lastDate.add(1, 'days');
                do {
                    count++;
                    countdays++;
                    let tempDate: any = currDate.format('YYYY-MM-DD');
                    this.weekObjectMaaping[currDate.format('YYYYMMDD')] = `w${index}d${countdays}`;
                    this.weekDaysMapping[`w${index}`] = countdays;
                    sp.web.lists.getById(efforList).items.filter(`Date ge datetime'${tempDate}T00:00:00Z' and Date le datetime'${tempDate}T23:59:59Z'`).select("*,Resource/EMail").expand("Resource").top(2000).inBatch(batch).getPaged().then(p => {
                        if (p.results.length > 0) {
                            if (this.efforData === undefined) {
                                this.efforData = p.results;
                            } else {
                                this.efforData = [...this.efforData, ...p.results];
                            }
                        }
                        count--;
                        if (count === 0) {
                            resolve(this.efforData);
                        }
                    }).catch((error) => {
                        count--;
                        if (count === 0) {
                            resolve(this.efforData);
                        }
                    });
                } while (currDate.add(1, 'days').diff(lastDate) < 0);
            });

            batch.execute().then(() => console.log("All done!"));
        });
    }

    private getWeekDays(month: number, year: number) {
        if (month && year) {
            let startDate: any = moment.utc([year, month]);
            let firstDay: any = moment(startDate).startOf('month');
            let endDay: any = moment(startDate).endOf('month');
            let currDate: any = moment(startDate).startOf('day');
            let lastDate: any = moment(endDay).startOf('day');
            let weeks: any = [];
            while (currDate.add(1, 'days').diff(lastDate) < 0) {
                if (weeks.indexOf(currDate.week()) === -1) {
                    weeks.push(currDate.week());
                }
            }
            let calendar: any = [];
            for (let index = 0; index < weeks.length; index++) {
                var weeknumber = weeks[index];
                let yearstartDate: any = moment.utc([year, 0]);
                let firstWeekDay: any = moment(yearstartDate).year(year).month(month).week(weeknumber).day(1);
                let lastWeekDay: any = moment(yearstartDate).year(year).month(month).week(weeknumber).day(5);
                if (month == 11 && (weeks.length - 1) == index) {
                    firstWeekDay = moment(yearstartDate).year(year).month(month).week(weeks[index - 1]).day(1);
                    firstWeekDay.add(7, "day");
                    lastWeekDay = moment(yearstartDate).year(year).month(month).week(weeks[index - 1]).day(5);
                    lastWeekDay.add(6, "day");
                }

                if (firstWeekDay.isBefore(firstDay)) {
                    firstWeekDay = firstDay;
                }

                if (lastWeekDay.isAfter(endDay)) {
                    lastWeekDay = endDay;
                }
                let weekRange: any = moment.range(firstWeekDay, lastWeekDay);
                calendar.push(weekRange);
            }
            this.weekData = calendar;
        }

    }

    public async processFetchedData(efforList: string, filerelativePath: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.fetchDatafromFile(filerelativePath).then((resolvedData) => {
                if (resolvedData) {
                    this.getEfforData(efforList).then((data) => {
                        let slicedEmployeeData: any = this.employeeData.slice(1);
                        slicedEmployeeData.map((val, index) => {
                            let tempData = _.filter(this.efforData, (value) => { return value.Resource.EMail === val[1]; });
                            let tempObject: any = {};
                            tempObject.ResourceName = val[0];
                            tempObject.ResourceEMail = val[1];
                            tempObject.ResourceLocation = val[2];
                            for (let i = 0; i < this.weekData.length; i++) {
                                console.log(val[i + 3]);
                                tempObject[`w${i}a`] = val[i + 3];
                            }
                            let totalEfforts = 0;
                            Object.keys(this.weekObjectMaaping).map((weekval) => {
                                let tempValues: any = _.filter(tempData,
                                    (items) => {
                                        return items.Date.indexOf(
                                            moment(weekval).format('YYYY-MM-DD')
                                        ) > -1;
                                    });
                                let objectName: any = `w${parseInt(this.weekObjectMaaping[weekval][1])}t`;
                                tempObject[objectName] = tempObject[objectName] === undefined ? 0 : tempObject[objectName];
                                if (tempValues.length > 0) {
                                    tempValues.map((effortval) => {
                                        if (tempObject[this.weekObjectMaaping[weekval]] === undefined) {
                                            tempObject[this.weekObjectMaaping[weekval]] = effortval["Effort"];
                                            totalEfforts += effortval["Effort"];
                                            tempObject[objectName] += effortval["Effort"];
                                        } else {
                                            tempObject[this.weekObjectMaaping[weekval]] += effortval["Effort"];
                                            totalEfforts += effortval["Effort"];
                                            tempObject[objectName] += effortval["Effort"];
                                        }
                                    });
                                } else {
                                    tempObject[this.weekObjectMaaping[weekval]] = 0;
                                }
                            });
                            tempObject["te"] = totalEfforts;
                            this.effortDataBasedOnUser.push(tempObject);
                        });
                        console.log(this.effortDataBasedOnUser);
                        resolve(true);
                    }).catch(error => { console.log(error); reject(false); });
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    private async fetchDatafromFile(filerelativePath: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (filerelativePath) {
                sp.web.getFileByServerRelativeUrl(filerelativePath).getBuffer().then((buffer: ArrayBuffer) => {
                    let workbook = XLSX.read(buffer, { type: "buffer" });
                    this.employeeData = XLSX.utils.sheet_to_json(workbook.Sheets["allocation"], { header: 1 });
                    console.log(this.employeeData);
                    let holidaydata = XLSX.utils.sheet_to_json(workbook.Sheets["holiday"], { header: 1 });
                    console.log(holidaydata);
                    this.holidayData = holidaydata;
                    resolve(true);
                }).catch((error) => {
                    reject(error);
                });
            }
        });
    }

    public getChartLabelsData(): any {
        let tempArray = [];
        Object.keys(this.weekDaysMapping).map((val, index) => {
            tempArray.push(`Week ${index} data`);
        });
        return tempArray;
    }

    public getChartDataSetData(offshore: string, onsite: string): any {
        let weekAvailableEffortArray = _.times(Object.keys(this.weekDaysMapping).length, _.constant(0));
        let weekUsedEffortArray = _.times(Object.keys(this.weekDaysMapping).length, _.constant(0));
        let weekUnUsedEffortArray = _.times(Object.keys(this.weekDaysMapping).length, _.constant(0));
        this.holidayData.map((valholiday, indexholiday) => {
            if (indexholiday !== 0) {
                let employeeBasedOnLocation = _.filter(this.effortDataBasedOnUser, ["ResourceLocation", valholiday[0]]);
                console.log(employeeBasedOnLocation);
                Object.keys(this.weekDaysMapping).map((val, index) => {
                    let weekAvailableEffort: number = 0;
                    let employeeStrengthBasedOnLocation: number = 0;
                    employeeBasedOnLocation.map(valEmployee => {
                        employeeStrengthBasedOnLocation += valEmployee[`w${index}a`];
                    });
                    if (offshore && onsite) {
                        let offshoreArray = offshore.split(',');
                        let onsiteArray = onsite.split(',');
                        if (_.indexOf(offshoreArray, valholiday[0]) > -1) {
                            weekAvailableEffort = (parseInt(this.weekDaysMapping[val], 10) - parseInt(valholiday[index + 1], 10)) * 9 * employeeStrengthBasedOnLocation;
                        } else if (_.indexOf(onsiteArray, valholiday[0]) > -1) {
                            weekAvailableEffort = (parseInt(this.weekDaysMapping[val], 10) - parseInt(valholiday[index + 1], 10)) * 8 * employeeStrengthBasedOnLocation;
                        }
                    } else {
                        weekAvailableEffort = (parseInt(this.weekDaysMapping[val], 10) - parseInt(valholiday[index + 1], 10)) * 8 * employeeStrengthBasedOnLocation;
                    }
                    weekAvailableEffortArray[index] = weekAvailableEffortArray[index] + weekAvailableEffort;
                    weekUnUsedEffortArray[index] = weekUnUsedEffortArray[index] + weekAvailableEffort;
                    employeeBasedOnLocation.map(valEachEmployee => {
                        weekUsedEffortArray[index] += parseInt(valEachEmployee[`${val}t`]);
                        weekUnUsedEffortArray[index] -= parseInt(valEachEmployee[`${val}t`]);
                    });
                });
            }
        });
        return {
            weekAvailableEffortArray: weekAvailableEffortArray,
            weekUsedEffortArray: weekUsedEffortArray,
            weekUnUsedEffortArray: weekUnUsedEffortArray
        };
    }
}