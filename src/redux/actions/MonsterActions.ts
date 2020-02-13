/**
 * Monster Actions
 */
export const MonsterActions = {
    ATTACK: 'ATTACK'
};
/**
 * Actions definitions
 */
export const attack = (damage: number) => ({
    type: MonsterActions.ATTACK,
    payload: damage
});