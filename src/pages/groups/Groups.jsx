import React, { useEffect, useState } from "react";
import "./Groups.css";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import { ImSearch } from 'react-icons/im';
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import { urlFor } from "../../utils/urlFor";
import sanityClient from "../../client.js";

const Groups = () => {
  // const [selects, setSelects] = useState();

  // const [isActive, setIsActive] = useState(false)

  // const [selected, setSelected] = useState('');
  const [groupsData, setGroupsData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "groupsPage"]{..., headerImage->}`)
      .then((data) => {
        console.log("groups: ", data[0]);
        setGroupsData(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="super">
      <div className="group-page">
        <div className="gropup-wrapper">
          <div
            className="group-showcase"
            style={{
              backgroundImage: `url(${urlFor(groupsData?.headerImage?.image)})`,
            }}
          >
            <div className="group-case">
              {/* showcase text */}
              <div className="group-text">
                <h1 className="focus-in-contract-bck">{groupsData?.title}</h1>

                {/* <h2 className="focus-in-contract-bck">
                TIMES ARE IN MOUNTAIN TIMEZONE
              </h2> */}
              </div>
              {/* showcase text */}
            </div>
          </div>

          {/* shape and map */}

          <div className="map-shape-wrapper">
            <div className="map-shape">
              <div className="mp-sp">
                <div
                  className="mp slide-in-right"
                  // data-aos="fade-left"
                  // data-aos-delay="400"
                >
                  <GoogleMap />
                </div>

                <div className="sp">
                  <div
                    className="map-shape silde-in-right"
                    // data-aos="fade-left"
                    // data-aos-delay="500"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* shape and map end */}

          {/* search bar */}

          {/* <div className='sh-wrapper'>
        <div className='sh-case'>

          <div className='sh'>
            <div className='sh-1'>
              <input type='text' className='sh-tt' placeholder='SEARCH'></input>
            </div>

            <div className='sh-2'>
              <Link><ImSearch /></Link>
            </div>
          </div>
          
        </div>
      </div> */}

          {/* search bar end */}

          {/* individual church groups */}

          <div className="church-group-wrapper">
            <div className="church-group-case">
              {/* groups txt  */}

              <div className="fel-grp">
                <div className="tt-3">{groupsData?.fellowshipTitle}</div>

                <div className="tt-2">{groupsData?.fellowshipText}</div>
              </div>

              {/* groups txt end */}

              {/* group flex */}
              <div className="church-group">
                {groupsData?.fellowshipGroups?.slice(0, 3).map((group) => (
                  <div key={group._key} className="ch-gr">
                    <div className="ch-gr-1">{group.name}</div>
                    <div className="ch-gr-1">LEADER - {group.leader}</div>
                    <div className="ch-gr-4">
                      <div className="bib">
                        <div className="bib-1">
                          <span className="hoo">({group.bibleVerse})</span>
                        </div>
                        <div className="bib-2">{group.bibleVerseQuote}</div>
                      </div>
                    </div>
                    <div className="ch-gr-5"></div>
                  </div>
                ))}
              </div>
              {/* group flex end */}

              {/* group flex */}
              <div className="church-group">
                {groupsData?.fellowshipGroups?.slice(3, 6).map((group) => (
                  <div key={group._key} className="ch-gr">
                    <div className="ch-gr-1">{group.name}</div>
                    <div className="ch-gr-1">LEADER - {group.leader}</div>
                    <div className="ch-gr-4">
                      <div className="bib">
                        <div className="bib-1">
                          <span className="hoo">({group.bibleVerse})</span>
                        </div>
                        <div className="bib-2">{group.bibleVerseQuote}</div>
                      </div>
                    </div>
                    <div className="ch-gr-5"></div>
                  </div>
                ))}
              </div>
              {/* group flex end */}

              {/* group flex */}

              {/* <div className="church-group">
              <div className="ch-gr">
                <div className="ch-gr-1">MEN'S GROUP</div>
                <div className="ch-gr-1">LEADER - SISTER JULIE</div>
                
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>

              <div className="ch-gr">
                <div className="ch-gr-1">WOMEN'S GROUP</div>
                <div className="ch-gr-1">LEADER - SISTER MARCIA</div>
               
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>

              <div className="ch-gr">
                <div className="ch-gr-1">WEEKLY PROGRAMMES</div>
                <div className="ch-gr-1">LEADER - SISTER MABEL</div>
               
                <div className="ch-gr-4">
                  <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="ch-gr-5"></div>
              </div>
            </div> */}

              {/* group flex end */}

              {/* <div className="tt-2"> 
                The church congregation is sectioned  into 5 fellowship groups that our lead by …
            </div> */}
            </div>
          </div>

          {/* individual church groups end */}
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Groups;
