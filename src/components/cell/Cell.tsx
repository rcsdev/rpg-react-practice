import React from 'react';
import PropTypes, { InferProps } from 'prop-types'
/**
 * Map Cell definition
 */
export function Cell({ id }: InferProps<typeof Cell.propTypes>) {
    return (
        <div> Cell id: {id} </div>
    );
};

Cell.propTypes = {
    id: PropTypes.number.isRequired
}