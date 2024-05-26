import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalValuePipe } from '../pipe/total-value.pipe';

@NgModule({
    declarations: [
        TotalValuePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TotalValuePipe
    ]
})
export class SharedModule { }
