import { MonsterActions } from '../actions/MonsterActions';
import { initialState } from '../../constants/InitialState';


export const monsterReducer =
    (state = initialState.monster, action: { type: any; payload: any; }) => {
        switch (action.type) {
            case MonsterActions.ATTACK:
                let damage = action.payload.damage;
                return {
                    ...state,
                    damage
                };
        }
        return state;
    };