import React from "react";

const Burger = ({ open, setOpen, className, ...props }) => {
  const styles = {
    button: {
      top: "5%",
      width: "2rem",
      height: "3rem",
      background: "transparent",
      padding: 0,
    },

    span: {
      width: "2rem",
      height: "0.17rem",
      borderRadius: 10,
      transition: "all 0.3s linear",
      transformOrigin: 1,
      marginTop: "0.23rem",
      marginBottom: "0.23rem",
    },

    span1: {
      transform: `${open ? "rotate(45deg)" : "rotate(0)"}`,
      marginBottom: open ? "0.275rem" : "0.23rem",
    },

    span2: {
      opacity: `${open ? "0" : "1"} `,
      transform: `${open ? "translateX(20px)" : "translateX(0)"} `,
    },

    span3: {
      transform: `${open ? "rotate(-45deg)" : "rotate(0)"} `,
    },
  };

  return (
    <button
      style={styles.button}
      className={`d-flex flex-column position-relative outline-none justify-content-around border-none cursor-pointer z-index-3 ${className}`}
      aria-label="Open navigation menu"
      onClick={() => setOpen(!open)}
      {...props}
    >
      <div className="position-absolute d-flex flex-column align-items-center">
        <div
          className="bg-dark position-relative"
          style={{ ...styles.span, ...styles.span1 }}
        />
        <div
          className="bg-dark position-relative"
          style={{ ...styles.span, ...styles.span2 }}
        />
        <div
          className="bg-dark position-relative"
          style={{ ...styles.span, ...styles.span3 }}
        />
      </div>
    </button>
  );
};

export default Burger;
