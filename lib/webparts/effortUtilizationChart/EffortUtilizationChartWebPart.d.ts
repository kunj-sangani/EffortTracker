import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IEffortUtilizationChartWebPartProps {
    description: string;
}
export default class EffortUtilizationChartWebPart extends BaseClientSideWebPart<IEffortUtilizationChartWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=EffortUtilizationChartWebPart.d.ts.map