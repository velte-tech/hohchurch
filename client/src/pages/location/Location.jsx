import React from "react";
import "./Location.css";
// import logo from '../../Assets/images/logo.png';
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="location-page">
      <div className="loc-wrapper">
        <div className="loc">
          <div className="loc-1">LOCATIONS & TIMES</div>

          <div className="loc-2">
            <Link to="/contact" className="links linkAnima">
              About Us <span className="arrow"></span>
            </Link>
          </div>
        </div>

        {/* campuses */}

        <div className="campus-wrapper">
          <div className="campus-1">
            {/* campus flex */}
            <div className="campus">
              <div className="city"> AURORA</div>

              <div className="broad"></div>

              <div className="add hover_overlay_2">
                1730 S Buckley <br></br> RdAurora, CO 80017
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9 & 11 AM</div>

              <div className="info">
                <Link to="/" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}

            {/* campus flex */}
            <div className="campus">
              <div className="city"> DENVER </div>

              <div className="broad"></div>

              <div className="add hover_overlay_2">
                2700 S.Downing <br></br> St.Denver, CO 80210
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9, 11 AM, & 6: 30 PM</div>

              <div className="info">
                <Link to="/" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}

            {/* campus flex */}
            <div className="campus">
              <div className="city"> LAFAYETTE </div>

              <div className="broad-1">Broadcast Location</div>

              <div className="add hover_overlay_2">
                1730 S Buckley <br></br> RdAurora, CO 80017
              </div>

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

          <div className="campus-1">
            {/* campus flex */}
            <div className="campus">
              <div className="city"> LONGMONT </div>

              <div className="broad"></div>

              <div className="add hover_overlay_2">
                1850 Industrial <br></br> Cr.Longmont, CO 80501
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9 & 11 AM</div>

              <div className="info">
                <Link to="/" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}

            {/* campus flex */}
            <div className="campus">
              <div className="city"> WEST </div>

              <div className="broad"></div>

              <div className="add hover_overlay_2">
                24887 Genesee Trail <br></br> Rd.Golden, CO 80401
              </div>

              <div className="ser">SERVICES</div>

              <div className="day">Sunday: 9, 11 AM, & 6: 30 PM</div>

              <div className="day-1">* ASL Interpreted Service</div>

              <div className="info">
                <Link to="/" className="links linkAnima">
                  MORE INFO <span className="arrow"></span>
                </Link>
              </div>
            </div>
            {/* campus flex end */}

            {/* campus flex */}
            <div className="campus">
              <div className="city-1"> ONLINE </div>

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
    </div>
  );
};

export default Location;
