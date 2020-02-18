
import { MapActions } from '../actions/MapActions';
import { MapPosition } from '../../types/MapPosition';
import { initialState } from '../states/InitialState';
import { ROWS, COLUMNS } from '../../constants/GameConfig';


export const mapReducer = (state = initialState.map, action: any) => {
    switch (action.type) {
        case MapActions.INIT_MAP:
            const _gameMap = new Array<MapPosition>();
            let cellCount = 0;
            for (let _i = 0; _i < ROWS; _i++) {
                for (let _j = 0; _j < COLUMNS; _j++) {
                    _gameMap.push({cellId: cellCount, entities: [] });
                    cellCount++;
                }
            }
            return {
                rows: ROWS,
                columns: COLUMNS,
                gameMap: _gameMap
            }
        case MapActions.UPDATE_POSITION:
            const __gameMap = new Array<MapPosition>();

            state.gameMap.forEach(cell => {
                if (cell.cellId === action.payload.cellId) {
                    if (!cell.entities.includes(action.payload.entity)){
                        cell.entities.push(action.payload.entity);
                    }
                }
                __gameMap.push(cell);
            });
            return {
                rows: ROWS,
                columns: COLUMNS,
                gameMap: __gameMap
            }
    }
    return state;
};