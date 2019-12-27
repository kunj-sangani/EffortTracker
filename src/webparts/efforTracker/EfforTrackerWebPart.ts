import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  WebPartContext
} from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp";
import * as strings from 'EfforTrackerWebPartStrings';
import EfforTracker from './components/EfforTracker';
import { IEfforTrackerProps } from './components/IEfforTrackerProps';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldDateTimePicker, DateConvention, TimeConvention, IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
import { CalloutTriggers } from '@pnp/spfx-property-controls/lib/PropertyFieldHeader';
import { PropertyFieldTextWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldTextWithCallout';

export interface IEfforTrackerWebPartProps {
  description: string;
  effortlist: string;
  employeelist: string;
  datetime: IDateTimeFieldValue;
  filerelativePath: string;
}

export default class EfforTrackerWebPart extends BaseClientSideWebPart<IEfforTrackerWebPartProps> {

  public onInit(): Promise<void> {

    return super.onInit().then(_ => {

      // other init code may be present

      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<IEfforTrackerProps> = React.createElement(
      EfforTracker,
      {
        description: this.properties.description,
        effortlist: this.properties.effortlist,
        employeelist: this.properties.employeelist,
        context: this.context,
        datetime: this.properties.datetime,
        filerelativePath: this.properties.filerelativePath
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldListPicker('effortlist', {
                  label: 'Select a effort list',
                  selectedList: this.properties.effortlist,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
                }), PropertyFieldTextWithCallout('filerelativePath', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'textInfoHeaderFieldId',
                  label: 'File path for the employee details',
                  calloutContent: React.createElement('span', {}, 'file path should be in the format /sites/{sitecollectionname}/{libraryname}/{?folder}/{fileName}'),
                  calloutWidth: 150,
                  value: this.properties.filerelativePath
                }),
                PropertyFieldDateTimePicker('datetime', {
                  label: 'Select the date and time',
                  initialDate: this.properties.datetime,
                  dateConvention: DateConvention.Date,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'dateTimeFieldId',
                  showLabels: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
