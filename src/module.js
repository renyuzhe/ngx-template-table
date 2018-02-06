/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExTableComponent } from './component/exTable.component';
import { ExTableService } from './service/exTable.service';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
var ExTableModule = (function () {
    function ExTableModule() {
    }
    ExTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        NgZorroAntdModule
                    ],
                    declarations: [ExTableComponent],
                    providers: [ExTableService],
                    exports: [ExTableComponent]
                },] },
    ];
    /** @nocollapse */
    ExTableModule.ctorParameters = function () { return []; };
    return ExTableModule;
}());
export { ExTableModule };
function ExTableModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ExTableModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ExTableModule.ctorParameters;
}
//# sourceMappingURL=module.js.map