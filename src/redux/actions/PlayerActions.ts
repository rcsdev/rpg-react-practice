/**
 * Player Actions
 */
export const PlayerActions = {
    MOVE: 'MOVE'
};
/**
 * Actions definitions
 */
export const move = (cellId: number, entity: any) => ({
    type: PlayerActions.MOVE,
    payload: { cellId: cellId, entity: entity }
});