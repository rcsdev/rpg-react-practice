import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Cell } from '../cell/Cell';
/**
 * Map Cell definition
 */
export function Map({
    children
}: InferProps<typeof Map.propTypes>) {
    return <div>
        {children.map((child: React.ReactNode, i: number) => {
            return (<Cell id={i}></Cell>)
        })}
    </div>
}

Map.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};