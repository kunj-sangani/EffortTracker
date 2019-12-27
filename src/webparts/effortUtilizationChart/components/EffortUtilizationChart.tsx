import * as React from 'react';
import styles from './EffortUtilizationChart.module.scss';
import { IEffortUtilizationChartProps } from './IEffortUtilizationChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';

// set the data
const data: Chart.ChartData = {
  labels:
    [
      'January', 'February', 'March', 'April'
    ],
  datasets:
    [{
      label: 'My First Dataset',
      data:
        [
          65, 59, 80, 81
        ],
      backgroundColor:
        [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
      borderColor:
        [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)'
        ],
      borderWidth: 1
    },{
      label: 'My second Dataset',
      data:
        [
          65, 59, 80, 81
        ],
      backgroundColor:
        [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
      borderColor:
        [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)'
        ],
      borderWidth: 1
    },{
      label: 'My third Dataset',
      data:
        [
          65, 59, 80, 81
        ],
      backgroundColor:
        [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
      borderColor:
        [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)'
        ],
      borderWidth: 1
    }]
};

// set the options
const options: Chart.ChartOptions = {
  scales:
  {
    yAxes:
      [
        {
          ticks:
          {
            beginAtZero: true
          }
        }
      ]
  }
};

export default class EffortUtilizationChart extends React.Component<IEffortUtilizationChartProps, {}> {
  public render(): React.ReactElement<IEffortUtilizationChartProps> {
    return (
      <div className={styles.effortUtilizationChart}>
        <div className={styles.container}>
          <ChartControl
            type={ChartType.Bar}
            data={data}
            options={options}
          />
        </div>
      </div>
    );
  }
}
