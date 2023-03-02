import React from 'react'
import './ParentsButts.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdAllInbox } from 'react-icons/md';
// import PcheckBox from '../pcheckbox/PcheckBox';
import Ministries from '../../pages/ministries/Ministries';



const ParentsButts = () => {

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
    
    // const [clicked, setClicked] = useState(false);

  return (
    
    <div className='sch-form-wrapper22'>
        <div className='sch-form-case22'>

            <div className='info-butts22'>
              
                <button onClick={() => {
                    setShowFirst(!showFirst);
                    // setShowSecond(false);
                    }} className='my-btn2' >
                        <span className='btxt'>
                            Parent Newsletter SignUp
                        </span>
                        <span className='bti '>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                </button>
                    
                <button onClick={() => {
                    setShowSecond(!showSecond);
                    // setShowFirst(false);
                    }} className='my-btn2'>
                        <span className='btxt'>Volunteer</span>
                        <span className='bti'>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                </button>
                    
            </div>
            
             <div className='info-show2'>
                
                {/* first sec */}

                {
                    showFirst && (
                        
                        <form id='parent-form'
                        action = "https://formsubmit.co/info@hohcentre.co.uk"
                        method = "POST"
                        >
                            
                            <div className='pns-wrapper'>
                            
                            <div className='nl'>
                                <div className='nl1'>
                                    <div className='ft-1'>FIRST NAME</div>
                                    <div className='ft-2'></div>
                                </div>
                                <div className='nl2'>
                                    <input></input>
                                </div>
                            </div>

                            <div className='nl'>
                                <div className='nl1'>
                                    <div className='ft-1'>LAST NAME</div>
                                    <div className='ft-2'></div>
                                </div>
                                <div className='nl2'>
                                    <input></input>
                                </div>
                            </div>
                    
                            <div className='nl'>
                                <div className='nl1'>
                                    <div className='ft-1'>EMAIL</div>
                                    <div className='ft-2'></div>
                                </div>
                                <div className='nl2'>
                                    <div className='sinn'><MdAllInbox /></div>
                                    <input className='zinn'></input>
                                </div>
                            </div>
                            
                            
                            {/* <PcheckBox /> */}

                            <button className='btn'>SUBMIT</button>
                            
                        </div>
                            
                        </form>
                        
                    )
                }
                
                {/* first sec end */}
                
                {/* second sec */}

                {
                    showSecond && (
                        <div className='pns-wrapper2'>
                            <div className='pns-case'>
                                <div className='pns-show'>
                                    <div className='pns'>
                                        <div className='pns1'>
                                            We can't do this without you. We have volunteer opportunities in all of our Ministries
                                        </div>
                                        
                                        <div className='pns2'>
                                            <Link to='/Kids' className="linkAnima">
                                            KIDS MINISTRY <span className="arrow"></span>
                                            </Link>
                                        </div>
                                        
                                          
                                        <div className='pns2'>
                                            <Link to='/young_adults' className="linkAnima">
                                            YOUTH MINISTRY <span className="arrow"></span>
                                            </Link>
                                        </div>
                                        
                                          
                                        <div className='pns2'>
                                            <Link to='/outreach' className="linkAnima">
                                            OUTREACH <span className="arrow"></span>
                                            </Link>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                
                {/* second sec end */}
                
                </div>
            
        </div>
    </div>
      
  )
}

export default ParentsButts