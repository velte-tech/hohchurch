import React from "react";
import { useState } from "react";
import "./Header.css";
import logo from "../../assets/brand/hohlogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { CgClose } from "react-icons/cg";

function Header() {
  // change bg
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  // change bg end

  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);

  const [state, setState] = useState("home");

  const toggle = (screen) => {
    if (screen === "l&t") {
      navigate("/location");
    } else {
      navigate(-1);
    }
    setState(screen);
  };

  return (
    
    <div id="super">

      <div className={color ? "header-navbar header-bg" : "header-navbar"}>
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
                  <span className="loc-n1">CLOSE</span>
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
                  <span className="loc-n1"> EVENTS & TIME </span>
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
            // top: navOpen ? "0" : "-100%",
            right: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          {/* overlay menu */}

          <ul className="nav-links">
            <li className="nav-item neww hover_overlay">
              <NavLink to="/Im_new" onClick={() => setNavOpen(!navOpen)}>
                I'M NEW
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item">
              {/* <NavLink to='/'> */}
              <div className="hel">
                <div className="shape"></div>
                <span className="men">EVENTS</span>
              </div>
              {/* </NavLink> */}
              <div className="nav-item-wrapper"></div>

              {/* drop-dowm */}

              <div className="dropdown-menu">
                <Link
                  to="/Easter_service"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  EASTER SERVICE
                </Link>
                <Link
                  to="/Youth_retreat"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  YOUTH RETREAT
                </Link>
                <Link
                  to="/Adult_retreat"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  ADULTS RETREAT
                </Link>
                <Link
                  to="/Weekly_programmes"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  WEEKLY PROGRAMMES
                </Link>
                {/* <Link to="/West" onClick={() => setNavOpen(!navOpen)} className='hover_overlay'>
                  HIGHWAY YOUTH CLUB
                </Link>
                <Link to="/West" onClick={() => setNavOpen(!navOpen)} className='hover_overlay'>
                  21ST CENTURY EDUCATION
                </Link> */}
              </div>

              {/* drop-dowm end */}
            </li>

            <li className="nav-item zenn">
              {/* <NavLink> */}
              <div className="hel">
                <div className="shape"></div>
                <span className="men">ABOUT</span>
              </div>
              {/* </NavLink> */}

              <div className="nav-item-wrapper"></div>

              {/* drop-dowm */}

              <div className="dropdown-menu">
                <Link
                  to="/About_HOH"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  ABOUT HOH
                </Link>
                <Link
                  to="/Leadership"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
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
                <Link
                  to="/Groups"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  GROUPS
                </Link>
                <Link
                  to="/Ministries"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  MINISTRIES
                </Link>
                <Link
                  to="/Outreach"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
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
                <Link
                  to="/Kids"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  KIDS
                </Link>
                {/* <Link
                  to="/Students"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  STUDENTS
                </Link> */}
                <Link
                  to="/Prayer"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  PRAYER
                </Link>
                <Link
                  to="/Young_adults"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  YOUNG ADULTS
                </Link>
                {/* <Link
                  to="/Parents"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  PARENTS
                </Link> */}
                {/* <Link
                  to="/Care"
                  onClick={() => setNavOpen(!navOpen)}
                  className="hover_overlay"
                >
                  CARE
                </Link> */}
              </div>

              {/* drop-dowm end */}
            </li>

            <li className="nav-item neww hover_overlay">
              <NavLink to="/Messages" onClick={() => setNavOpen(!navOpen)}>
                MESSAGES
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item neww hover_overlay">
              <NavLink to="/Contact" onClick={() => setNavOpen(!navOpen)}>
                CONTACT
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    </div>

  );
}

export default Header;
