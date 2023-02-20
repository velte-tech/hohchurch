import React from "react";
import "./Young_adults.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import yaa from "../../assets/images/yaa.jpg";
import Aboutya from "../../components/youngadults/Aboutya";
import { useState, useEffect } from "react";
import ya1 from "../../assets/images/ya1.jpg";
import ya2 from "../../assets/images/ya2.jpg";
import comingSoon from "../../assets/images/comingSoon.jpg";
import pdd from "../../assets/images/yyaa.png";
import { MdAllInbox } from "react-icons/md";
import Young_groups from "../../components/young_groups/Young_groups";
import ScrollToTop from "../../components/ScrollToTop/index";

const Young_adults = () => {
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
    <div className="youngadd-wrapper">
      <div className="youngadd-case">
        {/* showcase */}
        <div className="min-group-showcase-ya">
          <div className="min-group-case-ya">
            <div className="min-group-txt">
              <h1 className="focus-in-contract-bck">YOUNG ADULTS</h1>
              <h2 className="focus-in-contract-bck">
                POST - COLLEGE <br></br>
                AGE 22 - 30
              </h2>
            </div>
          </div>
        </div>
        {/* showcase end */}

        {/* about ya  */}

        <div className="abt-ya-wrapper">
          <div className="abt-ya-case">
            <div className="abt-ya">
              <div className="abtya-left">
                <div
                  className="yapic"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <img src={yaa} alt="" />
                </div>
              </div>

              <div
                className="abtya-right"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="600"
              >
                <div className="ya-tt1">ABOUT YA</div>
                <div className="ya-tt2">
                  We are a community of young adults created by you and for you.
                  Here, we hope you discover how to live your life with meaning,
                  in an authentic community, for the real Jesus.
                </div>
                <Aboutya />
              </div>
            </div>
          </div>
        </div>

        {/* about ya end */}

        {/* young adults events  */}

        <div className="ya-events-wrapper">
          <div className="ya-events-case">
            <div className="ya-events">
              <div className="ya-top focus-in-contract-bck">
                Young Adult Events
              </div>

              <div className="ya-bot">
                {/* card  */}

                <div className="card_wrapper">
                  <div className="card">
                    <img src={ya1} alt="" />
                    <div className="text">
                      <p>
                        YA SWING & LINE DANCING SOCIAL - JANUARY 2023 JANUARY
                        26, 2023
                      </p>
                      <p>
                        The people have spoken! Our top rated social from last
                        year is...
                      </p>
                      <Link className="linkAnima">
                        Learn More <span className="arrow"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="card">
                    <img src={comingSoon} alt="" />
                    <div className="text">
                      <p>YA FEBRUARY GATHERING FEBRUARY 9, 2023</p>
                      <p>
                        Join us on the evening of Thursday, February 9th
                        starting at 7pm in the...
                      </p>
                      <Link className="linkAnima">
                        Learn More <span className="arrow"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="card">
                    <img src={ya2} alt="" />
                    <div className="text">
                      <p>
                        BINGO AT BARQUENTINE!YA FEBRUARY SOCIAL FEBRUARY 23,
                        2023
                      </p>
                      <p>
                        Join us on the evening of Thursday, February 23rd at
                        Barquentine...
                      </p>
                      <Link className="linkAnima">
                        Learn More <span className="arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* card end */}
              </div>
            </div>
          </div>
        </div>

        {/* young adults events end */}

        {/* component plug  */}

        <Young_groups />

        {/* component plug end */}

        {/* podcast  */}

        <div className="pod-wrapper">
          <div className="pod-case">
            <div className="podd">
              <div className="pod-line"></div>
              <div className="podcas">
                <div className="pod-left">
                  <div
                    className="pod-pic hover_overlay_2"
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >
                    <img src={pdd} alt="" />
                  </div>
                </div>
                <div
                  className="pod-right"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className="pod-tt1">
                    CHECK OUT AND SUBSCRIBE TO <br></br>
                    OUR FYA PODCAST
                  </div>
                  <div className="pod-tt2 hover_overlay">
                    <Link className="linkAnima">
                      SPOTIFY <span className="arrow"></span>
                    </Link>
                  </div>
                  <div className="pod-tt2 hover_overlay">
                    <Link className="linkAnima">
                      APPLE <span className="arrow"></span>
                    </Link>
                  </div>
                  <div className="pod-tt2 hover_overlay">
                    <Link className="linkAnima">
                      YOUTUBE <span className="arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pod-line"></div>
            </div>
          </div>
        </div>

        {/* podcast end */}

        {/* contact us ya  */}

        <div className="ya-contact-wrapper">
          <div className="ya-contact-case">
            <div className="ya-contact">
              <div className="yacon-1 focus-in-contract-bck">CONTACT US</div>

              <div className="yacon-2">
                <form
                  className="yac"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className="nmes">
                    <div className="nl">
                      <div className="nl1">
                        <div className="ft-1">FIRST NAME</div>
                        <div className="ft-2"></div>
                      </div>
                      <div className="nl2">
                        <input></input>
                      </div>
                    </div>
                    <div className="nl">
                      <div className="nl1">
                        <div className="ft-1">LAST NAME</div>
                        <div className="ft-2"></div>
                      </div>
                      <div className="nl2">
                        <input></input>
                      </div>
                    </div>
                  </div>

                  {/* mail */}
                  <div className="nl">
                    <div className="nl1">
                      <div className="ft-1">EMAIL</div>
                      <div className="ft-2"></div>
                    </div>
                    <div className="nl2">
                      <div className="sinn">
                        <MdAllInbox />
                      </div>
                      <input className="zinn"></input>
                    </div>
                  </div>

                  {/* message */}
                  <div className="nl mess-ara">
                    <div className="nl1">
                      <div className="ft-1">MESSAGE</div>
                      <div className="ft-2"></div>
                    </div>
                    <div className="nl2">
                      <textarea></textarea>
                    </div>
                  </div>
                </form>

                <div
                  className="yac-btt"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <button className="btn">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact us ya end */}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Young_adults;
