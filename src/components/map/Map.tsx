import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Cell } from '../cell/Cell';
import { MapState } from '../../redux/states/MapState';

import './Map.css';
import { COLUMNS } from '../../constants/GameConfig';
/**
 * Map Cell definition
 */
export function Map({
    children
}: InferProps<typeof Map.propTypes>) {
    return <div>
        {children.gameMap.map((child: React.ReactNode, i: number) => {
            if (i > 0 && (i) % COLUMNS === 0) {
                return (<span><br></br><Cell id={i} key={i.toString()}></Cell></span>);
            } else {
                return (<Cell id={i} key={i.toString()}></Cell>)
            }
        })}
    </div>
}

Map.propTypes = {
    children: PropTypes.instanceOf(MapState).isRequired
};