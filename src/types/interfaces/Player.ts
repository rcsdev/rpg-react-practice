import { Entity } from '../Entity';
import { Point } from '../Point';

/**
 * Player Definition
 */
export interface Player extends Entity {
    /**
     * Experience points
     */
    xp: number,
    /**
     * Current position
     */
    position: Point
}