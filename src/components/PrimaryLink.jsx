import React from 'react';
import PropTypes from 'prop-types';

const PrimaryLink = ({ className, style, children, isDisabled, ...props }) => {

  return (
    <span
      className={`btn btn-primary text-white flex-center-row mx-auto rounded-2 font-h5m ${className}`}
      style={{
        height: 55,
        width: 275,
        ...style
      }}
      {...props}
    >
      {children}
    </span>
  );

};

PrimaryLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  isDisabled: PropTypes.bool    //Says if the button is clickable
};

export default PrimaryLink;