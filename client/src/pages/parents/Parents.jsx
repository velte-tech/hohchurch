import React from 'react'
import './Parents.css'
import { Link } from 'react-router-dom'
import AOS from "aos";
import { useEffect } from 'react';
import prayy from "../../assets/images/prayy.jpg";
import stuu from "../../assets/images/stuu12.jpg";
import pasem from "../../assets/images/pasem.webp";
import dday from "../../assets/images/dday.webp";
import spot1 from "../../assets/images/spot1.webp";
import spot2 from "../../assets/images/spot2.webp";
import spot3 from "../../assets/images/spot3.webp";
import ParentSlide from '../../components/parentSlide/ParentSlide';
import ya1 from "../../assets/images/ya1.jpg";
import ya2 from "../../assets/images/ya2.jpg";
import comingSoon from "../../assets/images/comingSoon.jpg";
import ParentsButts from '../../components/parentsButts/ParentsButts';



const Parents = () => {

   // animation
   useEffect(() => {
     AOS.init({
         duration: 500,
         // offet: 1000,
       },
       []
     );
   });

  return (
    <div id='parents-wrapper'>
      <div className='parents-case'>
        <div className='parents.show'>

           {/* showcase */}
        <div className='min-group-showcase-parent'>
          <div className='min-group-case-1'>
            <div className='min-group-txt'>
              <h1 className='focus-in-contract-bck'>
                MENS & WOMEN FELLOWSHIP
              </h1>
            
            </div>
          </div>
        </div>
        {/* showcase end */}
        
        
        {/* parent gen  */}
        
        
          <div className='pg-case'>
            <div className='pg-show'>
              <div className='pg'>

                <div className='pg-left'
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <div className='pgl'>
                    <div className='pgl-1'>
                      MEN FELLOWSHIP
                    </div>

                    <div className='pgl-2'>
                      From cradle to college, we want to come alongside you to help you grow in a relationship with Christ.NEXTGEN Ministries include Kids, Students, College, and Parents Ministry.
                    </div>

                    <div className='pgl-2 df'>
                      Next Meeting: Wednesday at 6: 30 PM 
                     
                    </div>
                    
                    <div className='pgl-3'>

                      <div className='nxt-l3'>

                        <Link className='btn' to='/Groups'>
                          JOIN US
                        </Link>

                      </div>
                      {/* <div className='nxt-l4'>
                        <Link className='btn' to='/Ministries'>
                          RESOURCES
                        </Link>
                      </div> */}

                    </div>
                  </div>
                </div>
                
                <div className='pg-right'>
                  <div className='pgr-pic'
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                  >
                    <img
                  src={prayy} alt=""/>
                  </div>
                  <div className='pgr-shp'
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="620"
                  >

                  </div>
                </div>

              </div>
            </div>
        </div>
        
          
          {/* parent gen end */}



          {/* RESET  */}

          
          <div id='reset-case'>
            <div className='reset-show'>
              <div className='reset'>
                <div className='rll'>
                  <div className='rpic'
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >
                    <img src={stuu} alt=""/>
                  </div>
                  <div className='rshp'
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="620"
                  ></div>
                </div>

                <div className='rrr'
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                >
                  <div className='rrr-1'>
                    WOMEN FELLOWSHIP
                  </div>

                  <div className='rrr-2'>
                    God chose YOU to raise your kid(s). That's a big job, so let's take a minute to ReSet. Take a breath, follow Jesus & lead with our Online Parenting Summit starting August 6.
                  </div>

                  <div className='rrr-2 df'>
                    Next Meeting: Wednesday at 6: 30 PM
                  </div>
                  
                  <div className='rrr-3'>
                    <Link to='/Groups' className='btn'>
                      JOIN US
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* RESET END */}


          {/* PARENT SEMINAR  */}

          <div className='pasem-wrapper'>
            <div className='pasem-case'>
              <div className='pasem-show'>
                <div className='pasem-pic'>
                  <img src={pasem} alt=""/>
                </div>
                <div className='pasem-txt focus-in-contract-bck'>
                  GET INVOLVED
                </div>
              </div>
            </div>
          </div>

          {/* PARENT SEMINAR END */}



          {/* LETTER SIGN UP PLUG */}

          <ParentsButts />

          {/* LETTER SIGN UP PLUG END */}


          {/* PARENTS MINISTRIES  */}

          
          <div className='ngp-wrapper'>
            <div className='ngp-case'>
              <div className='ngp-show'>
                <div className='ngp-txt'>
                  OLD-TIMERS FELLOWSHIP
                </div>

                <div className='ngp-plug'>
                  {/* PLUG */}
                </div>
              </div>
            </div>
          </div>

          {/* PARENTS MINISTRIES END */}


          {/* card  */}

          <div id='pacard-wrapper'>

            <div className="card_wrapper">

                  <div className="cardp">
                    <img src={ya1} alt="" />
                    <div className="text">
                      <p>
                        DISTRICT TAKEOVER @ NINJA NATION JANUARY 31ST
                      </p>
                      <p>January 31st Takeover at Ninja Nation</p>
                      <Link className="linkAnima">
                        Learn More <span className="arrow"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="cardp">
                    <img src={comingSoon} alt="" />
                    <div className="text">
                      <p>
                        KIDS
                      </p>
                      <p>Birth-Fifth Grade</p>
                      
                      <Link className="linkAnima" to='/Kids'>
                        Learn More <span className="arrow"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="cardp">
                    <img src={ya2} alt="" />
                    <div className="text">
                      <p>
                        STUDENTS
                      </p>
                      <p>Middle School & High School</p>
                      <Link className="linkAnima" to='/Students'>
                        Learn More <span className="arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>

          </div>

          {/* card end */}


          {/* podcast  */}

          <div id='ppcast-wrapper'>
            <div className='ppcast-case'>
              <div className='ppcast-show'>
                <div className='ppcast'>
                  <div className='ppleft'
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >
                    <div className='pppic'>
                      <img src={dday} alt=""/>
                    </div>
                  </div>

                  <div className='ppright'
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >
                    <div className='ppr-1'>
                      AT THE END OF THE DAY
                    </div>
                    <div className='ppr-2'>
                      PODCAST
                    </div>
                    <div className='ppr-3'>

                      <div className='sre hover_overlay'>
                        <img src={spot1} alt=""/>
                      </div>
                      <div className='sre hover_overlay'>
                        <img src={spot2} alt=""/>
                      </div>
                      <div className='sre hover_overlay'>
                        <img src={spot3} alt=""/>
                      </div>
                      
                    </div>
                    <div className='ppr-4'>
                      Sharing stories, resources, and hope to parents, because at the end of the day, you 're not alone.
                    </div>
                    <div className='ppr-5'>
                      <Link className="linkAnima">
                        LISTEN NOW <span className="arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* podcast end */}

      
         
          
          {/* PARENT SLIDE PLUG  */}

          <ParentSlide />

          {/* PARENT SLIDE PLUG END */}


          {/* RECOMMENDATION  */}

          
          <div className='recom-wrapper'>
            <div className='recom-show'>
              <div className='recom-case'>
                 <div className='recom'>
                  <div className='recom1'>
                    <div className='recom1-txt focus-in-contract-bck'>
                      RECOMMENDATIONS:
                    </div>
                  </div>

                  <div className='recom2'
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >

                    <div className='recom2-case'>
                      <div className='recom2-11'>
                        <Link className='btn'>
                          PARENT CUE APP
                        </Link>
                      </div>
                      <div className='recom2-22'>
                        Build a spiritual foundation for your kids with bible story videos created for kids preschool to preteen and daily devotionals for Kindergarten – 12th grade.
                      </div>
                    </div>
                    
                    <div className='recom2-case'>
                      <div className='recom2-11'>
                        <Link className='btn'>
                          SUICIDE PREVENTION HOTLINE
                        </Link>
                      </div>
                      <div className='recom2-22'>
                        The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals in the United States.
                      </div>
                    </div>
                    
                    <div className='recom2-case'>
                      <div className='recom2-11'>
                        <Link className='btn'>
                          AXES RESOURCES
                        </Link>
                      </div>
                      <div className='recom2-22'>
                        A massive library of culturally - relevant guides, video, and audio
                        for parents.
                      </div>
                    </div>
                    
                  </div>

                  <div className='recom3'
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="600"
                  >
                    <div className='recom3-txt'>
                      Our ultimate resource is the Bible as God’s Word and authority in our life. Any resource listed on this page does not equate to a full endorsement of the author’s work. God chose you to be part of your family and we want to partner with you through each stage. The selected resources provide truth-based, relevant, and useful materials to assist you along the way.
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>


          {/* RECOMMENDATION END */}



          {/* COUNSELLING  */}


          <div className='counsel-wrapper'>
            <div className='counsel-case'>
              <div className='counsel-show'>
                <div className='counsel1'>
                  NEXTGEN COUNSELING REIMBURSEMENT
                </div>

                <div className='counsel2'>
                  This reimbursement program aids parents in getting the mental health support they need to best walk alongside their kids.
                </div>
                
                <div className='counsel3'>
                  <Link className="linkAnima">
                    LEARN MORE <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>    
          </div>

          {/* COUNSELLING END */}
          


        </div>
      </div>
    </div>
  )
}

export default Parents