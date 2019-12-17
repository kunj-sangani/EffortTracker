import { sp } from "@pnp/sp";
import * as _ from 'lodash';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import { IDateTimeFieldValue } from "@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker";

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


    constructor(datetime?: IDateTimeFieldValue) {
        this.effortDataBasedOnUser = [];
        this.weekObjectMaaping = {};
        if (datetime) {
            this.getWeekDays(moment(datetime.value).month(), moment(datetime.value).year());
        }
    }

    private async getEfforData(efforList: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            console.log(this.weekData);
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
                    sp.web.lists.getById(efforList).items.filter(`Date ge datetime'${tempDate}T00:00:00Z' and Date le datetime'${tempDate}T23:59:59Z'`).top(2000).inBatch(batch).getPaged().then(p => {
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
                        // console.log(JSON.stringify(p.results, null, 4));
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
            let startDate: any = Moment.utc([year, month]);
            let firstDay: any = Moment(startDate).startOf('month');
            let endDay: any = Moment(startDate).endOf('month');
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

                let firstWeekDay: any = Moment().year(year).month(month).week(weeknumber).day(1);
                let lastWeekDay: any = Moment().year(year).month(month).week(weeknumber).day(5);
                if (month == 11 && (weeks.length - 1) == index) {
                    firstWeekDay = Moment().year(year).month(month).week(weeks[index - 1]).day(1);
                    firstWeekDay.add(7, "day");
                    lastWeekDay = Moment().year(year).month(month).week(weeks[index - 1]).day(5);
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

    public async processFetchedData(efforList: string, employeeList: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.fetchEmployeeData(employeeList);
            this.getEfforData(efforList).then((data) => {
                console.log(this.efforData);
                console.log(this.employeeData);
                this.employeeData.map((val, index) => {
                    let tempData = _.filter(this.efforData, { 'ResourceId': val.Employee.Id });
                    console.log(tempData);
                    let tempObject: any = {};
                    tempObject.ResourceId = val.Employee.Id;
                    tempObject.ResourceName = val.Employee.Title;
                    tempObject.ResourceEMail = val.Employee.EMail;
                    tempData.map((valueofResource) => {
                        console.log(valueofResource);
                        let tempObjDate = this.weekObjectMaaping[moment(valueofResource["Date"]).format('YYYYMMDD')];
                        if (tempObject[tempObjDate] === undefined) {
                            tempObject[tempObjDate] = valueofResource["Effort"];
                        } else {
                            tempObject[tempObjDate] += valueofResource["Effort"];
                        }
                    });
                    this.effortDataBasedOnUser.push(tempObject);
                });
                resolve(true);
            }).catch(error => {console.log(error); reject(false);});
        });
    }

    private fetchEmployeeData(employeeList: string) {
        sp.web.lists.getById(employeeList).items.select("Employee/EMail,Employee/Title,Employee/Id").expand('Employee').top(2000).getPaged().then(p => {
            this.employeeData = p.results;
            if (p.hasNext) {
                p.getNext().then(p2 => {
                    this.employeeData = [...this.employeeData, ...p2.results];
                });
            }
        });
    }

}