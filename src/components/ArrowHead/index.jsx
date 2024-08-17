import React from 'react';
import { lineHeight } from './variables';

export default ({ lineH = lineHeight, ...props }) => {

    const styles = {
        arrow: {
            width: 12,
            height: lineH,
            position: "absolute",
            borderRadius: 2
        },
        bottom: {
            transform: "rotate(45deg)",
            top: 0
        },
        head: {
            height: 2.5 * lineH,
            position: "relative"
        },
        top: {
            transform: "rotate(-45deg)",
            bottom: 0
        }
    };

    return (
        <div {...props}>
            <div style={styles.head}>
                <i style={{ ...styles.top, ...styles.arrow }} className="bg-dark"></i>
                <i style={{ ...styles.bottom, ...styles.arrow }} className="bg-dark"></i>
            </div>
        </div>
    )
};