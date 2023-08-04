import { React, useState } from "react";
// import { Link } from "react-router-dom";
import "./Leadership.css";
// Images
// import l1 from "../../assets/images/pastor-alex.jpg";
import l1 from "../../assets/images/unnamed.png";
import l22 from "../../assets/images/pswomen.jpeg";
import l33 from "../../assets/images/psroll.jpeg";
import naruto from "../../assets/images/leaders-hoh.jpg";
import minlogo from "../../assets/brand/hohlogo.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
// import { MdMailOutline } from "react-icons/md";
// import { GrMail } from "react-icons/gr";
import { useEffect } from "react";
import AOS from "aos";
import EmailContactButton from "../../components/mailto/Mailto";
import { urlFor } from "../../utils/urlFor";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";

const Leadership = () => {
  const [leadershipData, setLeadershipData] = useState();

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
        `*[_type == "leadership"]{..., headerImage->, leaders[] {..., image->}}`
      )
      .then((data) => {
        console.log("leadership: ", data);
        setLeadershipData(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="super">
      <div className="leadership-page">
        <div className="leadership-wrapper">
          {/* shwowcse */}
          <div
            className="leadership-showcase"
            style={{
              backgroundImage: `url(${urlFor(
                leadershipData?.headerImage?.image
              )})`,
            }}
          >
            <div className="leadership-show">
              <div className="leadership-text">
                <h1 className="focus-in-contract-bck">
                  {leadershipData?.title}
                </h1>
              </div>
            </div>
          </div>
          {/* shwowcse end */}

          <div className="leadd-info-case">
            <div className="leadd-info-show container">
              <div className="leadd">
                <div className="tt-3">{leadershipData?.leadershipTitle}</div>

                {/* <div className="tt-2">
                  Pastor Alex and Pastor Dorcas are the head shepherds of
                  Highway of Holiness Church.
                </div>
                <div className="tt-2">
                  They are assisted by Pastor Roland Owusu-Mensah and His Wife
                  Mabel Owusu-Mensah.
                </div> */}
                <BlockContent blocks={leadershipData?.leadershipDescription} />
              </div>
            </div>
          </div>

          {/* leaders */}

          <div id="leade-wrapper">
            <div className="leade-case">
              <div className="leade-show">
                <div className="lead-flex-case">
                  <div className="lead-flex-show">
                    {/* fleaders 3 flex  */}

                    {leadershipData?.leaders?.map((leader) => (
                      <div key={leader._key} className="lead-flex">
                        <div className="lf1-pic">
                          <img
                            src={urlFor(leader?.image?.image)}
                            alt={leader?.image?.image?.alt}
                          />
                        </div>
                        <div className="lf12">{leader.name}</div>
                        <div className="lf3">{leader.title}</div>

                        <EmailContactButton
                          emailAddress="info@hohcentre.co.uk"
                          subject="Message"
                        />
                      </div>
                    ))}

                    {/* fleaders 3 flex end */}
                  </div>

                  {/* <div className="lead-flex-show">
                    

                    <div className="lead-flex">
                      <div className="lf1-pic22">
                        <img src={minlogo} alt="" />
                      </div>
                      <div className="lf12">Minister Hannah</div>
                      <div className="lf3">Leader For Peace Group</div>

                      <EmailContactButton
                        emailAddress="hannah@hohcentre.co.uk"
                        subject="Message"
                      />
                    </div>

                    <div className="lead-flex">
                      <div className="lf1-pic22">
                        <img src={minlogo} alt="" />
                      </div>
                      <div className="lf12">Minister Dorcas</div>
                      <div className="lf3">Leader For Power Group</div>

                      <EmailContactButton
                        emailAddress="dorcas@hohcentre.co.uk"
                        subject="Message"
                      />
                    </div>

                    <div className="lead-flex">
                      <div className="lf1-pic22">
                        <img src={minlogo} alt="" />
                      </div>
                      <div className="lf12">Minister Jodie</div>
                      <div className="lf3">Leader For Joy Group</div>

                      <EmailContactButton
                        emailAddress="info@hohcentre.co.uk"
                        subject="Message"
                      />
                    </div>

                    
                  </div> */}

                  {/* <div className="lead-flex-show">
                    

                    <div className="lead-flex">
                      <div className="lf1-pic22">
                        <img src={minlogo} alt="" />
                      </div>
                      <div className="lf12">Minister Julie</div>
                      <div className="lf3">Leader For Faith Group</div>

                      <EmailContactButton
                        emailAddress="jolie@hohcentre.co.uk"
                        subject="Message"
                      />
                    </div>

                    <div className="lead-flex">
                      <div className="lf1-pic22">
                        <img src={minlogo} alt="" />
                      </div>
                      <div className="lf12">Minister Mable</div>
                      <div className="lf3">Leader For Love Group</div>

                      <EmailContactButton
                        emailAddress="mabel@hohcentre.co.uk"
                        subject="Message"
                      />
                    </div>

                    <div className="lead-flex">
                      <div className="lf1-pic22">
                        <img src={minlogo} alt="" />
                      </div>
                      <div className="lf12">Minister Marcia</div>
                      <div className="lf3">Leader For Hope Group</div>

                      <EmailContactButton
                        emailAddress="marcia@hohcentre.co.uk"
                        subject="Message"
                      />
                    </div>

                    
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* leaders end */}

          {/* our leaders */}

          {/* <div className="values-wrapper">
            <div className="values">
              <div className="values-showcase">
                <div className="values-text-case    container">
                  <div className="values-tt1 focus-in-contract-bck">
                    OUR LEADERS
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* our leaders end */}

          {/* ALONE */}

          {/* <div className="alone-wrapper">
            <div className="alone">
              <div className="alone-1" data-aos="fade-right">
                <div className="lone-1">WE DON'T DO THIS ALONE</div>
                <div className="lone-2">
                  leadership typically refers to the group of individuals who
                  oversee the affairs and operations of an organization.The
                  exact structure of church leadership can vary depending on the
                  denomination and the size of the congregation, but there are
                  some common roles and responsibilities that many church
                  leaders share.
                </div>

                <div className="lone-3">
                  Effective church leadership requires a combination of
                  spiritual maturity, organizational skills, and interpersonal
                  abilities. Strong communication skills, the ability to
                  collaborate with others, and a deep commitment to the church
                  's mission and values.
                </div>
              </div>

              <div className="alone-2">
                <div
                  className="pic"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-anchor-placement="center-bottom"
                >
                  <img src={naruto} alt="" />
                </div>

                <div
                  className="shape-2"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-anchor-placement="center-bottom"
                ></div>
              </div>
            </div>
          </div> */}

          {/* ALONE END */}
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Leadership;
