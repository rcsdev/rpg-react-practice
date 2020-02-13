import { createStore, combineReducers } from '../node_modules/redux'

import { playerReducer } from './redux/reducers/PlayerReducer';
import { monsterReducer } from './redux/reducers/MonsterReducer';
import { mapReducer } from './redux/reducers/MapReducer';
import { initMap } from './redux/actions/MapActions';

/*
const reducers = combineReducers({
    map: mapReducer,
    player: playerReducer,
    monster: monsterReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
});

let state = store.getState();
store.dispatch(initMap(state));
*/
//store.dispatch(move({ x: 1, y: 1 }));