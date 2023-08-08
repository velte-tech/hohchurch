import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "./WeeklyRetreat.css";
import { Link } from "react-router-dom";
// import Search from "../../components/searchLocate/Search";
// import SingleCard from "../../components/aboutSlideIn/SingleCard";
// import { FaFacebook } from "react-icons/fa";
// import { AiFillYoutube } from "react-icons/ai";

import newsImage from "../../assets/images/gpo1.jpeg";
import voluImg from "../../assets/images/dancing.jpg";
import mediaImg from "../../assets/images/media.jpg";
import longPastorImg from "../../assets/images/pastorinagbaja.jpg";
import l1 from "../../assets/images/unnamed.png";
// import studentsImg from "../../assets/images/students.jpg";
// import connectImg from "../../assets/images/connect.jpg";
// import kidsImg from "../../assets/images/kids.jpg";
// import podcastImg from "../../assets/images/podcast.jpg";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import { urlFor } from "../../utils/urlFor";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";

const Longmont = () => {
  const [weeklyData, setWeeklyData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "weeklyProgrammes"]{..., headerImage->, pastorImage->, weeklyCards[] {..., image->}}`
      )
      .then((data) => {
        console.log("weekly: ", data[0]);
        setWeeklyData(data[0]);
      })
      .catch(console.error);
  }, []);

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
      <section
        id="weekly_programme_showcase"
        style={{
          backgroundImage: `url(${urlFor(weeklyData?.headerImage?.image)})`,
        }}
      >
        <div className="showcase_wrapper">
          <h1 className="focus-in-contract-bck">{weeklyData?.title}</h1>
          {/* <p className="date focus-in-contract-bck">SUNDAY: 9 & 11 AM</p> */}
          {/* <Search /> */}
        </div>
      </section>

      <section id="longmont_about">
        <div className="about_wrapper container">
          <h1 className="text_center">{weeklyData?.weeklyTitle}</h1>
          <div className="text_center">
            <BlockContent
              blocks={weeklyData?.weeklyText}
              className="text_center"
            />
            {/* (Prayer Line: 0330 9981 259). */}
          </div>
        </div>
      </section>

      <section id="longmont_reach">
        <div className="reach_wrapper">
          <div className="left">
            <img
              src={urlFor(weeklyData?.pastorImage?.image)}
              alt={weeklyData?.pastorImage?.alt}
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="600"
            />
          </div>
          <div
            className="right"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-anchor-placement="top center"
          >
            <h2>{weeklyData?.pastorName}</h2>
            <p>{weeklyData?.pastorBio}</p>
            <Link className="linkAnima" to="/contact">
              Contact <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="longmont_ministries">
        {/* <div className="about_welcome container">
          <h2>ministries</h2>
          <div className="right">
            <div className="card">
              <img src={studentsImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">STUDENT MININISTRY</p>
                <p>
                  At Highway of Holiness Church | we create an engaging
                  community for students...
                </p>
                <Link to="/Students" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={connectImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">CONNECT @ YOUTH RETREAT </p>
                <p>
                  Connect to the Community God made you for! Connect | Youth
                  Reatreat
                </p>
                <Link to="/Youth_retreat" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={kidsImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">KIDS MINISTRY @ HOH</p>
                <p>
                  Connect to the Community God made you for! Connect | Kids
                  Ministry
                </p>
                <Link to="/Kids" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* ======= SECTION : PADCAST ======= */}
      {/* <section id="longmont_podcast" style={{ marginTop: "150px" }}>
        <div className="left ">
          <img src={podcastImg} alt="slideImage" data-aos="fade-right" />
          <div
            className="shape_2"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          ></div>
        </div>

        <div
          className="right text_center"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <h1
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
          >
            HoH Social Media Engaements
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
          >
            Are you struggling on the road of Faith? Listen to the stories from
            fellow travelers: the lessons learned and the abundant life on the
            horizon.
          </p>

          <div className="social_icons">
            <a
              className="hover_overlay text_center"
              href="https://web.facebook.com/HighwayofHolinessUK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              className="hover_overlay text_center"
              href="https://www.youtube.com/@highwayofholinesschristian7997"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
          </div>

          <Link to="/About_HoH" className="linkAnima">
            OUR BELIEFS <span className="arrow"></span>{" "}
          </Link>
        </div>
      </section> */}

      <section>
        <div className="about_welcome">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <p>{weeklyData?.weeklyCaptionTitle}</p>
            <p>{weeklyData?.weeklyCaptionText}</p>
          </div>

          <div className="right">
            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={urlFor(weeklyData?.weeklyCards[0]?.image?.image)}
                alt={weeklyData?.weeklyCards[0]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {weeklyData?.weeklyCards[0]?.title}
                </p>
                <p>{weeklyData?.weeklyCards[0]?.description}</p>
                <Link
                  to={weeklyData?.weeklyCards[0]?.link}
                  className="linkAnima"
                >
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>

            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={urlFor(weeklyData?.weeklyCards[1]?.image?.image)}
                alt={weeklyData?.weeklyCards[1]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {weeklyData?.weeklyCards[1]?.title}
                </p>
                <p>{weeklyData?.weeklyCards[1]?.description}</p>
                <Link
                  to={weeklyData?.weeklyCards[1]?.link}
                  className="linkAnima"
                >
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>

            <div
              className="card"
              data-aos-delay="900"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={urlFor(weeklyData?.weeklyCards[2]?.image?.image)}
                alt={weeklyData?.weeklyCards[2]?.image?.image?.alt}
              />
              <div className="text">
                <p className="hover_overlay ">
                  {weeklyData?.weeklyCards[2]?.title}
                </p>
                <p>{weeklyData?.weeklyCards[2]?.description}</p>
                <Link
                  to={weeklyData?.weeklyCards[2]?.link}
                  className="linkAnima"
                >
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div
              className="shape"
              data-aos="slide-left"
              data-aos-anchor-placement="center-bottom"
            ></div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Longmont;
