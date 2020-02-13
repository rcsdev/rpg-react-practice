import { MapPosition } from '../MapPosition';

export type Map = {
    /**
     * Number of columns
     */
    columns: number,
    /**
     * Number of rows
     */
    rows: number,
    /**
     * Size of a cell
     */
    cellSize: number,
    /**
     * Map matrix reference
     */
    gameMap: MapPosition[][]
}