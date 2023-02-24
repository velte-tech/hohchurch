import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";


const Location = () => {
  return (
    <div className="location-page">
      <div className="loc-wrapper">
        <div className="loc">
          <div className="loc-1">LOCATIONS & TIMES</div>

          <div className="loc-2">
            <Link to="/contact" className="links linkAnima">
              Contact Us <span className="arrow"></span>
            </Link>
          </div>
        </div>

        {/* campuses */}

        <div className="campus-wrapper">
          <div className="campus-1">
            {/* campus flex */}
            <div className="campus">
              <div className="city">EASTER SERVICE</div>

              <div className="broad"></div>

              <div className="add hover_overlay_2">
                1730 S Buckley <br></br> RdAurora, CO 80017
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9 & 11 AM</div>

              <div className="info">
                <Link to="/Aurora" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}

            {/* campus flex */}
            <div className="campus">
              <div className="city">
                YOUTH & YOUNG <br></br> ADULTS RETREAT
              </div>

              <div className="broad"></div>

              <div className="add hover_overlay_2">
                2700 S.Downing <br></br> St.Denver, CO 80210
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9, 11 AM, & 6: 30 PM</div>

              <div className="info">
                <Link to="/Denver" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}

            {/* campus flex */}
            <div className="campus">
              <div className="city">ADULTS RETREAT</div>

              <div className="broad-1">Broadcast Location</div>

              <div className="add hover_overlay_2">
                1730 S Buckley <br></br> RdAurora, CO 80017
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9 & 11 AM</div>

              <div className="info">
                <Link to="/Lafayette" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}
          </div>

          <div className="campus-1">
            {/* campus flex */}
            <div className="campus">
              <div className="city">HIGHWAY YOUTH <br></br> CLUB</div>

              <div className="broad"></div>

              <div className="add hover_overlay_2">
                1850 Industrial <br></br> Cr.Longmont, CO 80501
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9 & 11 AM</div>

              <div className="info">
                <Link to="/Longmont" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}

            {/* campus flex */}
            <div className="campus">
              <div className="city">21ST CENTURY <br></br> EDUCATION</div>

              <div className="broad"></div>

              <div className="add hover_overlay_2">
                24887 Genesee Trail <br></br> Rd.Golden, CO 80401
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9, 11 AM, & 6: 30 PM</div>

              <div className="day-1">* ASL Interpreted Service</div>

              <div className="info">
                <Link to="/West" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}

            {/* campus flex */}
            <div className="campus">
              <div className="city-1">SHIFT</div>

              {/* <div className='broad'>
              Broadcast Location
            </div> */}

              {/* <div className='add'>
              1730 S Buckley <br></br> RdAurora, CO 80017
            </div> */}

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9 & 11 AM</div>

              <div className="info">
                <Link to="/" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}
          </div>
        </div>

        {/* campuses */}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Location;
