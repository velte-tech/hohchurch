import React from 'react'
import './Care_group.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Care_group = () => {

     // button info
     const [showFirst, setShowFirst] = useState(false);
     const [showSecond, setShowSecond] = useState(false);
     const [showThird, setShowThird] = useState(false);

  return (
    
    <div className='cg-wrapper'>
        <div className='cg-case'>
            <div className='cg-show'>
                
                <div className='info-butts'>
              
                    <button onClick={() => {
                      setShowFirst(!showFirst);
                      setShowSecond(false);
                      setShowThird(false);
             
                    }} className='my-btn1' >
                        Schedule An Appointment
                    </button>
                    
                    <button onClick={() => {
                      setShowSecond(!showSecond);
                      setShowFirst(false);
                      setShowThird(false);
 
                    }} className='my-btn1'>
                        Pstoral Care
                    </button>
                    
                    <button onClick={() => {
                      setShowThird(!showThird);
                      setShowFirst(false);
                      setShowSecond(false);
   
                    }} className='my-btn1'>
                        Shift
                    </button>
                    
            </div>
            
            
            
            {/* info show  */}
            
            
            <div className='info-showw'>
                
                {/* first sec */}

                {
                    showFirst && (
                        <div></div>
                    )
                }
                
                {/* first sec end */}
                
                
                {/* first sec */}

                {
                    showSecond && (
                        <div className='seco-case'>
                            <div className='seco-show'>
                                <div className='txt'>
                                    Pastoral Care is an appointment in person or over the phone where we provide individuals or couples with prayer, resources, and direction. You can schedule one by contacting us below, emailing <span className='ress hover_overlay'>care@flatironschurch.com</span> , or calling us at 303-664-5524 ext. 232.
                                </div>
                            </div>
                        </div>
                    )
                }
                
                {/* first sec end */}
                
                
                {/* first sec */}

                {
                    showThird && (
                        <div className='seco-case'>
                            <div className='seco-show'>
                                <div className='txt'>
                                    Shift is a 12 Step program offered every Friday night at our Lafayette campus.Journey with others confronting issues such as marriage and relationship, conflicts, loneliness, depression, emotional struggles, drug and alcohol dependence, sexual issues, physical and emotional abuse.More information is available below.
                                </div>
                            </div>
                        </div>
                    )
                }
                
                {/* first sec end */}
                
            </div>
            
            
            {/* info show end */}
                
            </div>
        </div>
    </div>
    
  )
}

export default Care_group