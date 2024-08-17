import React from 'react';
import PropTypes from 'prop-types';
import ArrowHead from './ArrowHead';

const diam = 55;

const directionToDegrees = function (dir) {
    if (dir === "up") return 270
    else if (dir === "left") return 180
    else if (dir === "down") return 90
    else if (dir === "right") return 0
};

const CircleArrow = ({ dir, disabled, className="", style = {}, ...props }) => {

    console.log(props.disabled)

    const styles = {
        container: {
            width: diam,
            height: diam,
        },
        outer: {
            transform: `rotate(${directionToDegrees(dir)}deg)`
        },
        outsideBorder: {
            left: 2,
            bottom: -2,
            zIndex: -1
        },
        inner: {
            boxShadow: `inset 2px 2px white`
        }
    };

    console.log({disabled})

    const bgColor = disabled ? "bg-gray2" : "bg-primary darker-secondary-on-hover";

    return (
      <button
        aria-label="Scroll to articles"
        className={`outline-none ${className}`}
        style={{ ...styles.container, ...style }}
        disabled={disabled}
        {...props}
      >
        <div style={styles.outer} className="position-relative w-100 h-100">
          <div
            style={styles.outsideBorder}
            className={`position-absolute w-100 h-100 rounded-circle ${bgColor}`}
          ></div>
          <div
            style={styles.inner}
            className={`border border-dark w-100 h-100 cursor-pointer rounded-circle flex-center-col ${bgColor}`}
          >
            <ArrowHead className="mr-2" />
          </div>
        </div>
      </button>
    );

};

CircleArrow.propTypes = {
    dir: PropTypes.oneOf(["up", "down", "left", "right"]),
    className: PropTypes.string,
    style: PropTypes.any
};

export default CircleArrow;