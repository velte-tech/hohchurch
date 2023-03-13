import React from 'react'
import './Students_groups.css'
import { useState, useEffect } from 'react';
// import weddd from "../../assets/images/weddd.jpg";
import weddd from "../../assets/images/YAB.jpg";
import { Link } from 'react-router-dom';
import worr from '../../assets/images/YAB2.jpg'
import AOS from "aos";

const Students_groups = () => {

    // animation
    useEffect(() => {
        AOS.init({
                duration: 500,
                // offet: 1000,
            },
            []
        );
    });

     // button info
     const [showFirst, setShowFirst] = useState(false);
     const [showSecond, setShowSecond] = useState(false);
     const [showThird, setShowThird] = useState(false);
     const [showFourth, setShowFourth] = useState(false);

  return (
      
        
          <div className='sch-form-wrapper'>
          <div className='sch-form-case'>

            <div className='info-butts'>
              
                    <button onClick={() => {
                      setShowFirst(!showFirst);
                      setShowSecond(false);
                      setShowThird(false);
                      setShowFourth(false);
                    }} className='my-btn' >
                        STUDENTS GROUPS
                    </button>
                    
                    <button onClick={() => {
                      setShowSecond(!showSecond);
                      setShowFirst(false);
                      setShowThird(false);
                      setShowFourth(false);
                    }} className='my-btn'>
                        STUDENTS MEETINGS
                    </button>
                    <button onClick={() => {
                      setShowThird(!showThird);
                      setShowFirst(false);
                      setShowSecond(false);
                      setShowFourth(false);
                    }} className='my-btn'>
                        SUNDAY STUDENTS SECTION
                    </button>
                    <button onClick={() => {
                      setShowFourth(!showFourth);
                      setShowFirst(false);
                      setShowSecond(false);
                      setShowThird(false);
                    }} className='my-btn'>
                        ALL UPCOMING EVENTS
                    </button>
                    
            </div>
                
            
            <div className='info-show'>
                
                {/* first sec */}

                {
                    showFirst && (
                        <div className='ms-wrapper'>
                            <div className='ms-case'>
                                <div className='ms'>
                                    <div className='tt-1'>
                                   We all need a crew of like-minded friends who are pursuing Jesus together to encourage us, pray for us, and be there for us. 
                                </div>
                                
                                <div className='tt-2'>
                                    One of the greatest gifts a church can give to parents is to help foster an environment for your teen to develop relationships with a consistent adult leader and network of friends where they share their faith and do life together. That’s why we love groups.
                                </div>
                                </div>
                              </div>
                              
                              {/* ms flex */}

                              <div className='wed-wrapper'>
                                <div className='wed-case'>
                                      <div className='wed-ngt'
                                        data-aos="fade-right"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                      >
                                        <div className='wed-left'>
                                            <div className='wed-1'></div>
                                            <div className='wed-2'>
                                                WEDNESDAY NIGHTS
                                            </div>
                                            <div className='wed-1'></div>
                                            <div className='wed-4'>
                                                6: 30 PM DOORS OPEN
                                            </div>
                                            <div className='wed-5'>
                                                7 PM - 8: 30 PM SMALL GROUPS
                                            </div>
                                        </div>
                                        
                                          <div className='wed-right'
                                            data-aos="fade-left"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-delay="600"
                                          >
                                            <img src={weddd} alt=""/>
                                        </div>
                                    </div>
                                </div>
                              </div>

                              {/* ms flex end */}
                        </div>
                    )
                }
                
                {/* first sec end */}
                
                
                {/* second sec */}
            
                {
                    showSecond && (
                        <div className='stural-wrapper'>
                            <div className='stural-case'>
                                <div className='stural-txt'>
                                    Group meetings happens on almost every month and is a chance for all to gather, hang out, eat, worship, and learn more about Jesus. Below are our upcoming meeting dates. Click on them to learn more.
                                </div>
                                
                                {/* stural flex */}
                                
                                  <div className='ral-wrapper'>
                                      <div className='ral-case'>
                                        <div className='ral'>
                                            <div className='ral-top'
                                                data-aos="fade-right"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-delay="600"
                                            >
                                                
                                                {/* RT  */}
                                                
                                                  <div className='rt'>
                                                    <div className='rt-1'>
                                                        <div className='rt-1-o'>
                                                            <div className='rt-1-tt'>
                                                                <Link className="linkAnima">
                                                                LEARN MORE <span className="arrow"></span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='rt-2'>
                                                        FEBRUARY MEETING
                                                    </div>
                                                    <div className='rt-3'>
                                                        Wednesday, February 01, 2023,
                                                    </div>
                                                    <div className='rt-4'>
                                                        PM - 8: 30 PM
                                                    </div>
                                                    <div className='rt-5'>
                                                        <button className='btn'>
                                                            REGISTER
                                                        </button>
                                                    </div>
                                                </div>
                                                  
                                                {/* RT END */}
                                                                                                   
                                                {/* RT  */}
                                                
                                                  <div className='rt'>
                                                    <div className='rt-1a'>
                                                        <div className='rt-1-o'>
                                                            <div className='rt-1-tt'>
                                                                <Link className="linkAnima">
                                                                LEARN MORE <span className="arrow"></span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='rt-2'>
                                                    FEBRUARY MEETING
                                                    </div>
                                                    <div className='rt-3'>
                                                        Wednesday, February 01, 2023,
                                                    </div>
                                                    <div className='rt-4'>
                                                        PM - 8: 30 PM
                                                    </div>
                                                    <div className='rt-5'>
                                                        <button className='btn'>
                                                            REGISTER
                                                        </button>
                                                    </div>
                                                </div>
                                                  
                                                {/* RT END */}
                                                                                                   
                                                {/* RT  */}
                                                
                                                  <div className='rt'>
                                                    <div className='rt-1b'>
                                                        <div className='rt-1-o'>
                                                            <div className='rt-1-tt'>
                                                                <Link className="linkAnima">
                                                                LEARN MORE <span className="arrow"></span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='rt-2'>
                                                        FEBRUARY MEETING
                                                    </div>
                                                    <div className='rt-3'>
                                                        Wednesday, February 01, 2023,
                                                    </div>
                                                    <div className='rt-4'>
                                                        PM - 8: 30 PM
                                                    </div>
                                                    <div className='rt-5'>
                                                        <button className='btn'>
                                                            REGISTER
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                                {/* RT END */}
                        
                                                
                                            </div>
                                            
                                            <div className='ral-bot'
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-delay="600"
                                            >
                                                <button className='btn'>
                                                    LIVESTREAM LINK
                                                </button>
                                            </div>
                                        </div>
                                      </div>
                                </div>
                                  
                                {/* stural flex end */}
                            </div>
                        </div>
                    )
                }  
                
                {/* second sec end */}
     
                
                {/* third sec */}
            
                {
                    showThird && (
                        <div className='ms-wrapper'>
                            <div className='ms-case'>
                                <div className='ms'>
                                    <div className='tt-1'>
                                   We encourage 6 th - 12 th graders to worship with the congregation in the auditorium on Sundays at the 11 AM service.
                                </div>
                                
                                <div className='tt-2'>
                                    Did you know one of the leading indicators of a teenager developing a lifelong faith is regularly participating in inter - generational worship before they leave home ? Contrary to popular student ministry belief, having students segmented away from the entire church body
                                    for most of their adolescent years does not help develop a lifelong faith.That’ s why we encourage all students to join our weekend services every week!
                                </div>
                                </div>
                              </div>
                              
                              {/* ms flex */}

                              <div className='wed-wrapper'>
                                <div className='wed-case'>
                                    <div className='wed-ngt'>
                                        <div className='wed-left'
                                                data-aos="fade-right"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-delay="600"
                                        >
                                            <div className='wed-1'></div>
                                            <div className='wed-2'>
                                                WORSHIP WITH US
                                            </div>
                                            <div className='wed-1'></div>
                                            <div className='wed-4'>
                                                Join us for the service
                                            </div>
                                            <div className='wed-5'>
                                                AUDITORIUM STUDENT SECTION <br></br>
                                                11 AM SERVICE
                                            </div>
                                        </div>
                                        
                                        <div className='wed-right'
                                                data-aos="fade-left"
                                                data-aos-anchor-placement="center-bottom"
                                                data-aos-delay="600"
                                        >
                                            <img src={worr} alt=""/>
                                        </div>
                                    </div>
                                </div>
                              </div>

                              {/* ms flex end */}
                        </div>
                    )
                }  
                
                {/* third sec end */}
     
                
                {/* fourth sec */}
            
                {
                    showFourth && (
                        <div className='holi-wrapper'>
                            <div className='holi-txt focus-in-contract-bck'>
                                HOLIDAY BREAK...NO GROUP DEC 21, DEC 28 OR JAN 4 TH
                              </div>
                              
                              <div className='holi-case'>
                                  
                                <div className='holi'>
                                    <div className='holi-left'
                                        data-aos="fade-right"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>18</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='holi-right'
                                        data-aos="fade-left"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>25</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                                 
                                <div className='holi'>
                                    <div className='holi-left'
                                    data-aos="fade-right"
                                    data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>18</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='holi-right'
                                        data-aos="fade-left"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>25</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                                 
                                <div className='holi'>
                                    <div className='holi-left'
                                        data-aos="fade-right"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>18</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='holi-right'
                                        data-aos="fade-left"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>25</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                                 
                                <div className='holi'>
                                    <div className='holi-left'
                                        data-aos="fade-right"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>18</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='holi-right'
                                        data-aos="fade-left"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>25</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                                 
                                <div className='holi'>
                                    <div className='holi-left'
                                        data-aos="fade-right"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>18</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='holi-right'
                                        data-aos="fade-left"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="600"
                                    >
                                        <div className='cale'>
                                            <div className='cale-1'>
                                                <div className='ct1'>25</div>
                                                <div className='ct2'>Jan</div>
                                            </div>
                                            <div className='cale-2'>
                                                <div className='cc1 hover_overlay'>
                                                    WEDNESDAY GROUP
                                                </div>
                                                <div className='cc2'>
                                                    7:00pm - 8:30pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                                
                              </div>
                        </div>
                    )
                }  
                
                {/* fourth sec end */}
    
            </div>

          </div>
        </div>

    
  )
}

export default Students_groups