var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import BaseStore from './BaseStore';
import ManifestManager from './../Components/DeveloperModules/ManifestManager/ManifestManager';
import PerformanceDisplay from './../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay';
import TraceDisplay from './../Components/DeveloperModules/TraceDisplay/TraceDisplay';
import DeveloperToolsTab from './../Models/DeveloperToolsTab';
import manifestManagerStrings from './../Components/DeveloperModules/ManifestManager/ManifestManager.resx';
import performanceDisplayStrings from './../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.resx';
import traceDisplayStrings from './../Components/DeveloperModules/TraceDisplay/TraceDisplay.resx';
var DEFAULT_HEIGHT = 1 / 4;
var MIN_HEIGHT = 1 / 6;
var MAX_HEIGHT = 3 / 4;
var DeveloperToolsConsoleStore =  (function (_super) {
    __extends(DeveloperToolsConsoleStore, _super);
    function DeveloperToolsConsoleStore() {
        var _this = _super.call(this) || this;
        _this._height = DEFAULT_HEIGHT;
        _this._visible = false;
        _this._selectedTabId = 0;
        _this._tabs = [
            new DeveloperToolsTab({
                title: traceDisplayStrings.TabTitle,
                component: TraceDisplay
            }),
            new DeveloperToolsTab({
                title: performanceDisplayStrings.TabTitle,
                component: PerformanceDisplay
            }),
            new DeveloperToolsTab({
                title: manifestManagerStrings.tabTitle,
                component: ManifestManager
            })
        ];
        return _this;
    }
    Object.defineProperty(DeveloperToolsConsoleStore, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new DeveloperToolsConsoleStore();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsConsoleStore.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsConsoleStore.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsConsoleStore.prototype, "selectedTabId", {
        get: function () {
            return this._selectedTabId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsConsoleStore.prototype, "tabs", {
        get: function () {
            return this._tabs;
        },
        enumerable: true,
        configurable: true
    });
    DeveloperToolsConsoleStore.prototype.resizeConsole = function (height) {
        var newHeight = this._height;
        if (height >= MAX_HEIGHT) {
            newHeight = MAX_HEIGHT;
        }
        else if (height <= MIN_HEIGHT) {
            newHeight = MIN_HEIGHT;
        }
        else {
            newHeight = height;
        }
        if (newHeight !== this._height) {
            this._height = newHeight;
            this.emitChange();
        }
    };
    DeveloperToolsConsoleStore.prototype.showHideConsole = function (show) {
        if (this._visible !== show) {
            this._visible = show;
            this.emitChange();
        }
    };
    DeveloperToolsConsoleStore.prototype.registerTab = function (tab) {
        this._tabs.push(tab);
        if (this._tabs.length === 1) {
            this._selectedTabId = 0;
        }
        this.emitChange();
    };
    return DeveloperToolsConsoleStore;
}(BaseStore));
export { DeveloperToolsConsoleStore };
export default DeveloperToolsConsoleStore.instance; 
