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
    public cellsDuplicated: Cell[];

    constructor() {
    }

    ngOnInit() {
        this.buildDuplicatedArray(this.cells);
    }

    private buildDuplicatedArray(array) {
        const originalArray = [...array];
        const secondArray = [...array];

        const originalArrayShuffled = this.shuffleArray(originalArray);
        const secondArrayShuffled = this.shuffleArray(secondArray);

        const arrayToReturn = originalArrayShuffled.concat(secondArrayShuffled);

        this.cellsDuplicated = arrayToReturn;
    }

    private shuffleArray(array){
        return array
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);
    }
}
