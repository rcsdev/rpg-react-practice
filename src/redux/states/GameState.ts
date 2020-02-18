import { MapState } from "./MapState";
import { PlayerState } from "./PlayerState";

export interface GameState {
    /**
     * Player State (redux)
     */
    player: PlayerState,
    /**
     * Map State (redux)
     */
    map: MapState
}