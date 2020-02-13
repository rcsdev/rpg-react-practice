import { Entity } from '../Entity';

/**
 * Monster Definition
 */
export interface Monster extends Entity {
    /**
     * Damage points
     */
    damage: number
}