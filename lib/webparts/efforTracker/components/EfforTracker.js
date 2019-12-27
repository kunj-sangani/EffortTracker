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
import styles from './EfforTracker.module.scss';
import DataLayer from "../../../Services/DataLayer";
import { ListView, SelectionMode } from "@pnp/spfx-controls-react/lib/ListView";
import * as moment from 'moment';
var EfforTracker = /** @class */ (function (_super) {
    __extends(EfforTracker, _super);
    function EfforTracker(props, state) {
        var _this = _super.call(this, props) || this;
        _this.datalayer = new DataLayer(props.datetime);
        _this.state = {
            description: "",
            items: [],
            viewFields: []
        };
        _this.datalayer.processFetchedData(_this.props.effortlist, _this.props.filerelativePath).then(function (val) {
            if (val) {
                var tempViewFields_1 = [];
                tempViewFields_1.push({ name: "ResourceName", displayName: "Employee Name", minWidth: 150 });
                Object.keys(_this.datalayer.weekObjectMaaping).map(function (key) {
                    var temViewField = { name: _this.datalayer.weekObjectMaaping[key], displayName: moment(key).format('DD-MM-YY'), minWidth: 100 };
                    tempViewFields_1.push(temViewField);
                });
                _this.setState({
                    viewFields: tempViewFields_1,
                    items: _this.datalayer.effortDataBasedOnUser
                });
            }
        }).catch(function (error) { return console.log(error); });
        return _this;
    }
    EfforTracker.prototype._getSelection = function (items) {
        console.log('Selected items:', items);
    };
    EfforTracker.prototype.render = function () {
        return (React.createElement("div", { className: styles.efforTracker },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement(ListView, { items: this.state.items, viewFields: this.state.viewFields, iconFieldName: "ServerRelativeUrl", compact: true, selectionMode: SelectionMode.multiple, selection: this._getSelection, showFilter: true, defaultFilter: "", filterPlaceHolder: "Search..." })))));
    };
    return EfforTracker;
}(React.Component));
export default EfforTracker;
//# sourceMappingURL=EfforTracker.js.map