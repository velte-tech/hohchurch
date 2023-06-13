import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "./Im_new.css";
import newAboutImage from "../../assets/images/new-about.jpg";
import singersImage from "../../assets/images/new-singers.jpg";
import Faq from "../../components/faq/Faq";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

// import mapImage from "../../assets/images/Figmap.png"

const Im_new = () => {
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
    <div id="super">
      <section id="new_showcase">
        <div className="showcase_wrapper">
          <h1>I'M NEW</h1>
        </div>
      </section>

      {/* ======= SECTION : EXPECT ======= */}
      <section id="new_expect">
        <div className="left">
          <img src={newAboutImage} alt="slideImage" data-aos="fade-right" />
          <div
            className="shape_2"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
          ></div>
        </div>
        <div className="right">
          <h2
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
          >
            About hoh-church
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
          >
            The Highway of Holiness Church (HOH) is an Evangelical, Charismatic
            Christian Church that centers on companionship, love, and care. We
            seek to exalt the Lord and build up His people via collective
            worship and teachings that emphasize the sufficiency of God and His
            Word.
          </p>
          <div
            className="new_expect_links"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
          >
            <Link to="/About_HOH" className="linkAnima">
              LEARN MORE <span className="arrow"></span>{" "}
            </Link>
            <Link to="/prayer" className="linkAnima">
              PRAYER REQUEST<span className="arrow"></span>{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* ======= SECTION : NEW_ABOUT =======
       */}
      <section id="new_about">
        <div className="new_about_wrapper">
          <div className="left">
            <div>
              <h2
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-anchor-placement="center-bottom"
              >
                What to expect
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-anchor-placement="center-bottom"
              >
                We are a church that meets every Sunday at 11:00 AM for
                celebration service in person and online via facebook live. We
                also meets every Wednesday at 7:00 PM in person and on facebook
                live. Our Friday Bible Academy meeting happens every Friday at
                7:30 PM on facebook live. Are you in need of prayers or do you
                know anyone that needs prayers? Fill the prayer request form and
                we will surely get back to you. We HOH leaders and members can
                not wait to hear from you.
              </p>
              <div
                className="new_expect_links"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-anchor-placement="center-bottom"
              >
                <Link to="/About_HOH" className="linkAnima">
                  OUR BELIEFS <span className="arrow"></span>{" "}
                </Link>
                <Link to="/prayer" className="linkAnima">
                  PRAYER REQUEST<span className="arrow"></span>{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="right">
            <img src={singersImage} alt="slideImage" data-aos="fade-left" />
            <div
              className="shape_2"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-anchor-placement="center-bottom"
            ></div>
          </div>
        </div>
      </section>
      <Faq />
      <section id="contact_form">
        <div className="form_wrapper container">
          <form
            action="https://88fcc1b06d43556476d88696654f2534"
            method="POST"
            autoComplete="off"
          >
            <ul>
              <li>
                <label for="first_name">
                  Name <span className="start_sign">*</span>
                </label>
                <div className="name_input">
                  <span>
                    <input
                      name="first_name"
                      id="first_name"
                      type="text"
                      required
                    />
                    <label for="first_name">First</label>
                  </span>
                  <span>
                    <input name="last_name" id="fiel_4" type="text" required />
                    <label for="last_name">Last</label>
                  </span>
                </div>
              </li>

              <li>
                <div className="email_input">
                  <span>
                    <label for="email">
                      Email <span className="start_sign">*</span>
                    </label>
                    <div>
                      <input name="email" id="email" type="email" required />
                    </div>
                  </span>
                  <span>
                    <label for="tel">Mobile number</label>
                    <div>
                      <input name="tel" id="tel" type="number" />
                    </div>
                  </span>
                </div>
              </li>
              <li>
                <label for="comments">Comments and Questions</label>
                <div>
                  <textarea
                    name="comments"
                    id="comments"
                    rows="10"
                    required
                    placeholder
                  ></textarea>
                </div>
              </li>
              <div className="am_new_btn">
                <li>
                  <input
                    className="btn new_submit"
                    type="submit"
                    value="Submit"
                  />
                </li>
              </div>
            </ul>
          </form>
        </div>
      </section>

      <section id="map">
        {/* <div className="ask text_center">
          <Link className="btn" to="/contact">
            DO YOU HAVE ANY
            <br /> QUESTIONS
          </Link>
        </div> */}
        {/* <div className="main_map">
          <img src={mapImage} alt="" />
        </div> */}
        <GoogleMap />
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Im_new;
