import React from 'react';
import colors from 'styles/js/colors.js';

export default ({style, ...props}) => (
    <div
        style={{
            ...style,
            height: 2,
            backgroundImage: `linear-gradient(to right, ${colors.gray[2]}, ${colors.gray.t2})`
        }}
        {...props}
    ></div>
);