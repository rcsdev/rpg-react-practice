import { MapPosition } from '../MapPosition';

export interface MapState {
    rows: number,
    columns: number,
    cellSize: number,
    gameMap: Array<MapPosition>
};