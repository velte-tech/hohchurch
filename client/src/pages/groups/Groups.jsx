import React from "react";
import "./Groups.css";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import { ImSearch } from 'react-icons/im';
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

const Groups = () => {
  // const [selects, setSelects] = useState();

  // const [isActive, setIsActive] = useState(false)

  // const [selected, setSelected] = useState('');

  return (
    
    <div id="super">

      <div className="group-page">
      <div className="gropup-wrapper">
        <div className="group-showcase">
          <div className="group-case">
            {/* showcase text */}
            <div className="group-text">
                <h1 className="focus-in-contract-bck">
                  FELLOWSHIP GROUPS
                </h1>

              {/* <h2 className="focus-in-contract-bck">
                TIMES ARE IN MOUNTAIN TIMEZONE
              </h2> */}
            </div>
            {/* showcase text */}
          </div>
        </div>

        {/* shape and map */}

        <div className="map-shape-wrapper">
          <div className="map-shape">
            <div className="mp-sp">
              <div
                className="mp slide-in-right"
                // data-aos="fade-left"
                // data-aos-delay="400"
              >
                <GoogleMap />
              </div>

              <div className="sp">
                <div
                  className="map-shape silde-in-right"
                  // data-aos="fade-left"
                  // data-aos-delay="500"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* shape and map end */}

        {/* search bar */}

        {/* <div className='sh-wrapper'>
        <div className='sh-case'>

          <div className='sh'>
            <div className='sh-1'>
              <input type='text' className='sh-tt' placeholder='SEARCH'></input>
            </div>

            <div className='sh-2'>
              <Link><ImSearch /></Link>
            </div>
          </div>
          
        </div>
      </div> */}

        {/* search bar end */}

        {/* individual church groups */}

        <div className="church-group-wrapper">
          <div className="church-group-case">
            
            
            {/* group flex */}
            <div className="church-group">
              <div className="ch-gr">
                <div className="ch-gr-1">PEACE GROUP</div>
                <div className="ch-gr-1">LEADER - HANNAH</div>
                <div className="ch-gr-2">
                  {/* <br></br> */}
                  Wednesday: 7.30 pm - 8.30 pm
                  <br></br>
                  {/* BIBLE STUDIES
                <br></br> */}
                  {/* Friday: 7.30 - 9 pm */}
                  {/* <br></br> */}
                  WORSHIP SERVICE
                  {/* <br></br> */}
                  {/* Sunday */}
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>

              <div className="ch-gr">
                <div className="ch-gr-1">POWER GROUP</div>
                <div className="ch-gr-1">LEADER - DORCAS</div>
                <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>

              <div className="ch-gr">
                <div className="ch-gr-1">JOY GROUP</div>
                <div className="ch-gr-1">LEADER - JODIE</div>
                <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>
            </div>
            {/* group flex end */}

            {/* group flex */}
            <div className="church-group">
              <div className="ch-gr">
                <div className="ch-gr-1">FAITH GROUP</div>
                <div className="ch-gr-1">LEADER - JOLIE</div>
                <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>

              <div className="ch-gr">
                <div className="ch-gr-1">HOPE GROUP</div>
                <div className="ch-gr-1">MARCIA</div>
                <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>

              <div className="ch-gr">
                <div className="ch-gr-1">LOVE GROUP</div>
                <div className="ch-gr-1">LEADER MABEL</div>
                <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>
            </div>
            {/* group flex end */}
            
            
            {/* group flex */}
            <div className="church-group">
              <div className="ch-gr">
                <div className="ch-gr-1">MEN'S GROUP</div>
                <div className="ch-gr-1">LEADER - JOLIE</div>
                <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>

              <div className="ch-gr">
                <div className="ch-gr-1">WOMEN'S GROUP</div>
                <div className="ch-gr-1">MARCIA</div>
                <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>

              <div className="ch-gr">
                <div className="ch-gr-1">WEEKLY PROGRAMMES</div>
                <div className="ch-gr-1">LEADER MABEL</div>
                <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div>
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>
            </div>
            {/* group flex end */}
            
            
          </div>
        </div>

        {/* individual church groups end */}
      </div>
      <ScrollToTop />
    </div>

    </div>

  );
};

export default Groups;
