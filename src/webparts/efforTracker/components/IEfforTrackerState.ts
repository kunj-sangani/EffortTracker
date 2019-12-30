import { IViewField } from "@pnp/spfx-controls-react/lib/ListView";

export interface IEfforTrackerState {
  description: string;
  items: any;
  viewFields: IViewField[];
  effortChartData: Chart.ChartData;
  monthlyEffortdata:Chart.ChartData;
}
