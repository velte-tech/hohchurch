import React from "react";
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

const Longmont = () => {
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
      <section id="weekly_programme_showcase">
        <div className="showcase_wrapper">
          <h1 className="focus-in-contract-bck">WEEKLY PROGRAMME</h1>
          {/* <p className="date focus-in-contract-bck">SUNDAY: 9 & 11 AM</p> */}
          {/* <Search /> */}
        </div>
      </section>

      <section id="longmont_about">
        <div className="about_wrapper container">
          <h1 className="text_center">WEEKLY PROGRAMMES</h1>
          <p className="text_center">
            Our weekly Sunday celebration service takes place every Sunday on
            our church premises from 11:30 AM to 13:30 PM.
            <br /> <br />
            This is a time of joyous praise and worship, a word of teaching and
            encouragement is shared and we also dedicate time to prayer and
            communion. <br /> <br />
            We also meet every Monday, Tuesday and Thursday on our telephone
            prayer line from 7:00 PM to 8:00 PM. <br /> <br /> We meet on
            Wednesdays from 12:00 PM to 1:00 PM, 3:00 PM to 4:00 PM on our
            telephone prayer line and at 7:30 PM on our church premises. <br />{" "}
            <br /> We meet on facebook live every Friday at 7:30 PM for our
            Bible Academy.
            {/* (Prayer Line: 0330 9981 259). */}
          </p>
        </div>
      </section>

      <section id="longmont_reach">
        <div className="reach_wrapper">
          <div className="left">
            <img
              src={l1}
              alt=""
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
            <h2>Pastor Alex Gyasi MBE</h2>
            <p>
              My wife and I started our ministry 33 years ago when we said “
              YES!” to God’ s call. Since then have not looked back. We have
              embarked on many projects, ranging from providing supplementary
              education for children in deprived areas to running a homeless
              shelter since 2009 till present day and many more ministries that
              you will come across as you browse this site. We have witnessed
              first-hand, how living a life fully surrendered to Christ can
              positively impact you, your family, friends and society as a
              whole.
            </p>
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
            <p>SERVE WITH US</p>
            <p>
              Eye-opening and insightful weekly programmes at Highway of
              Holiness Church starts from 11:30 AM to 13:30 PM.
            </p>
          </div>

          <div className="right">
            {/* <SingleCard /> */}

            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={mediaImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">MEDIA</p>
                <p>
                  Be part of God's work by joining the media team @ Highway of
                  Holiness Church.
                </p>
                <Link to="/contact" className="linkAnima">
                  Serve with us <span className="arrow"></span>
                </Link>
              </div>
            </div>

            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={voluImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">WELFARE</p>
                <p>
                  Be part of God's work by joining the welfare team @ Highway of
                  Holiness Church.
                </p>
                <Link to="/contact" className="linkAnima">
                  Serve with us <span className="arrow"></span>
                </Link>
              </div>
            </div>

            <div
              className="card"
              data-aos-delay="900"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={newsImage} alt="" />
              <div className="text">
                <p className="hover_overlay ">USHERING</p>
                <p>
                  Be part of God's work by joining the ushering team @ Highway
                  of Holiness Church.
                </p>
                <Link to="/contact" className="linkAnima">
                  Serve with us <span className="arrow"></span>
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
