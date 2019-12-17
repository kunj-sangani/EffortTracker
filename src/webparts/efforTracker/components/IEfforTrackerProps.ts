import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IDateTimeFieldValue } from "@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker";

export interface IEfforTrackerProps {
  description: string;
  effortlist:string;
  employeelist:string;
  context:WebPartContext;
  datetime:IDateTimeFieldValue;
}
