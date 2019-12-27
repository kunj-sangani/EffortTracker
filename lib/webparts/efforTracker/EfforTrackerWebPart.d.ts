import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
export interface IEfforTrackerWebPartProps {
    description: string;
    effortlist: string;
    employeelist: string;
    datetime: IDateTimeFieldValue;
    filerelativePath: string;
}
export default class EfforTrackerWebPart extends BaseClientSideWebPart<IEfforTrackerWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=EfforTrackerWebPart.d.ts.map