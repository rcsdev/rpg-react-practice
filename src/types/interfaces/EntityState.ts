/**
 * Entity interface definition.
 * Common entity properties
 */
export interface IEntity {
    /**
     * Name of the Entity
     */
    name: string,
    /**
     * Hit points.
     * When hitPoint reach zero entity dies.
     */
    hitPoints: number,
    /**
     * Max hit points.
     * Maximum hit point limit.
     */
    maxHitPoints: number
}