import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({children, gridGap = 3, ...props}) => {

    const width =  Math.ceil(Math.sqrt(children.length))

    const style = {
        display: 'grid',
        gridTemplate: `repeat(${width}, 1fr) / repeat(${width}, 1fr)`,
        gridGap: gridGap
    }

    return (
        <div style={style} {...props}>
            {children}
        </div>
    )
}

Grid.propTypes = {
    children: PropTypes.any,
    gridGap: PropTypes.number       //Space between grid elements
}

export default Grid