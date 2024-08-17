import React, { useEffect } from "react";

const BurgerMenu = ({
  open,
  setOpen,
  axis = "x",
  navHeight = 102,
  children,
  className,
  ...props
}) => {
  const ax = axis === "x" ? "X(" : "Y(-";

  let style = {
    marginTop: axis === "y" && navHeight - 2,
    transform: open ? `translate${ax}0)` : `translate${ax}100%)`,
    top: 0,
    transition: "height 0.3s ease-in-out, transform 0.3s ease-in-out",
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return (
    <>
      {open && (
        <button
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setOpen(false)}
          aria-label="Close Navbar"
          className="position-absolute w-100vw h-100vh z-index-4"
        ></button>
      )}
      <nav
        className={`flex-column d-flex justify-content-center bg-white text-left position-absolute w-100vw shadow-2 ${className}`}
        style={style}
        // aria-hidden={!open}
        {...props}
      >
        {children}
      </nav>
    </>
  );
};

export default BurgerMenu;
