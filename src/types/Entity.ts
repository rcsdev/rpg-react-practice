/**
 * Abstract Entity Definition
 */
export type Entity = {
    /**
     * Name of the entity
     */
    name: String,
    /**
     * Current entity hit points
     */
    hitPoints: number
    /**
     * Hit points limit
     */
    maxHitPoints: number
};