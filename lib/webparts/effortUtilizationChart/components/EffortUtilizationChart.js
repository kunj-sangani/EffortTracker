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
import styles from './EffortUtilizationChart.module.scss';
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';
// set the data
var data = {
    labels: [
        'January', 'February', 'March', 'April'
    ],
    datasets: [{
            label: 'My First Dataset',
            data: [
                65, 59, 80, 81
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
            ],
            borderWidth: 1
        }, {
            label: 'My second Dataset',
            data: [
                65, 59, 80, 81
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
            ],
            borderWidth: 1
        }, {
            label: 'My third Dataset',
            data: [
                65, 59, 80, 81
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
            ],
            borderWidth: 1
        }]
};
// set the options
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
var EffortUtilizationChart = /** @class */ (function (_super) {
    __extends(EffortUtilizationChart, _super);
    function EffortUtilizationChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EffortUtilizationChart.prototype.render = function () {
        return (React.createElement("div", { className: styles.effortUtilizationChart },
            React.createElement("div", { className: styles.container },
                React.createElement(ChartControl, { type: ChartType.Bar, data: data, options: options }))));
    };
    return EffortUtilizationChart;
}(React.Component));
export default EffortUtilizationChart;
//# sourceMappingURL=EffortUtilizationChart.js.map