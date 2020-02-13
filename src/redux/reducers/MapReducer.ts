
import { MapActions } from '../actions/MapActions';
import { MapPosition } from '../../types/MapPosition';
import { initialState } from '../../constants/InitialState';


export const mapReducer = (state = initialState.map, action: any) => {

    switch (action.type) {
        case MapActions.INIT_MAP:
            let gameMap = new Array<MapPosition>();
            for (let _i = 0; _i < state.rows; _i++) {
                for (let _j = 0; _j < state.columns; _j++) {
                    gameMap.push({ point: { x: _i, y: _j }, entities: [] });
                }
            }
            return {
                rows: 5,
                columns: 5,
                cellSize: 24,
                gameMap: gameMap
            }
        case MapActions.UPDATE_POSITION:
            let _gameMap = new Array<MapPosition>();
            for (let _i = 0; _i < state.gameMap.length; _i++) {
                _gameMap.push(state.gameMap[_i]);
                if (state.gameMap[_i]['point']['x'] === action.payload.point.x &&
                    state.gameMap[_i]['point']['y'] === action.payload.point.y) {
                    _gameMap[_i].entities.push(action.payload.entity);
                }
            }
            return {
                rows: 5,
                columns: 5,
                cellSize: 24,
                gameMap: _gameMap
            }
    }
    return state;
};