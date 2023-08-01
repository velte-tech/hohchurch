import React from 'react'
import './Young_groups.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import { GrMail } from 'react-icons/gr';
import { AiTwotonePhone } from 'react-icons/ai';
import Box_check from '../../components/checkbox/Box_check';



const Young_groups = () => {

     // button info
     const [showFirst, setShowFirst] = useState(false);
     const [showSecond, setShowSecond] = useState(false);
     const [showThird, setShowThird] = useState(false);
     const [showFourth, setShowFourth] = useState(false);

  return (
    <div className='yg-wrapper'>
        <div className='yg-case'>
            <div className='yg-show'>
                
                <div className='info-butts'>
              
                    <button onClick={() => {
                      setShowFirst(!showFirst);
                      setShowSecond(false);
                      setShowThird(false);
                      setShowFourth(false);
                    }} className='my-btn' >
                        GET CONNECTED
                    </button>
                    
                    <button onClick={() => {
                      setShowSecond(!showSecond);
                      setShowFirst(false);
                      setShowThird(false);
                      setShowFourth(false);
                    }} className='my-btn'>
                        GROUPS
                    </button>
                    <button onClick={() => {
                      setShowThird(!showThird);
                      setShowFirst(false);
                      setShowSecond(false);
                      setShowFourth(false);
                    }} className='my-btn'>
                        GATHERINGS
                    </button>
                    <button onClick={() => {
                      setShowFourth(!showFourth);
                      setShowFirst(false);
                      setShowSecond(false);
                      setShowThird(false);
                    }} className='my-btn'>
                        EVENTS
                    </button>
                    
            </div>
            
            
            
            
            
            
            {/* info show  */}
            
            
            
            
            
            {/* show first  */}
            
            
            {
                showFirst && (
                        
                    <div className='gta-wrapper'>
                        <div className='gta-case'>
                            
                            <div className='gt-1'>
                                GET CONNECTED
                            </div>
                            
                            <div className='gt-2'>
                                
                                 {/* connect forms */}

                                <div className='form-wrapper'>
                                <div className='form-case'>
                                    
                                    <form className='form-connect'>

                                    <div className='fmcase'>

                                        <div className='fm-1'>
                                        <div className='i-name'>
                                            FIRST NAME <span className='star-form'>*</span>
                                        </div>
                                        <input className='i-form'></input>
                                        </div>
                                        
                                        <div className='fm-1'>
                                        <div className='i-name'>
                                            LAST NAME <span className='star-form'>*</span>
                                        </div>
                                        <input className='i-form'></input>
                                        </div>

                                    </div>

                                    {/* SECOND FLEXX */}

                                    
                                    <div className='email-phone-wrapper'>
                                        <div className='email-phone'>
                                        <div className='em-1'>
                                            <div className='i-name'>
                                            EMAIL <span className='star-form'>*</span>
                                            </div>
                                            <div className='iii'>
                                            <span className='heya'><GrMail /></span>
                                            <input className='i-form ooo'></input>
                                            </div> 
                                        </div>

                                        <div className='em-2'>
                                            <div className='i-name'>
                                            PHONE
                                            </div>
                                            <div className='iii'>
                                            <span className='heya'><AiTwotonePhone /></span>
                                            <input className='i-form ooo-2'></input>
                                            </div> 
                                        </div>

                                        <div className='em-3'>
                                            {/* <MdCheckBox></MdCheckBox>
                                            SMS */}

                                        <Box_check />
                                        </div>
                                        
                                        <div className='em-4'>
                                            {/* <Link className='btn'>SUBMIT</Link> */}
                                            
                                             <div className='fm-1'>
                                        <div className='i-name btd'>
                                            BIRTHDAY <span className='star-form'>*</span>
                                        </div>
                                        <input type='date' className='i-form mddt'></input>
                                        </div>
                                            
                                        </div>
                                        </div>
                                    </div>


                                    {/* SECOND FLEXX END */}

                                    </form>
                                    
                                    
                                    
                                </div>
                                </div>

                                {/* connect forms end */}
                                
                                <button className='btn'>NEXT</button>
                                
                            </div>
                            
                        </div>
                    </div>
                        
                )
            }
            
            
            {/* show first end */}
            
            
            
            
            
            
            {/* info show end */}
                
            </div>
        </div>
    </div>
  )
}

export default Young_groups