/**
 * Player interface definition.
 */
export class PlayerState {
    /**
     * Player name
     */
    name: string;
    /**
     * Life hit points
     */
    hitPoints: number;
    /**
     * Maximun life hit points
     */
    maxHitPoints: number;
    /**
     * Player cell position
     */
    position: number;
    /**
     * Constructor
     */
    constructor() {
        this.position = 0;
        this.name = 'Player';
        this.maxHitPoints = 50;
        this.hitPoints = this.maxHitPoints;
    }
}