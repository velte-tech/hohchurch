import { React } from 'react'
import './About_HOH.css'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import AOS from "aos";
import kmmm from "../../assets/images/pastor-alex.jpg";



const About_HOH = () => {

  useEffect(() => {
    AOS.init({
        duration: 500,
        once: false,
        mirror: true,
      },
      []
    );
  });

  return (
    
    <div className='about-hoh-page'>
      <div className='hoh-wrapper'>

        {/* showcase */}
        <div className='hoh-showcase'>
          <div className='hoh-text-showcase'>
            <div className='hoh-text'>
              {/* <h1 className='focus-in-contract-bck'> ABOUT </h1> */}
              <h1 className='focus-in-contract-bck'>  HIGHWAY OF HOLINESS</h1>
          </div>
          </div>
        </div>
        {/* showcase end */}



        {/* our vision */}

        <div className='vision-wrapper container'>
          <div className='vision'>
            <div className='line-1'></div>
            <div className='tt-1 focus-in-contract-bck'>
              {/* OUR VISION */}
              ABOUT
            </div>

            <div className='tt-2'>
              {/* bring the awesome life of Christ to people in a lost and <br></br> broken world */}

              The Highway of Holiness Church(HOH) is an Evangelical, Charismatic Christian
              Church that centers on companionship, love, and care.We seek to exalt the Lord
              and build up His people via collective worship and teachings that emphasize the
              sufficiency of God and His Word.By centering our community life on Jesus, we
              hope to become a cross - class, multiracial place where people from many
              backgrounds and viewpoints can come together in harmony.

            </div>
            <div className='line-1'></div>
          </div>
        </div>

        {/* vision end */}





        {/* OUR VALUES */}

        <div className='values-wrapper'>
          <div className='values'>
            <div className='values-showcase'>
              <div className='values-text-case container'>
                <div className='values-tt1 focus-in-contract-bck'>
                  {/* OUR VALUES */}

                  OUR HISTORY
                </div>
                
                <div className='values-tt2'>
                  {/* ACTS 2: 42 - 47 */}

                  On January 1 st, 2000, The Highway of Holiness(HOH) was formally established
                  as a church in London, United Kingdom.A tiny classroom was used for the inaugural meeting, which had a starting attendance of only approximately twenty persons.

                </div>


                <div className='values-tt2'>
                 Between January 1, 2000, and, January 31, 2000, the membership quickly
                 increased to about 50 individuals who regularly attended.Early church gatherings
                 were held in a variety of locations, including private homes.
                 HOH moved into a rented unit at Unit 8 Fountayne House, 2 - 8 Fountayne Road, in
                  London, United Kingdom, in 2001, and this location has served as its headquarters
                 ever since
                </div>

                
                <div className='values-tt2'>
                  The membership increased to over hundreds over these time periods.During this
                  time, there were also active efforts to plant new churches missionaries, and local
                  congregations were started in nations like Pakistan, Ghana, Sudan, etc.

                </div>

                
                <div className='values-tt2'>
                  In 2012, the HOH established a tutorial institution(schools)— Kingdom Lifestyle
                  Mission(KLM) which provides after - school programs or tutoring
                  for Christian
                  children in other dominant religious countries.KLM is found in Ghana, Pakistan,
                    Sudan, Ethiopia, etc.As a charity, KLM seeks to inspire, engage and create
                  opportunities
                  for underprivileged children across the globe.

                </div>

                
                <div className='values-tt2'>
                  Again in 2009, the church established a homeless shelter called Highway Shelter
                  where those living on the streets of London may go
                  for food and visit with the
                  pastor and his wife, "Pastor Alex Gyasi."
                  Since the HOH first opened its doors,
                  about 1000 people have received assistance with accommodation, food, and
                  counseling, as well as the chance to connect with other people through its highway
                  housing program.

                </div>

                
                <div className='values-tt2'>
                The Highway of Holiness Christian Love Centre(HOH) is a socially conscious
                Christian church that upholds the philosophy of Human dignity and Excellence.It
                engages in promoting and staging events whose impact has reached the depths of
                London society and brought Christ to the doorsteps of the people.

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

        <div className='ps-alex-wrapper'>
          <div className='ps-alex-show'>
            <div className='ps-alex-case'>
              <div className='ps-left'>
                <div className='psl-pic'
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="600"
                >
                  <img src={kmmm} alt="" />
                </div>
              </div>


              <div className='ps-right'
                data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="600"
              >
                <div className='psr1'>
                  ALEX GYASI (HEAD PASTOR)
                </div>

                <div className='psr2'></div>

                <div className='psr3'>
                  <Link to="/"className="links linkAnima">
                  CONTACT <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* PASTOR ALEX end */}




        {/* INTERESTED */}

        <div className='interested-wrapper'>
          <div className='interested container'>
            <div className='line-1'></div>
            <div className='int'>
              If you 're interested in who leads Highway of Holiness Church, <br></br> learn more on our <span className='
              hoo '><Link to='/Leadership' className='hover_overlay'>Leadership page</Link></span>
            </div>
            <div className='line-1'></div>
          </div>
        </div>

        {/* INTERESTED END */}


        {/* BAPTISM & COMMUNION */}

        <div className='values-wrapper'>
          <div className='values'>
            <div className='values-showcase'>
              <div className='values-text-case container'>
                <div className='values-tt1 focus-in-contract-bck'>
                  BAPTISM & COMMUNION
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* BAPTISM & COMMUNION END */}


        {/* KINGDOM & HIGHWAY */}


        <div className='kg-hh-wrapper'>
          <div className='kg-hh container'>

            <div className='kg'
              data-aos="fade-right"
                
            >
              <div className='kg-1 focus-in-contract-bck'>
                KINGDOM ALLIANCE MENTORSHIP
              </div>

              <div className='kg-2'>
                Baptism is the public demonstration by an individual acknowledging that they have been saved by grace through their faith in Jesus.This is depicted by being dunked underwater symbolizing the death, burial and resurrection in Jesus <span className='hoo'>(Romans 4: 9 - 12, Romans 6: 3 - 4).</span> For information on infant and child dedication, look out
                for the next event on our <Link to='/Kids' className='hover_overlay hoo-1'><span className='hoo'>Kids page</span></Link>.
              </div>

              <div className='kg-3'>
                  <Link to="/"className="links linkAnima">
                  MORE INFO ABOUT KAM <span className="arrow"></span>
                </Link>
              </div>
            </div>

            <div className='hh'
              data-aos="fade-left"
                
            >
              <div className='hh-1a focus-in-contract-bck'>
                HIGHWAY HOUSING
              </div>

              <div className='hh-2a'>
                Communion is a symbolic meal, eaten with others, to remember Jesus and what He has accomplished
                for us on the cross <span className='hoo'>(Matthew 26: 26 - 28, Luke 22: 19 - 20)</span> .Bread and juice are available in the back of the auditorium.
              </div>

              <div className='hh-3'>
                <Link to="/"className="links linkAnima">
                  MORE INFO ABOUT HIGHWAY HOUSING <span className="arrow"></span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* KINGDOM & HIGHWAY END */}

      </div>
    </div>

  )
}

export default About_HOH