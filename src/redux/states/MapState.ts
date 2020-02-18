import { MapPosition } from '../../types/MapPosition';
import { ROWS, COLUMNS } from '../../constants/GameConfig';

/**
 * Map initializer
 */
const _gameMap = new Array<MapPosition>();
let cellCount = 0;
for (let _i = 0; _i < ROWS; _i++) {
    for (let _j = 0; _j < COLUMNS; _j++) {
        _gameMap.push({cellId: cellCount, entities: [] });
        cellCount++;
    }
}
/**
 * Map definition.
 */
export class MapState {
    /**
     * Number of rows
     */
    rows: number;
    /**
     * Number of columns
     */
    columns: number;
    /**
     * Array map
     */
    gameMap: Array<MapPosition>;
    /**
     * Constructor
     */
    constructor() {
        this.rows = ROWS;
        this.columns = COLUMNS;
        this.gameMap = _gameMap;
    }
};