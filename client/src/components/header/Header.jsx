
import React from "react";
import { useState } from "react";
import "./Header.css";
import logo from "../../assets/brand/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { CgClose } from "react-icons/cg";


function Header() {
  const navigate = useNavigate();

  const toggle = (screen) => {
    if (screen === "l&t") {
      navigate("/location");
    } else {
      navigate("/");
    }
    setState(screen);
  };

  const [navOpen, setNavOpen] = useState(false);

  const [locOpen, setLocOpen] = useState(false);

  const [state, setState] = useState("home");

  // const toggle = () => {
  //   setState(!state);
  // }

  return (
    <div className="header-navbar">
      <div className="header-wrapper">
        <div className="header">
          <div className="header-1">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>

          {/* location and times */}

          <div className="header-2">
            <div className="location-wrapper">
              <button
                onClick={() => {
                  toggle("home");
                }}
                style={{ display: state === "l&t" ? "block" : "none" }}
              >
                <span className="btn-name">
                  <CgClose className="iconn" />
                  CLOSE
                </span>
              </button>

              <button
                onClick={() => {
                  toggle("l&t");
                }}
                style={{ display: state === "home" ? "block" : "none" }}
              >
                <span className="btn-name">
                  <ImLocation className="iconn" />
                  LOCATION & TIMES
                </span>
              </button>
            </div>

            {/* location and times end */}

            {/* menu 1 */}
            <div className="menu-icon" onClick={() => setNavOpen(!navOpen)}>
              <Link>
                <div className={navOpen ? "hambox hamBoxOpen" : "hamBox"}>
                  <div className={navOpen ? "menu-1 spin" : "menu-1"}></div>

                  <div className={navOpen ? "menu-2 spin" : "menu-2"}></div>

                  <div className={navOpen ? "menu-3 spin" : "menu-3"}></div>
                </div>
              </Link>
            </div>

            {/* menu 1 end */}
          </div>
        </div>

        {/* menu overlay */}
        <div
          className="menu-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          {/* overlay menu */}

          <ul className="nav-links">
            <li className="nav-item neww">
              <NavLink to="/Im_new" onClick={() => setNavOpen(!navOpen)}>
                I'M NEW
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item">
              {/* <NavLink to='/'> */}
              <div className="hel">
                <div className="shape"></div>
                <span className="men">EVENTS & TIMES</span>
              </div>
              {/* </NavLink> */}
              <div className="nav-item-wrapper"></div>

              {/* drop-dowm */}

              <div className="dropdown-menu">
                <Link to="/Aurora" onClick={() => setNavOpen(!navOpen)}>
                  AURORA
                </Link>
                <Link to="/Denver" onClick={() => setNavOpen(!navOpen)}>
                  DENVER
                </Link>
                <Link to="/Lafayette" onClick={() => setNavOpen(!navOpen)}>
                  LAFAYETTE
                </Link>
                <Link to="/Longmont" onClick={() => setNavOpen(!navOpen)}>
                  LONGMONT
                </Link>
                <Link to="/West" onClick={() => setNavOpen(!navOpen)}>
                  WEST
                </Link>
              </div>

              {/* drop-dowm end */}
            </li>

            <li className="nav-item zenn">
              <NavLink to="/About" onClick={() => setNavOpen(!navOpen)}>
                <div className="shape"></div>
                <span className="men">ABOUT</span>
              </NavLink>
              <div className="nav-item-wrapper"></div>

              {/* drop-dowm */}

              <div className="dropdown-menu">
                <Link to="/About_HOH" onClick={() => setNavOpen(!navOpen)}>
                  ABOUT HOH
                </Link>
                <Link to="/Leadership" onClick={() => setNavOpen(!navOpen)}>
                  LEADERSHIP
                </Link>
              </div>

              {/* drop-dowm end */}
            </li>

            <li className="nav-item">
              {/* <NavLink to='/'> */}
              <div className="hel">
                <div className="shape"></div>
                <span className="men">GET INVOLVED</span>
              </div>
              {/* </NavLink> */}
              <div className="nav-item-wrapper"></div>

              {/* drop-dowm */}

              <div className="dropdown-menu">
                <Link to="/Groups" onClick={() => setNavOpen(!navOpen)}>
                  GROUPS
                </Link>
                <Link to="/Ministries" onClick={() => setNavOpen(!navOpen)}>
                  MINISTRIES
                </Link>
                <Link to="/Outreach" onClick={() => setNavOpen(!navOpen)}>
                  OUTREACH
                </Link>
              </div>

              {/* drop-dowm end */}
            </li>

            <li className="nav-item">
              <NavLink to="/Ministries">
                <div className="shape"></div>
                <span className="men">MINISTRIES</span>
              </NavLink>
              <div className="nav-item-wrapper"></div>

              {/* drop-dowm */}

              <div className="dropdown-menu">
                <Link to="/Kids" onClick={() => setNavOpen(!navOpen)}>
                  KIDS
                </Link>
                <Link to="/Students" onClick={() => setNavOpen(!navOpen)}>
                  STUDENTS
                </Link>
                <Link to="/Prayer" onClick={() => setNavOpen(!navOpen)}>
                  PRAYER
                </Link>
                <Link to="/Young_adults" onClick={() => setNavOpen(!navOpen)}>
                  YOUNG ADULTS
                </Link>
                <Link to="/Parents" onClick={() => setNavOpen(!navOpen)}>
                  PARENTS
                </Link>
                <Link to="/Care" onClick={() => setNavOpen(!navOpen)}>
                  CARE
                </Link>
              </div>

              {/* drop-dowm end */}
            </li>

            <li className="nav-item neww">
              <NavLink to="/Messages" onClick={() => setNavOpen(!navOpen)}>
                MESSAGES
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item neww">
              <NavLink to="/Contact" onClick={() => setNavOpen(!navOpen)}>
                CONTACT
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
