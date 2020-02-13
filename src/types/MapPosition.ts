import { Entity } from './Entity';
import { Point } from './Point';

/**
 * MapPosition Type Definition
 */
export type MapPosition = {
    /**
     * X-Y Axis Point
     */
    point: Point
    /**
     * Entity array
     */
    entities: Entity[],
}