var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { sp } from "@pnp/sp";
import * as _ from 'lodash';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
var moment = extendMoment(Moment);
var DataLayer = /** @class */ (function () {
    function DataLayer(datetime) {
        this.effortDataBasedOnUser = [];
        this.weekObjectMaaping = {};
        if (datetime) {
            this.getWeekDays(moment(datetime.value).month(), moment(datetime.value).year());
        }
    }
    Object.defineProperty(DataLayer.prototype, "efforData", {
        get: function () {
            return this._efforData;
        },
        set: function (v) {
            this._efforData = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataLayer.prototype, "weekData", {
        get: function () {
            return this._weekData;
        },
        set: function (v) {
            this._weekData = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataLayer.prototype, "effortDataBasedOnUser", {
        get: function () {
            return this._effortDataBasedOnUser;
        },
        set: function (v) {
            this._effortDataBasedOnUser = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataLayer.prototype, "employeeData", {
        get: function () {
            return this._employeeData;
        },
        set: function (v) {
            this._employeeData = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataLayer.prototype, "weekObjectMaaping", {
        get: function () {
            return this._weekObjectMaaping;
        },
        set: function (v) {
            this._weekObjectMaaping = v;
        },
        enumerable: true,
        configurable: true
    });
    DataLayer.prototype.getEfforData = function (efforList) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log(_this.weekData);
                        var batch = sp.createBatch();
                        var count = 0;
                        _this.weekData.map(function (val, index) {
                            var countdays = 0;
                            var startDate = val.start.format('YYYY-MM-DD');
                            var endDay = val.end.format('YYYY-MM-DD');
                            var currDate = moment(startDate).startOf('day');
                            var lastDate = moment(endDay).startOf('day');
                            lastDate = lastDate.add(1, 'days');
                            do {
                                count++;
                                countdays++;
                                var tempDate = currDate.format('YYYY-MM-DD');
                                _this.weekObjectMaaping[currDate.format('YYYYMMDD')] = "w" + index + "d" + countdays;
                                sp.web.lists.getById(efforList).items.filter("Date ge datetime'" + tempDate + "T00:00:00Z' and Date le datetime'" + tempDate + "T23:59:59Z'").top(2000).inBatch(batch).getPaged().then(function (p) {
                                    if (p.results.length > 0) {
                                        if (_this.efforData === undefined) {
                                            _this.efforData = p.results;
                                        }
                                        else {
                                            _this.efforData = _this.efforData.concat(p.results);
                                        }
                                    }
                                    count--;
                                    if (count === 0) {
                                        resolve(_this.efforData);
                                    }
                                    // console.log(JSON.stringify(p.results, null, 4));
                                }).catch(function (error) {
                                    count--;
                                    if (count === 0) {
                                        resolve(_this.efforData);
                                    }
                                });
                            } while (currDate.add(1, 'days').diff(lastDate) < 0);
                        });
                        batch.execute().then(function () { return console.log("All done!"); });
                    })];
            });
        });
    };
    DataLayer.prototype.getWeekDays = function (month, year) {
        if (month && year) {
            var startDate = Moment.utc([year, month]);
            var firstDay = Moment(startDate).startOf('month');
            var endDay = Moment(startDate).endOf('month');
            var currDate = moment(startDate).startOf('day');
            var lastDate = moment(endDay).startOf('day');
            var weeks = [];
            while (currDate.add(1, 'days').diff(lastDate) < 0) {
                if (weeks.indexOf(currDate.week()) === -1) {
                    weeks.push(currDate.week());
                }
            }
            var calendar = [];
            for (var index = 0; index < weeks.length; index++) {
                var weeknumber = weeks[index];
                var firstWeekDay = Moment().year(year).month(month).week(weeknumber).day(1);
                var lastWeekDay = Moment().year(year).month(month).week(weeknumber).day(5);
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
                var weekRange = moment.range(firstWeekDay, lastWeekDay);
                calendar.push(weekRange);
            }
            this.weekData = calendar;
        }
    };
    DataLayer.prototype.processFetchedData = function (efforList, employeeList) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fetchEmployeeData(employeeList);
                        _this.getEfforData(efforList).then(function (data) {
                            console.log(_this.efforData);
                            console.log(_this.employeeData);
                            _this.employeeData.map(function (val, index) {
                                var tempData = _.filter(_this.efforData, { 'ResourceId': val.Employee.Id });
                                console.log(tempData);
                                var tempObject = {};
                                tempObject.ResourceId = val.Employee.Id;
                                tempObject.ResourceName = val.Employee.Title;
                                tempObject.ResourceEMail = val.Employee.EMail;
                                tempData.map(function (valueofResource) {
                                    console.log(valueofResource);
                                    var tempObjDate = _this.weekObjectMaaping[moment(valueofResource["Date"]).format('YYYYMMDD')];
                                    if (tempObject[tempObjDate] === undefined) {
                                        tempObject[tempObjDate] = valueofResource["Effort"];
                                    }
                                    else {
                                        tempObject[tempObjDate] += valueofResource["Effort"];
                                    }
                                });
                                _this.effortDataBasedOnUser.push(tempObject);
                            });
                            resolve(true);
                        }).catch(function (error) { console.log(error); reject(false); });
                    })];
            });
        });
    };
    DataLayer.prototype.fetchEmployeeData = function (employeeList) {
        var _this = this;
        sp.web.lists.getById(employeeList).items.select("Employee/EMail,Employee/Title,Employee/Id").expand('Employee').top(2000).getPaged().then(function (p) {
            _this.employeeData = p.results;
            if (p.hasNext) {
                p.getNext().then(function (p2) {
                    _this.employeeData = _this.employeeData.concat(p2.results);
                });
            }
        });
    };
    return DataLayer;
}());
export default DataLayer;
//# sourceMappingURL=DataLayer.js.map