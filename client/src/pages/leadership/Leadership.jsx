import { React } from "react";
import { Link } from "react-router-dom";
import "./Leadership.css";
// Images
import l1 from "../../assets/images/pastor-alex.jpg";
import l22 from "../../assets/images/pswomen.jpeg";
import l33 from "../../assets/images/psroll.jpeg";
import naruto from "../../assets/images/leaders-hoh.jpg";
import { MdMailOutline } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";

const Leadership = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 500,
        once: false,
        mirror: true,
      },
      []
    );
  });

  return (
    <div id="super" className="leadership-page">
      <div className="leadership-wrapper">
        {/* shwowcse */}
        <div className="leadership-showcase">
          <div className="leadership-show">
            <div className="leadership-text">
              <h1 className="focus-in-contract-bck">LEADERSHIP</h1>
            </div>
          </div>
        </div>
        {/* shwowcse end */}

        {/* leaders */}

        <div className="leaders-wrapper">
          <div className="leaders-main">
            <div className="leaders-case">
              <div className="lead-case-1">
                {/* lead show-1  */}

                <div className="leaders-show">
                  <div className="leader-1 one-1">
                    <sdiv className="lead-pic">
                      <img src={l1} alt="" />
                    </sdiv>

                    <div className="lead-name">Pastor Alex Gyesi</div>

                    <div className="lead-title">
                      <span className="past">Head Pastor</span>

                      <Link to="/Messages" className="hover_overlay">
                        <MdMailOutline />
                      </Link>
                    </div>
                  </div>

                  <div className="leader-1 one-1">
                    <div className="lead-pic">
                      <img src={l22} alt="" />
                    </div>

                    <div className="lead-name">Pastor Dorcas Gyesi</div>

                    <div className="lead-title">
                      <span className="past">Head Pastor</span>

                      <Link to="/Messages" className="hover_overlay">
                        <MdMailOutline />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* lead show end-1 */}

                {/* lead show-2  */}

                <div className="leaders-show">
                  <div className="leader-1">
                    <div className="lead-pic">
                      <img src={l1} alt="" />
                    </div>

                    <div className="lead-name">Pastor Men Fellowship</div>

                    <div className="lead-title">
                      <span className="past">Leader For Men Fellowship</span>

                      <Link to="/Messages" className="hover_overlay">
                        <MdMailOutline />
                      </Link>
                    </div>
                  </div>

                  <div className="leader-1">
                    <div className="lead-pic">
                      <img src={l1} alt="" />
                    </div>

                    <div className="lead-name">Pastor Women Fellowship</div>

                    <div className="lead-title">
                      <span className="past">Leader For Women Fellowship</span>

                      <Link to="/Messages" className="hover_overlay">
                        <MdMailOutline />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* lead show end-2 */}
              </div>

              <div className="lead-case-2">
                {/* lead show-2  */}

                <div className="leaders-show-2">
                  <div className="leader-1 one-1 one-2">
                    <div className="lead-pic">
                      <img src={l33} alt="" />
                    </div>

                    <div className="lead-name">Rev Rolland Owusu Mensah</div>

                    <div className="lead-title">
                      <span className="past">Pastor Rolland</span>

                      <Link to="/Messages" className="hover_overlay">
                        <MdMailOutline />
                      </Link>
                    </div>
                  </div>

                  <div className="leader-1">
                    <div className="lead-pic">
                      <img src={l1} alt="" />
                    </div>

                    <div className="lead-name">Pastor Youth Group</div>

                    <div className="lead-title">
                      <span className="past">Leader For Youth Group</span>

                      <Link to="/Messages" className="hover_overlay">
                        <MdMailOutline />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* lead show end-2 */}
              </div>
            </div>
          </div>
        </div>

        {/* leaders end */}

        {/* our leaders */}

        <div className="values-wrapper">
          <div className="values">
            <div className="values-showcase">
              <div className="values-text-case    container">
                <div className="values-tt1 focus-in-contract-bck">
                  OUR ELDERS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our leaders end */}

        {/* ALONE */}

        <div className="alone-wrapper">
          <div className="alone">
            <div className="alone-1" data-aos="fade-right">
              <div className="lone-1">
                WE DON'T DO THIS ALONE
              </div>
              <div className="lone-2">

                leadership typically refers to the group of individuals who oversee the affairs and operations of an organization.The exact structure of church leadership can vary depending on the denomination and the size of the congregation, but there are some common roles and responsibilities that many church leaders share.

              </div>

              <div className="lone-3">
                Effective church leadership requires a combination of spiritual maturity, organizational skills, and interpersonal abilities. Strong communication skills, the ability to collaborate with others, and a deep commitment to the church 's mission and values.
              </div>
              
              {/* <div className="lone-3">Contact our elders at</div> */}

              {/* <div className="lone-4">
                <Link to="/" className="hover_overlay">
                  elders@highwayofholinesschurch.com
                </Link>
              </div> */}

            </div>

            <div className="alone-2">
              <div className="pic" data-aos="fade-left">
                <img src={naruto} alt="" />
              </div>

              <div
                className="shape-2"
                data-aos="fade-left"
                data-aos-delay="400"
              ></div>
            </div>
          </div>
        </div>

        {/* ALONE END */}
      </div>
    </div>
  );
};

export default Leadership;
