import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ BoardComponent ],
    entryComponents: [ BoardComponent ],
    exports: [BoardComponent]
})
export class BoardModule {
}
