import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import links from "data/links";

const socialMedia = links.external;
const client = links.client;
let today = new Date().getDay();

const operation_hours = [
  { id: 1, day: "Monday", hour: "9:00 AM - 6:00 PM" },
  { id: 2, day: "Tuesday", hour: "9:00 AM - 6:00 PM" },
  { id: 3, day: "Wednesday", hour: "9:00 AM - 6:00 PM" },
  { id: 4, day: "Thursday", hour: "9:00 AM - 6:00 PM" },
  { id: 5, day: "Friday", hour: "9:00 AM - 6:00 PM" },
  { id: 6, day: "Saturday", hour: "9:00 AM - 6:00 PM" },
  { id: 7, day: "Sunday", hour: "Closed" },
];
const styles = {
  footerInner: {
    maxWidth: 1300,
  },
  logo: {
    width: 200,
  },
};

//TODO: Make the year below dynamic
export default () => (
  <footer id="footer" className="text-white w-100 bg-secondary">
    <div style={styles.footerInner} className="mx-auto py-5">
      {/* menu list  */}
      <div className="row justify-content-center">
        {/* Discover  */}
        <div className="col col-10 col-md-3 px-auto">
          <div className="font-weight-bold font-h5m mb-3">DISCOVER</div>
          <ul className="list-unstyled">
            <li className="list-unstyled mx-0 pb-2">
              <Link className="footer-menu" to={client.searchCars}>
                Search vehicles
              </Link>
            </li>

            <li className="list-unstyled mx-0 pb-2">
              <Link className="footer-menu" to={client.preQual}>
                Financing
              </Link>
            </li>

            <li className="list-unstyled mx-0 pb-2">
              <Link className="footer-menu" to={client.tradeIn.index}>
                Sell/Trade-in
              </Link>
            </li>
            <li className="list-unstyled mx-0 pb-2">
              <Link className="footer-menu" to={client.howItWorks}>
                The FFUN way
              </Link>
            </li>
            <li className="list-unstyled mx-0 pb-2">
              <Link className="footer-menu" to={client.howToCarooga}>
                How to FFUN
              </Link>
            </li>

            <li className="list-unstyled mx-0 pb-2">
              <Link className="footer-menu" to={client.about}>
                About FFUN
              </Link>
            </li>
            <li className="list-unstyled mx-0 pb-2">
              <Link className="footer-menu" to={client.faq}>
                FAQ
              </Link>
            </li>
            <li className="list-unstyled mx-0 pb-2">
              <a className="footer-menu" target="_blank" href={client.blog}>
              News & Blog
              </a>
            </li>
          </ul>
        </div>
        {/* Hours of operation  */}
        <div className="col col-10 col-md-3 mr-xs-0 mr-md-4">
          <div className="font-weight-bold font-h5m  mb-3">
            HOURS OF OPERATION
          </div>
          <ul className="list-unstyled">
            {operation_hours.map((item) => (
              <li className="list-unstyled mx-0 pb-2">
                <div className="row">
                  <div
                    className={`col-4 ${
                      item.id === today ? "font-weight-bold" : ""
                    }`}
                  >
                    {item.day}
                  </div>
                  <div
                    className={`col-8 ${
                      item.id === today ? "font-weight-bold" : ""
                    }`}
                  >
                    {item.hour}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* contact  */}
        <div className="col col-10 col-md-3">
          <div className="font-weight-bold font-h5m  mb-3">CONTACT</div>
          <p className="font-weight-bold font-h6m">FFUN</p>
          <ul className="list-unstyled">
            <li className="list-unstyled mx-0 pb-2">
              <p className="text-white">
                2035 Idylwyld Drive North
                <br />
                Saskatoon, SK S7L 4R3
              </p>
            </li>
            <li className="list-unstyled mx-0 pb-2">
              <a href="tel:(306)700-3519" className="text-white">
                Sales: (306) 700-3519
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* social media  */}
      <div className="text-center py-2 font-h5m text-white ">
        <a
          href={socialMedia.facebook}
          aria-label="FFUN Facebook Page"
          className="text-white"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            size="2x"
            className="cursor-pointer ml-2 mr-2"
            icon={faFacebookSquare}
          />
        </a>
        <a
          href={socialMedia.instagram}
          aria-label="FFUN Instagram Page"
          className="text-white"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            size="2x"
            className="cursor-pointer ml-2 mr-2"
            icon={faInstagramSquare}
          />
        </a>
        <a
          href={socialMedia.twitter}
          aria-label="FFUN Twitter Page"
          className="text-white"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            size="2x"
            className="cursor-pointer ml-2 mr-2"
            icon={faTwitterSquare}
          />
        </a>
        <a
          href={socialMedia.youtube}
          aria-label="FFUN Youtube Page"
          className="text-white"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            size="2x"
            className="cursor-pointer ml-2 mr-2"
            icon={faYoutubeSquare}
          />
        </a>
        {/* <FontAwesomeIcon size="2x" className="cursor-pointer ml-2 mr-2" icon={faLinkedin} /> */}
      </div>
      {/* copy right */}
      <div className="text-center py-2 pt-5 font-h5m text-white">
        <p>© 2022 FFUN. All rights reserved</p>
        <p>
          <a
            className="footer-menu"
            target="_blank"
            rel="noreferrer"
            href={client.termsOfService}
          >
            Terms of Service
          </a>
          &nbsp;|&nbsp;
          <a
            className="footer-menu"
            target="_blank"
            rel="noreferrer"
            href={client.privacyPolicy}
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  </footer>
);
