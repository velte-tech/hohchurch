import React from "react";
import "./Groups.css";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import { ImSearch } from 'react-icons/im';
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

const Groups = () => {
  // const [selects, setSelects] = useState();

  // const [isActive, setIsActive] = useState(false)

  // const [selected, setSelected] = useState('');

  return (
    <div id="super">
      <div className="group-page">
        <div className="gropup-wrapper">
          <div className="group-showcase">
            <div className="group-case">
              {/* showcase text */}
              <div className="group-text">
                <h1 className="focus-in-contract-bck">FELLOWSHIP GROUPS</h1>

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
                <div className="tt-3">Fellowship Groups</div>

                <div className="tt-2">
                  The church congregation is sectioned into the following
                  fellowship groups that our lead by their respective leaders.
                </div>
              </div>

              {/* groups txt end */}

              {/* group flex */}
              <div className="church-group">
                <div className="ch-gr">
                  <div className="ch-gr-1">PEACE GROUP</div>
                  <div className="ch-gr-1">LEADER - SISTER HANNAH</div>
                  {/* <div className="ch-gr-2">
                  Wednesday: 7.30 pm - 8.30 pm
                  <br></br>
                  WORSHIP SERVICE
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div> */}
                  <div className="ch-gr-4">
                    <div className="bib">
                      <div className="bib-1">
                        {/* 3. PEACE GROUP <br></br> */}
                        <span className="hoo">(Philippians 4: 7)</span>
                      </div>
                      <div className="bib-2">
                        And the peace of God, which transcends all
                        understanding, will guard your hearts and your minds in
                        Christ Jesus.
                        {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
                      </div>
                    </div>
                    {/* <Link className="linkAnima">
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link> */}
                  </div>
                  <div className="ch-gr-5"></div>
                </div>

                <div className="ch-gr">
                  <div className="ch-gr-1">POWER GROUP</div>
                  <div className="ch-gr-1">LEADER - SISTER DORCAS</div>
                  {/* <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div> */}
                  <div className="ch-gr-4">
                    {/* <Link className="linkAnima">
                      MORE INFO <span className="arrow"></span>{" "}
                    </Link> */}
                    <div className="bib">
                      <div className="bib-1">
                        {/* 5. POWER GROUP <br></br> */}
                        <span className="hoo">(Luke 24 : 49)</span>
                      </div>
                      <div className="bib-2">
                        I am going to send you what my Father has promised; but
                        stay in the city until you have been clothed with power
                        from on high. <br></br>
                        {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="ch-gr-5"></div>
                </div>

                <div className="ch-gr">
                  <div className="ch-gr-1">FAITH GROUP</div>
                  <div className="ch-gr-1">LEADER - SISTER JODIE</div>
                  {/* <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div> */}
                  <div className="ch-gr-4">
                    <div className="bib">
                      <div className="bib-1">
                        {/* 2. FAITH GROUP <br></br> */}
                        <span className="hoo">(Hebrews 11 : 1)</span>
                      </div>
                      <div className="bib-2">
                        Now faith is the assurance of things hoped for, the
                        conviction of things not seen. <br></br>
                        {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
                      </div>
                    </div>
                    {/* <Link className="linkAnima">
                      MORE INFO <span className="arrow"></span>{" "}
                    </Link> */}
                  </div>
                  <div className="ch-gr-5"></div>
                </div>
              </div>
              {/* group flex end */}

              {/* group flex */}
              <div className="church-group">
                <div className="ch-gr">
                  <div className="ch-gr-1">JOY GROUP</div>
                  <div className="ch-gr-1">LEADER - SISTER JULIE</div>
                  {/* <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div> */}
                  <div className="ch-gr-4">
                    <div className="bib">
                      <div className="bib-1">
                        {/* 3. PEACE GROUP <br></br> */}
                        <span className="hoo">(Psalm 32:11)</span>
                      </div>
                      <div className="bib-2">
                        Be glad in the Lord, and rejoice, O righteous, and shout
                        for joy, all you upright in heart!
                        {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
                      </div>
                    </div>
                    {/* <Link className="linkAnima">
                      MORE INFO <span className="arrow"></span>{" "}
                    </Link> */}
                  </div>
                  <div className="ch-gr-5"></div>
                </div>

                <div className="ch-gr">
                  <div className="ch-gr-1">HOPE GROUP</div>
                  <div className="ch-gr-1">LEADER - SISTER MARCIA</div>
                  {/* <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div> */}
                  <div className="ch-gr-4">
                    {/* <Link className="linkAnima">
                      MORE INFO <span className="arrow"></span>{" "}
                    </Link> */}
                    <div className="bib">
                      <div className="bib-1">
                        {/* 4. HOPE GROUP <br></br> */}
                        <span className="hoo">(Romans 15 : 13)</span>
                      </div>
                      <div className="bib-2">
                        May the God of hope fill you with all joy and peace in
                        believing, so that by the power of the Holy Spirit you
                        may abound in hope. <br></br>
                        {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="ch-gr-5"></div>
                </div>

                <div className="ch-gr">
                  <div className="ch-gr-1">LOVE GROUP</div>
                  <div className="ch-gr-1">LEADER - SISTER MABEL</div>
                  {/* <div className="ch-gr-2">
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className="ch-gr-3 hover_overlay">
                  Unit 8 Fountayne House <br></br>
                  2-8 Fountayne Road <br></br>
                  London 4QL
                </div> */}
                  <div className="ch-gr-4">
                    {/* <Link className="linkAnima">
                      MORE INFO <span className="arrow"></span>{" "}
                    </Link> */}
                    <div className="bib">
                      <div className="bib-1">
                        {/* 1. LOVE GROUP <br></br> */}
                        <span className="hoo">(1 Corinthians 13 : 4 - 7)</span>
                      </div>
                      <div className="bib-2">
                        Love is patient and kind; love does not envy or boast;
                        it is not arrogant or rude. It does not insist on its
                        own way; it is not irritable or resentful; it does not
                        rejoice at wrongdoing, but rejoices with the truth. Love
                        bears all things, believes all things, hopes all things,
                        and endures all things. <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="ch-gr-5"></div>
                </div>
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
