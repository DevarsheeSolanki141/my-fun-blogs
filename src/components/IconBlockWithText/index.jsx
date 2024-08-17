import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const IconBlockWithText = ({
  title,
  text,
  link,
  buttonText,
  className = "",
  style = {},
  children,
  ...props
}) => (
  /**
   * Click through action blocks with an svg and a link to the main page
   */
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className={`
            link-nostyle
            position-relative
            overflow-hidden
            rounded
            col-11
            hover-grow
            ml-auto
            py-4
            px-3
            flex-center-col
            bg-gray2
            ${className}
        `}
    style={{
      minHeight: 350,
      ...style,
    }}
    {...props}
  >
    {/* <div className="skewed-bg"></div> */}
    <h5 className="font-weight-bold text-dark">{title}</h5>
    <span className=" text-dark" style={{ maxWidth: 300, height: 48 }}>
      {text}
    </span>
    <div className="my-3">{children}</div>
    <span
      className="text-nowrap col-10 py-2 bg-primary font-weight-bold rounded text-white"
      style={{ maxHeight: 42 }}
    >
      {buttonText}
    </span>
  </a>
);

IconBlockWithText.propTypes = {
  title: PropTypes.string, //Header of block
  text: PropTypes.string, //text under title
  link: PropTypes.string, //What the block links to
  buttonText: PropTypes.string, //Text displayed on button
  className: PropTypes.string,
  children: PropTypes.any, //An inline svg
};

export default IconBlockWithText;
