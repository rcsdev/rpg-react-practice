import { PlayerState } from "./PlayerState";
import { MapState } from "./MapState";
import { GameState } from "./GameState";

export const initialState: GameState = {
    player: new PlayerState(),
    map: new MapState()
};