import React from 'react';
import logo from './logo.svg';
import './App.css';


import { createStore, combineReducers } from '../node_modules/redux'

import { playerReducer } from './redux/reducers/PlayerReducer';
import { monsterReducer } from './redux/reducers/MonsterReducer';
import { move } from './redux/actions/PlayerActions';
import { mapReducer } from './redux/reducers/MapReducer';
import { initMap, updatePosition } from './redux/actions/MapActions';
import { Point } from './types/Point';


const reducers = combineReducers({
  map: mapReducer,
  player: playerReducer,
  monster: monsterReducer
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
