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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp";
import * as strings from 'EfforTrackerWebPartStrings';
import EfforTracker from './components/EfforTracker';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldDateTimePicker, DateConvention } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
import { CalloutTriggers } from '@pnp/spfx-property-controls/lib/PropertyFieldHeader';
import { PropertyFieldTextWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldTextWithCallout';
var EfforTrackerWebPart = /** @class */ (function (_super) {
    __extends(EfforTrackerWebPart, _super);
    function EfforTrackerWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EfforTrackerWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    EfforTrackerWebPart.prototype.render = function () {
        var element = React.createElement(EfforTracker, {
            description: this.properties.description,
            effortlist: this.properties.effortlist,
            employeelist: this.properties.employeelist,
            context: this.context,
            datetime: this.properties.datetime,
            filerelativePath: this.properties.filerelativePath,
            offshore: this.properties.offshore,
            onsite: this.properties.onsite
        });
        ReactDom.render(element, this.domElement);
    };
    EfforTrackerWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(EfforTrackerWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    EfforTrackerWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                }), PropertyFieldTextWithCallout('offshore', {
                                    calloutTrigger: CalloutTriggers.Hover,
                                    key: 'textInfoHeaderFieldId',
                                    label: 'off shore locations',
                                    calloutContent: React.createElement('span', {}, 'Please enter the value in "," seperated manner'),
                                    calloutWidth: 150,
                                    value: this.properties.offshore
                                }), PropertyFieldTextWithCallout('onsite', {
                                    calloutTrigger: CalloutTriggers.Hover,
                                    key: 'textInfoHeaderFieldId',
                                    label: 'on site locations',
                                    calloutContent: React.createElement('span', {}, 'Please enter the value in "," seperated manner'),
                                    calloutWidth: 150,
                                    value: this.properties.onsite
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
    };
    return EfforTrackerWebPart;
}(BaseClientSideWebPart));
export default EfforTrackerWebPart;
//# sourceMappingURL=EfforTrackerWebPart.js.map