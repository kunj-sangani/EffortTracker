import * as React from 'react';
import styles from './EfforTracker.module.scss';
import { IEfforTrackerProps } from './IEfforTrackerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import DataLayer from "../../../Services/DataLayer";
import { IEfforTrackerState } from './IEfforTrackerState';
import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";
import * as moment from 'moment';
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';
import * as _ from 'lodash';

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

const optionsMonthlyChart: Chart.ChartOptions = {
  legend: {
    display: true,
    position: "left"
  }
};

export default class EfforTracker extends React.Component<IEfforTrackerProps, IEfforTrackerState> {
  public datalayer: DataLayer;
  constructor(props: IEfforTrackerProps, state: IEfforTrackerState) {
    super(props);
    this.datalayer = new DataLayer(props.datetime);
    this.state = {
      description: "",
      items: [],
      viewFields: [],
      effortChartData: {},
      monthlyEffortdata: {}
    };
    this.datalayer.processFetchedData(this.props.effortlist, this.props.filerelativePath).then((val) => {
      if (val) {
        let tempViewFields: IViewField[] = [];
        tempViewFields.push({ name: "ResourceName", displayName: "Employee Name", minWidth: 150 });
        let currentWeek: number = -1;
        Object.keys(this.datalayer.weekObjectMaaping).map((key) => {
          if (currentWeek !== parseInt(this.datalayer.weekObjectMaaping[key][1])) {
            currentWeek = parseInt(this.datalayer.weekObjectMaaping[key][1]);
            let temViewFieldWeekTotal: IViewField = { name: `week ${currentWeek} total`, displayName: `week ${currentWeek} total`, minWidth: 100 };
            tempViewFields.push(temViewFieldWeekTotal);
          }
          let temViewField: IViewField = { name: this.datalayer.weekObjectMaaping[key], displayName: moment(key).format('DD-MM-YY'), minWidth: 100 };
          tempViewFields.push(temViewField);
        });
        tempViewFields.push({ name: "Total Efforts", displayName: "Total Efforts", minWidth: 150 });
        let chartDataObject = this.datalayer.getChartDataSetData(this.props.offshore,this.props.onsite);
        let monthlyEffortdata: Chart.ChartData = {
          labels: ['Available Effort', 'Utilized Effort', 'Unutilized Effort'],
          datasets: [
            {
              label: `${moment(props.datetime.value).month()}, ${moment(props.datetime.value).year()}`,
              data:
                [
                  _.sum(chartDataObject.weekAvailableEffortArray),
                  _.sum(chartDataObject.weekUsedEffortArray),
                  _.sum(chartDataObject.weekUnUsedEffortArray)
                ]
            }
          ]
        };
        let effortChartData: Chart.ChartData = {
          labels: this.datalayer.getChartLabelsData(),
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
            }]
        };
        this.setState({
          viewFields: tempViewFields,
          items: this.datalayer.effortDataBasedOnUser,
          effortChartData: effortChartData,
          monthlyEffortdata: monthlyEffortdata
        });
      }
    }).catch(error => console.log(error));
  }

  private _getSelection(items: any[]) {
    console.log('Selected items:', items);
  }

  public render(): React.ReactElement<IEfforTrackerProps> {
    return (
      <div className={styles.efforTracker}>
        <div className={styles.container}>
          {/* <div className={styles.row}>
            <ListView
              items={this.state.items}
              viewFields={this.state.viewFields}
              iconFieldName="ServerRelativeUrl"
              compact={true}
              selectionMode={SelectionMode.multiple}
              selection={this._getSelection}
              showFilter={true}
              defaultFilter=""
              filterPlaceHolder="Search..." />
          </div> */}
          <div className={styles.row}>
            <div className={styles.column}>
              {_.isEmpty(this.state.effortChartData) ?
                null : <ChartControl
                  type={ChartType.Bar}
                  data={this.state.effortChartData}
                  options={options}
                />}
            </div>
            <div className={styles.column}>
              {_.isEmpty(this.state.monthlyEffortdata) ?
                null : <ChartControl
                  type={ChartType.Pie}
                  data={this.state.monthlyEffortdata}
                  options={optionsMonthlyChart}
                />}
            </div>
          </div>
          <div className={styles.row}>
            <table>
              {this.state.viewFields.map((val, index) => {
                return (<th><td>
                  {val.displayName}
                </td></th>);
              })}
              {this.state.items.map((itemval, itemindex) => {
                return (<tr>
                  {Object.keys(itemval).map((objval) => {
                    return (objval === "ResourceEMail" || 
                    objval === "ResourceLocation" ||
                    objval === "w0a" || objval === "w1a" || objval === "w2a" ||
                    objval === "w3a" || objval === "w4a" || objval === "w5a" ? "" : <td>{itemval[objval]}</td>);
                  })}
                </tr>);
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
