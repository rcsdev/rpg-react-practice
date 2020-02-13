import { PlayerActions } from '../actions/PlayerActions';
import { initialState } from '../../constants/InitialState';


export const playerReducer = (state = initialState.player, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case PlayerActions.MOVE:
            let { x, y } = action.payload;
            return {
                position: {
                    x: x,
                    y: y
                }
            };
        default:
            return state;
    }
};