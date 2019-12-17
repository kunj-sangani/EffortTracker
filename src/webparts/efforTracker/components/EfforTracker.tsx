import * as React from 'react';
import styles from './EfforTracker.module.scss';
import { IEfforTrackerProps } from './IEfforTrackerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import DataLayer from "../../../Services/DataLayer";
import { IEfforTrackerState } from './IEfforTrackerState';
import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";
import * as moment from 'moment';

export default class EfforTracker extends React.Component<IEfforTrackerProps, IEfforTrackerState> {
  public datalayer: DataLayer;
  constructor(props: IEfforTrackerProps, state: IEfforTrackerState) {
    super(props);
    this.datalayer = new DataLayer(props.datetime);
    this.state = {
      description: "",
      items:[],
      viewFields:[]
    };
    this.datalayer.processFetchedData(this.props.effortlist, this.props.employeelist).then((val) => {
      if(val){
        let tempViewFields:IViewField[]=[];
        tempViewFields.push({name:"ResourceName",displayName:"Employee Name",minWidth:150});
        Object.keys(this.datalayer.weekObjectMaaping).map((key)=>{
          let temViewField:IViewField={name:this.datalayer.weekObjectMaaping[key],displayName:moment(key).format('DD-MM-YY'),minWidth:100};
          tempViewFields.push(temViewField);
        });
        this.setState({
          viewFields:tempViewFields,
          items:this.datalayer.effortDataBasedOnUser
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
          <div className={styles.row}>
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
          </div>
        </div>
      </div>
    );
  }
}
