import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "./Longmont.css";
import { Link } from "react-router-dom";
import Search from "../../components/searchLocate/Search";
import SingleCard from "../../components/aboutSlideIn/SingleCard";
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

import newsImage from "../../assets/images/newsletter.jpg";
import voluImg from "../../assets/images/westVolunteer.jpg";
import longPastorImg from "../../assets/images/longmont_pastor.jpg";
import studentsImg from "../../assets/images/students.jpg";
import connectImg from "../../assets/images/connect.jpg";
import kidsImg from "../../assets/images/kids.jpg";
import podcastImg from "../../assets/images/podcast.jpg";

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
      <section id="about_showcase">
        <h1 className="focus-in-contract-bck">Longmont</h1>
        <p className="date focus-in-contract-bck">SUNDAY: 9 & 11 AM</p>
        <Search />
      </section>

      <section id="longmont_about">
        <div className="about_wrapper container">
          <h1 className="text_center">ABOUT</h1>
          <p className="text_center">
            Since our doors opened in 2018, our heart has been to share the
            awesome love of Jesus to the community of Longmont. We exist to live
            out and show that amazing grace to all. (
            <Link className="hover_overlay">John 15:12</Link>) .
          </p>
        </div>
      </section>

      <section id="longmont_reach">
        <div className="reach_wrapper">
          <div className="left">
            <img
              src={longPastorImg}
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
            <h2>DAN FOOTE</h2>
            <p>
              I’ve been skulking around the halls of Flatirons for over 10 years
              in a couple of different roles (Men’s Pastor, Groups Pastor and KM
              Creative Director). My wife, Amy, has been patient enough to
              tolerate me for over 40 years and we’ve multiplied our end of the
              Foote pond with two great kids, their wonderful spouses, and 5
              perfect grandkids. I’ve been going to church since I was born, but
              it wasn’t until my early 20s, that I discovered the difference
              between going to church and following Jesus. Since then, I have
              been on a journey to grow closer to Jesus—inviting others along
              the way. I hope you join me.
            </p>
            <Link className="linkAnima" to="/contact">
              Contact <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="longmont_ministries">
        <div className="about_welcome container">
          <h2>ministries</h2>
          <div className="right">
            <div className="card">
              <img src={studentsImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">STUDENT MIN @ LONGMONT</p>
                <p>
                  At Longmont Students we create an engaging community for
                  students...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={connectImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">CONNECT</p>
                <p>
                  Connect to the Community God made you for! Connect | Women We
                  run...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={kidsImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">KIDS MINISTRY @ LONGMONT</p>
                <p>
                  Kids at Longmont have a blast, worship God, and learn Bible...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SECTION : PADCAST ======= */}
      <section id="longmont_podcast">
        <div className="left ">
          <img src={podcastImg} alt="slideImage" data-aos="fade-right" />
          <div
            className="shape_2"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
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
            THE LONG HAUL PODCAST
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
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              className="hover_overlay text_center"
              href="http://utube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
          </div>

          <Link className="linkAnima">
            OUR BELIEFS <span className="arrow"></span>{" "}
          </Link>
        </div>
      </section>

      <section>
        <div className="about_welcome">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <p>ABOUT US</p>
            <p>
              We're a church that meets at five locations around Denver, and
              online. Join us for an in-person service or online
            </p>
          </div>

          <div className="right">
            <SingleCard />

            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={voluImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">VOLUNTEER @ LONGMONT</p>
                <p>Finf our service time and direction to our locations</p>
                <Link to="/serve" className="linkAnima">
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
              <img src={newsImage} alt="" />
              <div className="text">
                <p className="hover_overlay ">DAN'S NEWLETTER</p>
                <p>Finf our service time and direction to our locations</p>
                <Link to="/about" className="linkAnima">
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
    </div>
  );
};

export default Longmont;
