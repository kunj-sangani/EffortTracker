import { IDateTimeFieldValue } from "@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker";
export default class DataLayer {
    private _efforData;
    efforData: any;
    private _weekData;
    weekData: any;
    private _effortDataBasedOnUser;
    effortDataBasedOnUser: any;
    private _employeeData;
    employeeData: any;
    private _weekObjectMaaping;
    weekObjectMaaping: any;
    constructor(datetime?: IDateTimeFieldValue);
    private getEfforData;
    private getWeekDays;
    processFetchedData(efforList: string, employeeList: string): Promise<any>;
    private fetchEmployeeData;
}
//# sourceMappingURL=DataLayer.d.ts.map