import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "gatsby";
import links from "data/links";
import { useOnClickOutside } from "hooks";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
// import FFUNCarsLogo from "images/logo/ffuncars-horizontal-logo.png";
import FFUNLogo from "../../assets/images/svg/ffun-logo.svg";
import PhoneChat from "images/svg/phone-chat.svg";
// import DigitalChat from "images/svg/digital-chat.svg";

const styles = {
  container: {
    height: 84,
  },
  navHeight: {
    height: 109,
  },
  topNav: {
    height: 37,
    lineHeight: "37px",
  },
  iconDropDown: {
    marginTop: 11,
  },
  imgHeight: {
    height: 30,
  },
};

const Navbar = () => {
  const navRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [finOpen, setFinOpen] = useState(false);
  const [supportAndContactOpen, setSupportAndContactOpen] = useState(false);
  const [whyFfunCarsOpen, setWhyFfunCarsOpen] = useState(false);

  const closeAll = (exceptFor) => () => {
    //Takes the setter as an argument, because the variable would compare the variable itself, and not compare the variable by reference
    [
      [finOpen, setFinOpen],
      [supportAndContactOpen, setSupportAndContactOpen],
      [whyFfunCarsOpen, setWhyFfunCarsOpen],
    ].forEach(([state, setState]) => {
      if (setState === exceptFor) {
        setState(!state);
      } else {
        setState(false);
      }
    });
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        closeAll()();
      }
    };
    window && window.addEventListener("keydown", listener);
    return () => {
      window && window.removeEventListener("keydown", listener);
    };
  });

  useOnClickOutside(navRef, closeAll());

  const NavLink = ({ href, children, ...props }) => {
    return (
      <a {...props} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  };

  const BLink = ({ children, href, ariaLabel = "" }) => (
    <NavLink
      className="hover-primary text-decoration-none font-weight-normal navbar-double-drop pl-4 pl-lg-0 text-nowrap w-100 w-lg-unset px-4 ml-lg-3"
      href={href}
      aria-label={ariaLabel}
    >
      {children}
    </NavLink>
  );

  const Dropdown = ({ title, children, open, onClick, className = "" }) => (
    <div className={`nav-dropdown-mob z-index-5 ${className}`}>
      <button
        className={`dropdown-toggle bg-transparent font-weight-normal ${
          className.includes("text-dark") ? "text-dark" : "text-white"
        } ${className.includes("hover-primary") ? "hover-primary" : ""}`}
        type="button"
        aria-label="Dropdown for the FFUN"
        onClick={onClick}
      >
        {title}
      </button>
      {open && (
        <div
          style={{ marginTop: "0.125em", zIndex: 99999 }}
          className="custom-dropdown-menu py-2 position-lg-absolute font-weight-normal border text-left bg-white z-index-5 mb-lg-0 mb-2"
        >
          {children.map((child, idx) => (
            <div key={idx} className="pr-2">
              {child}
              {idx !== children.length - 1 && (
                <div
                  key={idx}
                  className="dropdown-divider font-weight-normal"
                ></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Financing = ({ className }) => (
    <Dropdown
      className={className}
      title="Financing"
      onClick={closeAll(setFinOpen)}
      open={finOpen}
    >
      <NavLink
        className="dropdown-item hover-primary"
        href={links.client.FFUNCarsFinancing}
      >
        FFUN Financing
      </NavLink>
      <NavLink
        className="dropdown-item hover-primary"
        href={links.client.preQual}
      >
        Get Approved
      </NavLink>
      {/* <NavLink
        className="dropdown-item hover-primary"
        href={links.client.financeWithFfunCars}
      >
        Why Finance With FFUN
      </NavLink> */}
      <NavLink
        className="dropdown-item hover-primary"
        href={links.client.loanCalculator}
      >
        Loan Calculator
      </NavLink>
    </Dropdown>
  );

  const WhyFfunCars = ({ className }) => (
    // <Dropdown
    //   className={className}
    //   title="Why FFUN"
    //   onClick={closeAll(setWhyFfunCarsOpen)}
    //   open={whyFfunCarsOpen}
    // >
    //   <NavLink
    //     className="dropdown-item hover-primary"
    //     href={links.client.referral}
    //   >
    //     Refer A Friend
    //   </NavLink>
    //   <NavLink
    //     className="dropdown-item hover-primary"
    //     href={links.client.allBenefits}
    //   >
    //     All The Benefits
    //   </NavLink>
    //   <NavLink
    //     className="dropdown-item hover-primary"
    //     href={links.client.vechicleInspection}
    //   >
    //     Inspection Details
    //   </NavLink>
    //   <NavLink
    //     className="dropdown-item hover-primary"
    //     href={links.client.newToCanadaCarBuyingGuide}
    //   >
    //     New To Canada Car Buying Guide
    //   </NavLink>
    // </Dropdown>
    <Dropdown
      className={className}
      title="Why FFUN"
      onClick={closeAll(setWhyFfunCarsOpen)}
      open={whyFfunCarsOpen}
    >
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.ffunSpirit}
      >
        FFUN Spirit
      </NavLink>
      {/* <NavLink
      className="dropdown-item primary-hover mr-auto"
    href={links.client.referral}
    >
      Refer A Friend
    </NavLink> */}
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.allBenefits}
      >
        All The Benefits
      </NavLink>
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.vechicleInspection}
      >
        Auto Inspection Details
      </NavLink>
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.recInspection}
      >
        Rec Inspection Details
      </NavLink>
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.newToCanadaCarBuyingGuide}
      >
        New To Canada Car Buying Guide
      </NavLink>
    </Dropdown>
  );

  const SupportAndContact = ({ className }) => (
    <Dropdown
      className={className}
      title="Support & Contact"
      onClick={closeAll(setSupportAndContactOpen)}
      open={supportAndContactOpen}
    >
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.faq}
      >
        FAQ
      </NavLink>
      <a
        className="dropdown-item primary-hover"
        href={links.client.blog}
        target="_blank"
      >
        FFUN News & Blog
      </a>
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.about}
      >
        About Us
      </NavLink>
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.careers}
      >
        Careers
      </NavLink>
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.contactUs}
      >
        Contact
      </NavLink>
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.divisions}
      >
        Divisions
      </NavLink>
      <NavLink
        className="dropdown-item primary-hover mr-auto"
        href={links.client.locations}
      >
        Locations
      </NavLink>
    </Dropdown>
  );

  const AllNavLinks = () => (
    <div className="navbar-nav ml-auto align-items-lg-center align-items-start w-100 w-lg-unset only-burger-menu">
      <BLink
        href={links.client.searchCars}
        ariaLabel="Search available vehicles"
        className="pt-5 mb-2 px-4"
      >
        Shop
      </BLink>
      <Financing className="text-dark navbar-double-drop text-nowrap w-lg-unset px-4 hover-primary" />
      <BLink href={links.client.tradeIn}>Sell/Trade-in</BLink>
      <WhyFfunCars className="d-lg-none navbar-double-drop px-4 text-dark text-nowrap w-lg-unset hover-white" />
      <SupportAndContact className="d-lg-none navbar-double-drop px-4 text-dark text-nowrap w-lg-unset hover-white" />
    </div>
  );

  return (
    <div ref={navRef} className="font-weight-bold position-relative">
      <BurgerMenu
        setOpen={setIsNavVisible}
        className="z-index-5 d-lg-none position-absolute bg-white"
        open={isNavVisible}
        axis="y"
        navHeight={styles.navHeight.height}
      >
        <AllNavLinks />
      </BurgerMenu>
      <div
        style={styles.navHeight}
        className="position-absolute z-index-5 w-100"
      >
        {/* how ffun works, about us, phone  */}
        <div
          className="pr-4 shadow text-right font-weight-normal bg-secondary"
          style={styles.topNav}
        >
          <div className="d-flex justify-content-end">
            <WhyFfunCars className="d-none d-lg-inline-block px-4" />
            <SupportAndContact className="d-none d-lg-inline-block px-4" />
            <a
              className="d-none d-lg-inline-block px-4 text-decoration-none text-white hover-white"
              href={"tel:3067003519"}
            >
              <PhoneChat
                style={{ height: 25 }}
                className="mb-1 mr-1"
                title="Telephone support"
                desc="A telephone icon"
              ></PhoneChat>
              (306) 700-3519
            </a>
          </div>
        </div>

        {/* logo, search vehicles, financing, sell/trade-in  */}
        <nav
          className="z-index-2 navbar w-100 pr-4 shadow-2 bg-white navbar-expand-lg navbar-light bg-light font-h5m font-weight-normal"
          style={{ height: 78 }}
        >
          <NavLink
            href={links.client.home}
            aria-label="FFUN home page"
            className="mr-auto mr-md-5"
            tabIndex={0}
            onClick={closeAll()}
          >
            {/* <img
              src={FfUNLogo}
              style={{ maxWidth: 260 }}
              alt="ffun logo horizontal"
              className="px-xl-4 px-md-3 mr-4"
            /> */}
            <FFUNLogo
              style={{ height: 25 }}
              className="px-xl-4 px-md-3 mr-4"
              title="Telephone support"
              desc="A telephone icon"
            ></FFUNLogo>
          </NavLink>
          <div className="ml-auto d-none d-lg-inline-block">
            <AllNavLinks />
          </div>
          <Burger
            className="d-lg-none mr-3 my-auto"
            open={isNavVisible}
            setOpen={setIsNavVisible}
            type="button"
          />
        </nav>
      </div>
      <button
        style={styles.navHeight}
        onClick={() => setIsNavVisible(false)}
        aria-label="Close navbar"
        tabIndex={0}
        className="bg-transparent"
      ></button>
    </div>
  );
};

export default Navbar;
