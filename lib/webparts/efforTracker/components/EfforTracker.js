var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './EfforTracker.module.scss';
import DataLayer from "../../../Services/DataLayer";
import * as moment from 'moment';
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';
import * as _ from 'lodash';
var options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
};
var optionsMonthlyChart = {
    legend: {
        display: true,
        position: "left"
    }
};
var EfforTracker = /** @class */ (function (_super) {
    __extends(EfforTracker, _super);
    function EfforTracker(props, state) {
        var _this = _super.call(this, props) || this;
        _this.datalayer = new DataLayer(props.datetime);
        _this.state = {
            description: "",
            items: [],
            viewFields: [],
            effortChartData: {},
            monthlyEffortdata: {}
        };
        _this.datalayer.processFetchedData(_this.props.effortlist, _this.props.filerelativePath).then(function (val) {
            if (val) {
                var tempViewFields_1 = [];
                tempViewFields_1.push({ name: "ResourceName", displayName: "Employee Name", minWidth: 150 });
                var currentWeek_1 = -1;
                Object.keys(_this.datalayer.weekObjectMaaping).map(function (key) {
                    if (currentWeek_1 !== parseInt(_this.datalayer.weekObjectMaaping[key][1])) {
                        currentWeek_1 = parseInt(_this.datalayer.weekObjectMaaping[key][1]);
                        var temViewFieldWeekTotal = { name: "week " + currentWeek_1 + " total", displayName: "week " + currentWeek_1 + " total", minWidth: 100 };
                        tempViewFields_1.push(temViewFieldWeekTotal);
                    }
                    var temViewField = { name: _this.datalayer.weekObjectMaaping[key], displayName: moment(key).format('DD-MM-YY'), minWidth: 100 };
                    tempViewFields_1.push(temViewField);
                });
                var chartDataObject = _this.datalayer.getChartDataSetData();
                var monthlyEffortdata = {
                    labels: ['Available Effort', 'Utilized Effort', 'Unutilized Effort'],
                    datasets: [
                        {
                            label: moment(props.datetime.value).month() + ", " + moment(props.datetime.value).year(),
                            data: [
                                _.sum(chartDataObject.weekAvailableEffortArray),
                                _.sum(chartDataObject.weekUsedEffortArray),
                                _.sum(chartDataObject.weekUnUsedEffortArray)
                            ]
                        }
                    ]
                };
                var effortChartData = {
                    labels: _this.datalayer.getChartLabelsData(),
                    datasets: [
                        {
                            label: 'Available Effort',
                            data: chartDataObject.weekAvailableEffortArray,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderWidth: 1
                        },
                        {
                            label: 'Utilized Effort',
                            data: chartDataObject.weekUsedEffortArray,
                            backgroundColor: 'rgba(255, 159, 64, 0.2)',
                            borderWidth: 1
                        },
                        {
                            label: 'Unutilized Effort',
                            data: chartDataObject.weekUnUsedEffortArray,
                            backgroundColor: 'rgba(255, 205, 86, 0.2)',
                            borderWidth: 1
                        }
                    ]
                };
                _this.setState({
                    viewFields: tempViewFields_1,
                    items: _this.datalayer.effortDataBasedOnUser,
                    effortChartData: effortChartData,
                    monthlyEffortdata: monthlyEffortdata
                });
            }
        }).catch(function (error) { return console.log(error); });
        return _this;
    }
    EfforTracker.prototype._getSelection = function (items) {
        console.log('Selected items:', items);
    };
    EfforTracker.prototype.render = function () {
        return (React.createElement("div", { className: styles.efforTracker },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("table", null,
                        this.state.viewFields.map(function (val, index) {
                            return (React.createElement("th", null,
                                React.createElement("td", null, val.displayName)));
                        }),
                        this.state.items.map(function (itemval, itemindex) {
                            return (React.createElement("tr", null, Object.keys(itemval).map(function (objval) {
                                return (objval === "ResourceEMail" || objval === "ResourceLocation" ? "" : React.createElement("td", null, itemval[objval]));
                            })));
                        }))),
                React.createElement("div", { className: styles.row }, _.isEmpty(this.state.effortChartData) ?
                    null : React.createElement(ChartControl, { type: ChartType.Bar, data: this.state.effortChartData, options: options })),
                React.createElement("div", { className: styles.row }, _.isEmpty(this.state.monthlyEffortdata) ?
                    null : React.createElement(ChartControl, { type: ChartType.Pie, data: this.state.monthlyEffortdata, options: optionsMonthlyChart })))));
    };
    return EfforTracker;
}(React.Component));
export default EfforTracker;
//# sourceMappingURL=EfforTracker.js.map