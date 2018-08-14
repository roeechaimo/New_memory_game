import { Component, OnInit } from '@angular/core';

import { Cells } from '../../assets/mocks/cells.mock';
import { Cell } from '../../models/cell.model';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: [ './board.component.scss' ]
})
export class BoardComponent implements OnInit {

    // todo - move to db when we get the chance
    public cells: Cell[] = Cells;

    constructor() {
    }

    ngOnInit() {
    }

}
