import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "./Im_new.css";
import newAboutImage from "../../assets/images/new-about.jpg";
import singersImage from "../../assets/images/new-singers.jpg";
import Faq from "../../components/faq/Faq";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import sanityClient from "../../client.js";
import { urlFor } from "../../utils/urlFor";
// import mapImage from "../../assets/images/Figmap.png"
import showCaseBackground from "../../assets/images/new-showcase.jpg";
import { iamnewContent } from "../../schemas/defaultData";

const Im_new = () => {
  const [iamnewData, setIamnew] = useState();

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

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "iamnew"]{..., headerImage->, aboutImage->, whatToExpectImage->}`
      )
      .then((data) => {
        console.log("iamnew: ", data);
        setIamnew(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="super">
      <section
        id="new_showcase"
        style={{
          backgroundImage: `url(${urlFor(iamnewData?.headerImage?.image)})`,
        }}
      >
        <div className="showcase_wrapper">
          <h1>{iamnewData?.title}</h1>
        </div>
      </section>

      {/* ======= SECTION : EXPECT ======= */}
      <section id="new_expect">
        <div className="left">
          <img
            src={urlFor(iamnewData?.aboutImage?.image)}
            alt={iamnewData?.aboutImage?.image?.alt}
            data-aos="fade-right"
          />
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
            {iamnewData?.aboutTitle || iamnewContent.aboutTitle}
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
          >
            {iamnewData?.aboutDescription || iamnewContent.aboutDescription}
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
                {iamnewData?.whatToExpectTitle ||
                  iamnewContent.whatToExpectTitle}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-anchor-placement="center-bottom"
              >
                {iamnewData?.whatToExpectDescription ||
                  iamnewContent.whatToExpectDescription}
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
            <img
              src={urlFor(iamnewData?.whatToExpectImage?.image)}
              alt={iamnewData?.whatToExpectImage?.image?.alt}
              data-aos="fade-left"
            />
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
