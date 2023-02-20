import React from "react";
import "./serve.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ServeComponent from "../../components/serveCardsComponent/ServeComponent";
import riseImg from "../../assets/images/kdd4.png";
import ScrollToTop from "../../components/ScrollToTop/index";

function Serve() {
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
      <section id="serve_showcase">
        <h1 className="focus-in-contract-bck">SERVE</h1>
      </section>

      {/* ======= SECTION: SERVE_WHERE ======= */}
      <section id="serve_where">
        <div
          className="left"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-anchor-placement="center-bottom"
        >
          <h2>SERVE WITH US!</h2>
          <p>
            Highway of Holiness Church is a volunteer-driven community and we
            need you to make things work! Sign up to serve with one of our teams
            below.
          </p>
        </div>
        <div className="right">
          <div
            className="where_text"
            data-aos="slide-left"
            data-aos-anchor-placement="center-bottom"
          >
            <p
              data-aos="slide-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="300"
            >
              WHERE WOULD YOU LIKE TO SERVE?
            </p>
          </div>

          <div
            className="shape"
            data-aos="slide-left"
            data-aos-anchor-placement="center-bottom"
          ></div>
        </div>
      </section>

      {/* ======= SECTION: SERVE_CARDS ======= */}
      <section id="serve_cards">
        <div className="cards_wrapper">
          <div className="left">
            <ServeComponent
              img={riseImg}
              head="Rise Volunteer"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Safety Team"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Prayer"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Online"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Facilities & Setup"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Creative"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
          </div>
          <div className="right">
            <ServeComponent
              img={riseImg}
              head="Parents Ministry"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Guest Services"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Student Ministry"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Production"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Kids Ministry"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
            <ServeComponent
              img={riseImg}
              head="Worship"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Saying Yes to serving with the Flatirons Creative team opens opportunities to create content from anything like our weekend services to NextGen events to ministry retreats and more, as a way of showing how lives are continually being changed through the awesome life of Christ. If you are a photographer, videographer, graphic designer, or artist, our creative team would love to connect. Let us know a little about yourself and how you create in the comment section!"
            />
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Serve;
