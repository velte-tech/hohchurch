import { React } from "react";
import "./About_HOH.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
// import kmmm from "../../assets/images/pastor-alex.jpg";
// import kmmm2 from "../../assets/images/alexdocas.jpg";
import kmmm3 from "../../assets/images/alexdocas2.jpg";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

const About_HOH = () => {
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

  return (
    
    <div id="super">

      <div className="about-hoh-page">
      <div className="hoh-wrapper">
        {/* showcase */}
        <div className="hoh-showcase">
          <div className="hoh-text-showcase">
            <div className="hoh-text">
              {/* <h1 className='focus-in-contract-bck'> ABOUT </h1> */}
              <h1 className="focus-in-contract-bck"> HIGHWAY OF HOLINESS</h1>
            </div>
          </div>
        </div>
        {/* showcase end */}

        {/* our vision */}

        <div className="vision-wrapper">
          <div className="vision container">
              
            <div className="line-case">
              <div className="line-1"></div>
            </div>
              
            <div className="about-info-case">
              
            <div className="tt-1 focus-in-contract-bck">
              ABOUT US
            </div>  
              
            {/* <div className="tt-3">
              Leadership – Pastor and Mama D.
            </div>

            <div className="tt-2"> 
                Pastor Alex and Pastor Dorcas are the head shepherds of Highway of Holiness Church. <br></br>
                They are assisted by Pastor Roland Owusu– Mensah and His Wife Mabel Owusu - mensah.   
            </div> */}
            
            <div className="tt-3">
              Fellowship Groups
            </div>
            
            <div className="tt-2"> 
                The church congregation is sectioned  into 5 fellowship groups that our lead by …
            </div>
            
            {/* BIBLICAL LIST */}

        <div className='biblical-wrapper'>
          <div className='biblical'>

            <div className='bib'>
              <div className='bib-1'>
                1. LOVE GROUP
                  <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span>
              </div>
              <div className='bib-2'>
                Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, and endures all things. <br></br>
                  {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                2. FAITH GROUP
                  <span className='hoo'>
                    (Hebrews 11: 1)
                  </span>
              </div>
              <div className='bib-2'>
                Now faith is the assurance of things hoped for, the conviction of things not seen. <br></br>
                  {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                3. PEACE GROUP
                  <span className='hoo'>
                    (Philippians 4: 7)
                  </span>
              </div>
              <div className='bib-2'>
                And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. 
                  {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                4. HOPE GROUP
                  <span className='hoo'>
                    (Romans 15: 13)
                  </span>
              </div>
              <div className='bib-2'>
                May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. <br></br>
                  {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                5. POWER GROUP
                  <span className='hoo'>
                    (Luke 24: 49)
                  </span>
              </div>
              <div className='bib-2'>
                I am going to send you what my Father has promised; but stay in the city until you have been clothed with power from on high. <br></br>
                  {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                MENS'S FELLOWSHIP
              </div>
              {/* <div className='bib-2'>
                Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, and endures all things.
              </div> */}
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                WOMEN'S FELLOWSHIP 
                  {/* <span className='hoo'>
                    (1 Corinthians 13: 4 - 7)
                  </span> */}
              </div>
              {/* <div className='bib-2'>
                Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, and endures all things. 
              </div> */}
            </div>
            
            

          </div>
        </div>

        {/* BIBLICAL LIST END */}
            
            </div>
              
            <div className="line-case">
              <div className="line-1"></div>
            </div>
                   
          </div>
        </div>

        {/* vision end */}

        {/* OUR VALUES */}

        <div className="values-wrapper">
          <div className="values">
            <div className="values-showcase">
              <div className="values-text-case container">
                <div className="values-tt1 focus-in-contract-bck">
                  {/* OUR VALUES */}
                  OUR HISTORY
                </div>

                <div className="values-tt2">
                  {/* ACTS 2: 42 - 47 */}
                  On January 1 st, 2000, The Highway of Holiness(HOH) was
                  formally established as a church in London, United Kingdom.A
                  tiny classroom was used for the inaugural meeting, which had a
                  starting attendance of only approximately twenty persons.
                </div>

                <div className="values-tt2">
                  Between January 1, 2000, and, January 31, 2000, the membership
                  quickly increased to about 50 individuals who regularly
                  attended.Early church gatherings were held in a variety of
                  locations, including private homes. HOH moved into a rented
                  unit at Unit 8 Fountayne House, 2 - 8 Fountayne Road, in
                  London, United Kingdom, in 2001, and this location has served
                  as its headquarters ever since
                </div>

                <div className="values-tt2">
                  The membership increased to over hundreds over these time
                  periods.During this time, there were also active efforts to
                  plant new churches missionaries, and local congregations were
                  started in nations like Pakistan, Ghana, Sudan, etc.
                </div>

                <div className="values-tt2">
                  In 2012, the HOH established a tutorial institution(schools)—
                  Kingdom Lifestyle Mission(KLM) which provides after - school
                  programs or tutoring for Christian children in other dominant
                  religious countries.KLM is found in Ghana, Pakistan, Sudan,
                  Ethiopia, etc.As a charity, KLM seeks to inspire, engage and
                  create opportunities for underprivileged children across the
                  globe.
                </div>

                <div className="values-tt2">
                  Again in 2009, the church established a homeless shelter
                  called Highway Shelter where those living on the streets of
                  London may go for food and visit with the pastor and his wife,
                  "Pastor Alex Gyasi." Since the HOH first opened its doors,
                  about 1000 people have received assistance with accommodation,
                  food, and counseling, as well as the chance to connect with
                  other people through its highway housing program.
                </div>

                <div className="values-tt2">
                  The Highway of Holiness Christian Love Centre(HOH) is a
                  socially conscious Christian church that upholds the
                  philosophy of Human dignity and Excellence.It engages in
                  promoting and staging events whose impact has reached the
                  depths of London society and brought Christ to the doorsteps
                  of the people.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR VALUES END */}

        {/* BIBLICAL LIST */}

        {/* <div className='biblical-wrapper'>
          <div className='biblical container-2'>

            <div className='bib'>
              <div className='bib-1'>
                1. BIBLICAL AUTHORITY–“ A BETTER WAY TO DO LIFE”
              </div>

              <div className='bib-2'>
                The Bible is God’ s Word and it is our authority
                for life.If we will adjust our lives(submit) to it, we will find a better way to live. <span className='hoo'>(John 1: 14)</span>
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                2. RELATIONAL INTIMACY–“ GRACE AND TRUTH”
              </div>

              <div className='bib-2'>
                No matter what you have done wrong, we believe that by grace through faith in Jesus alone, it is still possible to be reconnected back into an intimate relationship with God. <span className='hoo'>(Ephesians 2: 8 - 9, Romans 6: 1 - 23 & 8: 1 - 39)</span>
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                3. SPIRITUAL FORMATION–“ ME TOO”
              </div>

              <div className='bib-2'>
                We believe that living life and linking arms in a safe“ me too” group is the best environment to train to know who Jesus really is so that He is formed in us. <span className='hoo'>(Romans 12: 1)</span>
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                4. EXCELLENT ENVIRONMENTS–“ BUMP INTO JESUS”
              </div>

              <div className='bib-2'>
                Using our spiritual gifts, talents, abilities, resources, passions and creativity, we believe that it is our role and responsibility to create excellent environments and eliminate any and all obstacles so that people have the best opportunity to encounter(bump into) Jesus so that <br></br> He can do what only He can do. <span className='hoo'>(Colossians 3: 17)</span>
              </div>
            </div>
            
            <div className='bib'>
              <div className='bib-1'>
                5. RELATIONAL EVANGELISM–“ COME AND SEE
              </div>

              <div className='bib-2'>
                Because of what Jesus has done
                for us we believe the most loving thing we can do
                  for others is to go to them and invite them to come and see who Jesus is and what He has done
                for
                them. <span className='hoo'>(Mark 2: 1 - 28, Matthew 28: 1 - 20)</span>
              </div>
            </div>

          </div>
        </div> */}

        {/* BIBLICAL LIST END */}

        {/* PASTOR ALEX */}

        <div className="ps-alex-wrapper">
          <div className="ps-alex-show">
            <div className="ps-alex-case">
              <div className="ps-left">
                <div
                  className="psl-pic"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <img src={kmmm3} alt="" />
                </div>
              </div>

              <div
                className="ps-right"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="600"
              >
                <div className="psr1">
                  Welcome address from Pastor Alex and Pastor Dorcas
                </div>

                <div className="psr2">
                  {/* Pastor Alex Gyasi is a spiritual leader who is responsible for
                  guiding the congregation towards a deeper understanding and
                  relationship with God.He sermons, offers counsel to members,
                  and provides guidance on spiritual and moral issues.In
                  addition to preaching and teaching, He also oversee various
                  programs and activities within the church, such as outreach
                  efforts, youth groups, and mission trips. */}

                    We warmly welcome you to Highway of Holiness Church, a place of faith, fellowship and freedom in Christ.  Here at HOH everything we do is centred on the living word of God, the Holy Bible.We believe that the answers to life’ s questions are found within the pages of God’ s holy word. This is the source we stand on to teach, equip and edify God’ s children.  Our desire is to demonstrate how you can live a purposeful life in Christ, being fruitful in your gifts and bringing others to His Kingdom. As believers in Christ we are here on earth to be ambassadors of God’ s Kingdom and we do this by demonstrating Gods love to the world.
                </div>

                <div className="psr3">
                  <Link to="/" className="links linkAnima">
                    CONTACT <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASTOR ALEX end */}

        {/* INTERESTED */}

        <div className="interested-wrapper">
          <div className="interested container">
            <div className="line-1"></div>
            <div className="int">
              If you 're interested in who leads Highway of Holiness Church,{" "}
              learn more on our{" "}
              <span
                className="hoo">
                <Link to="/Leadership" className="hover_overlay">
                  Leadership page
                </Link>
              </span>
            </div>
            <div className="line-1"></div>
          </div>
        </div>

        {/* INTERESTED END */}

        {/* BAPTISM & COMMUNION */}

        {/* <div className='values-wrapper'>
          <div className='values'>
            <div className='values-showcase'>
              <div className='values-text-case container'>
                <div className='values-tt1 focus-in-contract-bck'>
                  BAPTISM & COMMUNION
                </div>
                
              </div>
            </div>
          </div>
        </div> */}

        {/* BAPTISM & COMMUNION END */}

        {/* mission statement  */}

        <div className="ms-stat-wrapper">
          <div className="ms-stat-case">
            <div className="ms-stat-show">
              <div id="lshape">
                <div class="l-shape">
                  <div class="box-1"></div>
                  <div class="box-2"></div>
                </div>
              </div>

              <div className="ms-stat">
                <div className="ms1">MISSION STATEMENT</div>
                {/* <span>"</span> */}
                <div className="ms2">
                  To follow God fully and lead nations to eternity through teaching the word of God and the practical demonstration of the love of God to the world.
                  </div>
                  
                {/* <div className="ms22">
                  My wife and I started our ministry 33 years ago when we said“ YES!”to God’ s call. Since then have not looked back. We have embarked on many projects, ranging from providing supplementary education
                  for children in deprived areas - to running a homeless shelter since 2009 till present day and many more ministries that you will come across as you browse this site.We have witnessed first - hand, how living a life fully surrendered to Christ can positively impact you, your family, friends and society as a whole.
                  Life comes with its challenges, sometimes you may feel discouraged or attacked but we believe through the power of God you can overcome every barrier and set back, that things can take a turn
                  for the better. We welcome you to join the church family
                  if you do not already belong to one and would like you to know that we are available to visit you, offer counselling, be a listening ear and offer prayer.
                  As you
                  continue to explore this website you can find out more details on;
                  coming to worship with us in person at a Sunday service, upcoming events, the missions we currently run in London and internationally, our church fellowship groups and much more. We are excited or what God is about to do and want you to be a part of it.Take care and God bless.
                </div> */}
                
                {/* <span> "</span> */}
              </div>

              <div id="lshape2">
                <div class="l-shape2">
                  <div class="box-12"></div>
                  <div class="box-22"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mission statement end */}

        {/* KINGDOM & HIGHWAY */}

        <div className="kg-hh-wrapper">
          <div className="kg-hh">
            <div className="kg" data-aos="fade-right">
              <div className="kg-1 focus-in-contract-bck">
                KINGDOM CULTURE ALLIANCE 
              </div>

              <div className="kg-2">
                Kingdom Culture Alliance(KCA) is a forum
                for leaders and ministers who desire to build their character and capacity
                for the advancement of the Kingdom of God.
              </div>

              <div className="kg-3">
                <Link to="/" className="links linkAnima">
                  MORE INFO ABOUT KCA <span className="arrow"></span>
                </Link>
              </div>
            </div>

            <div className="hh">
              <div className="hh-1a focus-in-contract-bck">HIGHWAY HOUSING</div>

              <div className="hh-2a">
                The Highway House Shelter is more than a homeless shelter. We
                are a shelter based in Tottenham, London that houses up to 35
                men at a time. Since we opened our doors in 2009, almost 1000
                people have been helped with shelter, food and counselling,
                along with the opportunity for much needed companionship with
                others.
              </div>

              <div className="hh-3">
                <a
                  target="_blank"
                  href="https://hohcentre.co.uk/"
                  rel="noreferrer"
                >
                  <div className="links linkAnima">
                    MORE INFO ABOUT HIGHWAY HOUSING{" "}
                    <span className="arrow"> </span>
                  </div>
                </a>
              </div>
            </div>

            {/* KLM  */}

            <div className="klm-case" data-aos="fade-left">
              <div className="klm-show">
                <div className="hh-1a focus-in-contract-bck">
                  KINGDOM LIFESTYLE MISSION
                </div>

                <div className="hh-2a">
                  Kingdom Lifestyle Mission(KLM) provides FREE supplementary
                  education for underprivileged children.KLM runs free weekly
                  Saturday schools and vacation classes during school
                  holidays.Our goal is to help children in deprived communities.
                </div>

                <div className="hh-3">
                  {/* <a target="_blank" href="https://hohcentre.co.uk/"> */}

                  <Link className="links linkAnima">
                    MORE INFO ABOUT KLM <span className="arrow"> </span>
                  </Link>

                  {/* </a> */}
                </div>
              </div>
            </div>

            {/* KLM END */}
          </div>
        </div>

        {/* KINGDOM & HIGHWAY END */}
      </div>
      <ScrollToTop />
    </div>

    </div>

  );
};

export default About_HOH;
