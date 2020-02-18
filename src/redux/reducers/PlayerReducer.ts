import { PlayerActions } from '../actions/PlayerActions';
import { initialState } from '../states/InitialState';

export const playerReducer = (state = initialState.player, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case PlayerActions.MOVE:
            return { 
                position: action.payload.cellId,
                name: action.payload.entity.name,
                maxHitPoints: action.payload.entity.maxHitPoints,
                hitPoints: action.payload.entity.hitPoints
            };
        default:
            return state;
    }
};