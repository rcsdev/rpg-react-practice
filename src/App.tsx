import React from 'react';
import './App.css';

import { createStore, combineReducers } from '../node_modules/redux'

import { playerReducer } from './redux/reducers/PlayerReducer';
import { move } from './redux/actions/PlayerActions';
import { mapReducer } from './redux/reducers/MapReducer';
import { initMap, updatePosition } from './redux/actions/MapActions';
import { Point } from './types/Point';
import { Map } from './components/map/Map';


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
// Move player and update map entity positioning
let playerNextPosition = { x: 1, y: 1 } as Point;
store.dispatch(move(playerNextPosition));
store.dispatch(updatePosition(playerNextPosition, store.getState().player));



const App = () => {
  return (
    <div className="App">
      <h1>This should look like an rpg map..</h1>
      <Map children={store.getState().map.gameMap}></Map>
    </div>
  );
}

export default App;
