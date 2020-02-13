import { Point } from '../../types/Point';

/**
 * Player Actions
 */
export const PlayerActions = {
    MOVE: 'MOVE'
};
/**
 * Actions definitions
 */
export const move = (point: Point) => ({
    type: PlayerActions.MOVE,
    payload: point
});