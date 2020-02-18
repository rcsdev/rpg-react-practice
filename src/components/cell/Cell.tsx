import React from 'react';
import PropTypes, { InferProps } from 'prop-types'

import './Cell.css';
/**
 * Map Cell definition
 */
export function Cell({ id }: InferProps<typeof Cell.propTypes>) {
    return (
        <div className="cell"> id:{id} </div>
    );
};

Cell.propTypes = {
    id: PropTypes.number.isRequired
}