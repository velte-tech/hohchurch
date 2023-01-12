import { React } from 'react'
import './About_HOH.css'
import { Link } from 'react-router-dom'




const About_HOH = () => {

  

  return (
    
    <div className='about-hoh-page'>
      <div className='hoh-wrapper'>

        {/* showcase */}
        <div className='hoh-showcase'>
          <div className='hoh-text-showcase'>
            <div className='hoh-text'>
              <h1>ABOUT HOH</h1>
          </div>
          </div>
        </div>
        {/* showcase end */}



        {/* our vision */}

        <div className='vision-wrapper container'>
          <div className='vision'>
            <div className='line-1'></div>
            <div className='tt-1'>
              OUR VISION
            </div>

            <div className='tt-2'>
              bring the awesome life of Christ to people in a lost and <br></br> broken world
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
                <div className='values-tt1'>
                  OUR VALUES
                </div>
                
                <div className='values-tt2 hover_overlay'>
                  ACTS 2: 42 - 47
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR VALUES END */}


        

        {/* BIBLICAL LIST */}

        <div className='biblical-wrapper'>
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
        </div>

        {/* BIBLICAL LIST END */}




        {/* INTERESTED */}

        <div className='interested-wrapper'>
          <div className='interested container'>
            <div className='line-1'></div>
            <div className='int'>
              If you 're interested in who leads Flatirons, <br></br> learn more on our <span className='
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
                <div className='values-tt1'>
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

            <div className='kg'>
              <div className='kg-1'>
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

            <div className='hh'>
              <div className='hh-1'>
                HIGHWAY HOUSING
              </div>

              <div className='hh-2'>
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