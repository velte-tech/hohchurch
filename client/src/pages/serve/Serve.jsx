import React from "react";
import "./serve.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ServeComponent from "../../components/serveCardsComponent/ServeComponent";
import riseImg from "../../assets/images/kdd4.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

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
              detail="Rise Volunteer is a community of passionate individuals who are dedicated to serving others. We are proud to be a part of Highway of Holiness Church and share its mission to spread kindness and love to those in need. We organize various volunteer projects and events throughout the year, and we welcome anyone who wants to make a positive impact in their community. Join Rise Volunteer today and help us make a difference in the world!"
            />
            <ServeComponent
              img={riseImg}
              head="Safety Team"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="At Highway of Holiness Church, the safety and security of our community is a top priority. That's why we have a dedicated Safety Team volunteer group who work tirelessly to ensure a safe environment for everyone who comes through our doors. Our Safety Team members are trained to respond to emergencies and provide assistance whenever needed. Join our Safety Team volunteer group and help us keep our community safe and secure. Your contribution can make a real difference in the lives of those around you."
            />
            <ServeComponent
              img={riseImg}
              head="Prayer"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Prayer is a powerful force that can bring people together and create positive change. At Highway of Holiness Church, our Prayer volunteer group is dedicated to lifting up our community in prayer. We come together to pray for healing, comfort, and strength for those in need. We believe that prayer is an essential part of our spiritual journey and we welcome anyone who wants to join us in this important work. Come join our Prayer volunteer group and make a difference in people's lives through the power of prayer."
            />
            <ServeComponent
              img={riseImg}
              head="Online"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Highway of Holiness Church is committed to bringing its message of hope and faith to people all over the world. Our Online volunteer group plays a crucial role in this effort by creating and maintaining our online presence. From social media management to video editing and content creation, our Online volunteers work behind the scenes to ensure that our message reaches as many people as possible. Join our Online volunteer group and help us spread the word of God to those who need it most, no matter where they are in the world."
            />
            <ServeComponent
              img={riseImg}
              head="Facilities & Setup"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="The Facilities Setup volunteer group at Highway of Holiness Church is responsible for ensuring that our worship space is welcoming and comfortable for everyone who enters. From setting up chairs and decorations to ensuring that audiovisual equipment is in working order, our Facilities Setup volunteers play a crucial role in creating a positive worship experience. Join our Facilities Setup volunteer group and help us create a warm and inviting atmosphere for our congregation. Your contributions will make a significant impact on the worship experience of those around you."
            />
            <ServeComponent
              img={riseImg}
              head="Creative"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="The Creative volunteer group at Highway of Holiness Church is made up of individuals with a passion for creativity and a desire to share God's message in new and innovative ways. Our Creative volunteers use their talents to design graphics, produce videos, and create engaging content for our congregation and the wider community. Join our Creative volunteer group and help us share the message of God in a fresh and dynamic way. Your contributions will inspire and impact those around you."
            />
          </div>
          <div className="right">
            <ServeComponent
              img={riseImg}
              head="Parents Ministry"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="The Parents Ministry volunteer group at Highway of Holiness Church is dedicated to supporting and empowering parents in their spiritual journey. Our volunteers organize events and activities that provide parents with the resources and tools they need to raise their children in a faith-based environment. From parenting workshops to family-friendly outings, our Parents Ministry volunteers help parents feel connected, supported, and inspired. Join our Parents Ministry volunteer group and help us create a community where families can grow and thrive in their faith together."
            />
            <ServeComponent
              img={riseImg}
              head="Guest Services"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="The Guest Services volunteer group at Highway of Holiness Church is responsible for creating a warm and welcoming environment for our guests. Our volunteers greet visitors, answer questions, and provide information about our church and its services. We also assist with seating, offering, and prayer requests. Join our Guest Services volunteer group and help us create a hospitable and inviting atmosphere for those who come to our church. Your contributions will help make a lasting impression on our guests and show them the love of God."
            />
            <ServeComponent
              img={riseImg}
              head="Student Ministry"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="The Students Ministry volunteer group at Highway of Holiness Church is committed to helping young people grow in their faith and become leaders in their communities. Our volunteers organize events and activities that engage students and provide them with opportunities to connect with one another and with God. From weekly gatherings to retreats and missions trips, our Students Ministry volunteers help young people discover their passions and their purpose. Join our Students Ministry volunteer group and help us empower the next generation of leaders or be the one who is inspired."
            />
            <ServeComponent
              img={riseImg}
              head="Production"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="The Production team at Highway of Holiness Church is responsible for ensuring that our worship services run smoothly and seamlessly. Our volunteers operate sound and lighting equipment, produce visual media, and manage livestream broadcasts. We work behind the scenes to create a meaningful and impactful worship experience for our congregation and those watching from home. Join our Production volunteer group and help us use technology to spread the message of God in a powerful way. Your contributions will make a significant impact on our worship services."
            />
            <ServeComponent
              img={riseImg}
              head="Kids Ministry"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="The Kids Ministry volunteer group at Highway of Holiness Church is committed to providing a safe and nurturing environment where children can learn about God's love and grow in their faith. Our volunteers organize fun and engaging activities that teach children about the Bible and help them develop a strong foundation in their faith. Join our Kids Ministry volunteer group and help us make a difference in the lives of our youngest members. Your contributions will impact the future of our church and the communities we serve."
            />
            <ServeComponent
              img={riseImg}
              head="Worship"
              text_1="SIGN UP"
              text_2="LEARN MORE"
              detail="Worship is the worship team at Highway of Holiness Church. Our team leads the congregation in music that inspires and lifts up hearts to God. We believe that worship is an important aspect of the Christian life and our team strives to create an atmosphere of reverence, joy, and praise. Join our Highway Worship team and help us create a meaningful worship experience that glorifies God and touches the hearts of those who attend."
            />
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Serve;
