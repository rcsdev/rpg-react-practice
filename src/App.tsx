import React from 'react';
import './App.css';

import { createStore, combineReducers } from '../node_modules/redux'
import { playerReducer } from './redux/reducers/PlayerReducer';
import { mapReducer } from './redux/reducers/MapReducer';
import { move } from './redux/actions/PlayerActions';
import { initMap, updatePosition } from './redux/actions/MapActions';
import { Map } from './components/map/Map';
import { PlayerState } from './redux/states/PlayerState';


const reducers = combineReducers({
  map: mapReducer,
  player: playerReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
});

// Initialize map
store.dispatch(initMap(store.getState()));
store.dispatch(updatePosition((store.getState().player as PlayerState).position, store.getState().player));
// Move player and update map entity positioning
let playerNextPosition = 1;
store.dispatch(move(playerNextPosition, store.getState().player));
store.dispatch(updatePosition(playerNextPosition, store.getState().player));



const App = () => {
  return (
    <div className="App">
      <h1>This should look like an rpg map..</h1>
      <Map children={store.getState().map}></Map>
    </div>
  );
}

export default App;
