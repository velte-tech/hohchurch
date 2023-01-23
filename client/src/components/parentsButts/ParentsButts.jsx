import React from 'react'
import './ParentsButts.css'
import { useState, useEffect } from 'react';
import weddd from "../../assets/images/weddd.jpg";
import { Link } from 'react-router-dom';
import AOS from "aos";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdAllInbox } from 'react-icons/md';
import PcheckBox from '../pcheckbox/PcheckBox';



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
        <div className='sch-form-case'>

            <div className='info-butts22'>
              
                <button onClick={() => {
                    setShowFirst(!showFirst);
                    setShowSecond(false);
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
                    setShowFirst(false);
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
                            
                            <div className='nl'>
                    
                                <div className='nl1'>
                                    <div className='ft-1'>CAMPUS</div>
                                    <div className='ft-2'></div>
                                </div>
                                
                                <select id="campp" name="campp">
                                    <option value="nott">Please Select</option>
                                    <option value="lafa">Lafayette Campus</option>
                                    <option value="aurora">Aurora Campus</option>
                                    <option value="denv">Denver Campus</option>
                                    <option value="west">West Campus</option>
                                    <option value="longm">Longmont Campus</option>
                                    <option value="online">Online Campus</option>
                                </select>

                            </div>
                            
                            
                            <PcheckBox />

                            <button className='btn'>SUBSCRIBE</button>
                            
                        </div>
                    )
                }
                
                {/* first sec end */}
                
                {/* second sec */}

                {
                    showFirst && (
                        <div className='pns-wrapper'>
                            <div className='pns-case'>
                                <div className='pns-show'>
                                    <div className='pns'></div>
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