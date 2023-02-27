import React from "react";
import "./Care.css";
import AOS from "aos";
import { useEffect } from "react";
// import Care_group from "../../components/care_group/Care_group";
import Faq_care from "../../components/faq_care/Faq_care";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
// import CareSlide from '../../components/careSlide/CareSlide';

const Care = () => {
  // animation
  useEffect(() => {
    AOS.init(
      {
        duration: 500,
        // offet: 1000,
      },
      []
    );
  });

  return (
    
    <div id="super">

      <div className="care-wrapper">
      <div className="care-case">
        <div className="care-show">
          {/* showcase */}
          <div className="min-group-showcase-yac">
            <div className="min-group-case-ya">
              <div className="min-group-txt">
                <h1 className="focus-in-contract-bck">CARE</h1>
              </div>
            </div>
          </div>
          {/* showcase end */}

          {/* hurting  */}

          <div className="hurt-wrapper">
            <div className="hurt-show">
              <div className="hurt">
                <div
                  className="hurt-left"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className="hl-tt1">HELP FOR HURTING PEOPLE</div>

                  <div className="hl-tt2">
                    We understand that life gets hard and sometimes you need an
                    intentional strategy for change to work through your
                    struggles.We provide several options to help meet your
                    needs.Select one below for more information.
                  </div>
                </div>

                <div
                  className="hurt-right"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className="hr-top">
                    <div className="hrt1">CONTACT US</div>
                    <div className="hrt2">
                      For all Care Ministry Needs, please speak with your Campus
                      Pastor or contact us directly at:
                    </div>

                    <div className="hrt3">
                      <div className="hr-ff">
                        <div className="hh-1">Office Hours |</div>
                        <div className="hh-2">M-F, 9:00 AM – 5:00 PM</div>
                      </div>
                      <div className="hr-ff">
                        <div className="hh-1">Phone |</div>
                        <div className="hh-2">303-664-5524 ext. 232</div>
                      </div>
                      <div className="hr-ff">
                        <div className="hh-1">Email |</div>
                        <div className="hh-2 hh-xx hover_overlay">
                          care@hoh.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hr-butt"></div>
                </div>
              </div>
            </div>
          </div>

          {/* hurting end */}

          {/* care group  */}

          {/* <Care_group /> */}

          {/* care group end */}

          {/* SHIFT  */}

          <div className="shift-wrapper">
            <div className="shift-case">
              <div className="shift-show">
                <div className="shift-line"></div>
                <div className="shift-txt">Shift Overview</div>
                <div className="shift-line"></div>
              </div>
            </div>
          </div>

          {/* SHIFT END */}

          {/* DETAILS  */}

          <div className="detail-wrapper">
            <div className="detail-show">
              <div className="detail-case">
                <div className="d-txt1">DETAILS</div>
                <div className="d-txt2">
                  Shift is designed for adults 18 years and older.
                </div>

                <div className="d-txt3">
                  <span className="ddt1">When:</span>
                  <span className="ddt2">Friday Nights</span>
                </div>
                <div className="d-txt3">
                  <span className="ddt1">Location:</span>
                  <span className="ddt2">
                    HIGHWAY OF HOLINESS
                  </span>
                </div>
                <div className="d-txt3">
                  <span className="ddt1">BBQ:</span>
                  <span className="ddt2">6:00-6:45 PM</span>
                </div>
                <div className="d-txt3">
                  <span className="ddt1">Program:</span>
                  <span className="ddt2">7:00 PM</span>
                </div>
                <div className="d-txt3">
                  <span className="ddt1">
                    Issue-Specific/Gender-Specific Small Groups:
                  </span>
                  <span className="ddt2">8:00 PM</span>
                </div>
                <div className="d-txt3">
                  <span className="ddt1">Community Time:</span>
                  <span className="ddt2">9:00-9:30 PM </span>
                </div>
              </div>

              {/* careFaq plug  */}

              <Faq_care />

              {/* careFaq plug end */}
            </div>
          </div>

          {/* DETAILS END */}

          {/* care slide  */}

          {/* <div className='care-slide-wrapper'>
            <div className='care-slide-case'>
              <div className='care-slide-show'>
                <div className='care-slide-txt focus-in-contract-bck'>
                  12 STEP SHIFT SERIES
                </div>

                

                <CareSlide />

               
              </div> 
            </div>
          </div> */}

          {/* care slide end */}
        </div>
      </div>
      <ScrollToTop />
    </div>

    </div>

  );
};

export default Care;
