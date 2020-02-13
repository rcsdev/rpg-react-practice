import { Point } from '../../types/Point';
/**
 * Map Actions & Definitions
 */
export const MapActions = {
    INIT_MAP: 'INIT_MAP',
    UPDATE_POSITION: 'UPDATE_POSITION'
};
/**
 * Initializes the map
 */
export const initMap = (state: any) => ({
    type: MapActions.INIT_MAP,
    payload: { state }
});
/**
 * 
 * @param p current point to update with
 * @param entity entity to place into the given position
 */
export const updatePosition = (point: Point, entity: any) => ({
    type: MapActions.UPDATE_POSITION,
    payload: { point, entity }
});