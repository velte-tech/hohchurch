import React, { useState } from "react";
import "./Kids.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import sem111 from "../../assets/images/x5.jpeg";
import kids from "../../assets/images/kidii.jpg";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
// import Kids_campus from '../../components/kids_campus/Kids_campus';
import { urlFor } from "../../utils/urlFor";
import sanityClient from "../../client.js";

const Kids = () => {
  const [kidsData, setKidsData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "kidsMinistry"]{..., headerImage->, kidsShowCase1Img->, kidsShowCase2Img->}`
      )
      .then((data) => {
        console.log("kids:", data[0]);
        setKidsData(data[0]);
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
      <div id="min-group-wrapper">
        <div className="min-group">
          {/* showcase */}
          <div
            className="min-group-showcase"
            style={{
              backgroundImage: `url(${urlFor(kidsData?.headerImage?.image)})`,
            }}
          >
            <div className="min-group-case">
              <div className="min-group-txt">
                <h1 className="focus-in-contract-bck">{kidsData?.title}</h1>
                {/* <h2 className="focus-in-contract-bck">BIRTH - FIFTH GRADE</h2> */}
              </div>
            </div>
          </div>
          {/* showcase end */}

          {/* ministry director  */}

          <div className="min-dir-wrapper">
            <div className="min-dir-case">
              <div className="min-dir">
                <div className="mindir-a">
                  <img
                    src={urlFor(kidsData?.kidsShowCase1Img?.image)}
                    alt={kidsData?.kidsShowCase1Img?.image?.alt}
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  />
                </div>

                <div
                  className="mindir-b"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className="dir-a">{kidsData?.kidsShowCase1Title}</div>
                  <div className="dir-b">{kidsData?.kidsShowCase1Text}</div>
                  <div className="dir-c">
                    <Link className="linkAnima" to="/contact">
                      Contact <span className="arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ministry director end */}

          {/* kids cards section */}

          {/* <div className="kids-cards-wrapper">
          <div className="kids-cards-case">
            

            <div className="kids-cards-show">
              

              <div
                className="kids-cards-1"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-anchor-placement="top center"
              >
                <Link className="kdt">
                  <div className="kc-a">
                    <div className="kk-s-over">
                      <div className="kk-s"></div>
                      <div className="kk-txt">KLM KIDS</div>
                    </div>
                  </div>

                  <div className="kc-b">
                    <div className="kk-txt-1">
                      This Week's Lesson <br></br>
                      Kids - Christmas
                    </div>

                    <div className="kk-txt-2">CHRISTMAS - NOV. & EC.</div>
                  </div>
                </Link>
              </div>

             

              <div
                className="kids-cards-1"
                data-aos="fade-left"
                data-aos-delay="610"
                data-aos-anchor-placement="top center"
              >
                <Link className="kdt">
                  <div className="kc-a2">
                    <div className="kk-s-over">
                      <div className="kk-s"></div>
                      <div className="kk-txt">HOH KIDS</div>
                    </div>
                  </div>

                  <div className="kc-b">
                    <div className="kk-txt-1">
                      This Week's Lesson <br></br>
                      Kids - Christmas
                    </div>

                    <div className="kk-txt-2">CHRISTMAS - NOV. & EC.</div>
                  </div>
                </Link>
              </div>

              

              <div
                className="kids-cards-1"
                data-aos="fade-right"
                data-aos-delay="620"
                data-aos-anchor-placement="top center"
              >
                <Link className="kdt">
                  <div className="kc-a3">
                    <div className="kk-s-over">
                      <div className="kk-s"></div>
                      <div className="kk-txt">SUNDAY SCHOOL</div>
                    </div>
                  </div>

                  <div className="kc-b">
                    <div className="kk-txt-1">
                      This Week's Lesson <br></br>
                      Kids - Christmas
                    </div>

                    <div className="kk-txt-2">CHRISTMAS - NOV. & EC.</div>
                  </div>
                </Link>
              </div>

           
            </div>

           
          </div>
        </div> */}

          {/* kids cards section end */}

          {/* kids outreach */}

          {/* <div className="kid-out-wrapper">
            <div className="kids-out-show">
              <div className="kids-out">
                <div
                  className="kids-aa"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-anchor-placement="top center"
                >
                  <div className="ka-case">
                    <div className="ka-over">
                      <div className="ka-s"></div>
                      <div className="ka-txt">KIDS OUTREACH</div>
                    </div>
                  </div>
                </div>

                <div
                  className="kids-bb"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-anchor-placement="top center"
                >
                  <div className="kb-show">
                    <div className="kb-txt-1">Friends Around The World</div>
                    <div className="kb-txt-2">
                      Friends Around <br></br> The World
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* kids outreachend */}

          {/* plug uncomment to show */}

          {/* <Kids_campus /> */}

          {/* select your campus  */}

          {/* <div className='sel-cam-wrapper'>
        <div className='sel-cam-case'>
          <div className='sel-cam'>
            <div className='sc-a'>
              For More Information and Events
            </div>

            <div className='sc-b focus-in-contract-bck'>
              Select Your Campus
            </div>

            <div className='sc-c'></div>
          </div>
        </div>
      </div> */}

          {/* select your campus end */}

          {/* kids with special needs */}

          {/* <div className="special-wrapper">
            <div className="special-case">
              <div className="special">
                <div className="spec-a">
                 
                  KIDS MINISTRY
                </div>

                <div className="spec-b">
                  We want to care for and lead children through a variety of
                  means, from diapers to discipleship.We are shaping the future
                  generation of leaders, and we do not take this responsibility
                  lightly.We take great pleasure in giving our kids a real
                  encounter with God, which is accomplished via dependable,
                  biblically - based teaching, in a friendly setting, and with a
                  teaching staff that genuinely cares about kids and, quite
                  obviously, the greatest at what they do.
                </div>

                <div className="spec-b">
                  Train up a child in the way he should go; even when he is old
                  he will not depart from it.
                  <span className="hoo">Proverbs 22: 6</span>
                </div>

                <div className='spec-c'>
              <Link className="linkAnima">
                CONTACT CIRCLE OF FRIENDS <span className="arrow"></span>
              </Link>
            </div>
              </div>
            </div>
          </div> */}

          {/* kids with special needs end */}

          {/* ministrt events */}

          {/* <div className="min-eve-wrapper">
            <div className="min-eve-txt">Ministry Events</div>
          </div> */}

          {/* ministrt events end */}

          {/* seminar card  */}

          <div className="seminar-wrapper">
            <div className="seminar-case">
              <div className="seminar-show">
                <div className="seminar">
                  <div
                    className="sem-a"
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  ></div>

                  <div
                    className="sem-b"
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >
                    <img
                      src={urlFor(kidsData?.kidsShowCase2Img?.image)}
                      alt={kidsData?.kidsShowCase2Img?.image?.alt}
                    />
                  </div>

                  <div
                    className="sem-c"
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >
                    <div className="sem-c-1">
                      {/* <div className="sem-c-txt-1">KIDS MINISTRY </div> */}
                      {/* <div className="sem-c-txt-2">
                      February 18, 2023 | Lafayette
                    </div> */}
                      <div className="sem-c-txt-3">
                        {kidsData?.kidsShowCase2Text}
                      </div>
                      {/* <div className="sem-c-txt-4">
                        <Link to="/ministries" className="linkAnima">
                          LEARN MORE <span className="arrow"></span>
                        </Link>
                      </div> */}
                    </div>
                    <div className="sem-c-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* seminar card end */}

          {/* ministry director  */}

          {/* <div className="min-dir-wrapper">
            <div className="min-dir-case">
              <div className="min-dir">
                <div className="mindir-a">
                  <img
                    src={kmmm}
                    alt=""
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  />
                </div>

                <div
                  className="mindir-b"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className="dir-a">REV ANITA </div>
                  <div className="dir-b">Kids Ministry Director</div>
                  <div className="dir-c">
                    <Link className="linkAnima" to="/contact">
                      Contact <span className="arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* ministry director end */}
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Kids;
