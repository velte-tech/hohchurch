import React from 'react'
import './Kids_campus.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Kids_campus = () => {

     // button info
     const [showFirst, setShowFirst] = useState(false);
     const [showSecond, setShowSecond] = useState(false);
     const [showThird, setShowThird] = useState(false);
     const [showFourth, setShowFourth] = useState(false);
     const [showFifth, setShowFifth] = useState(false);

  return (
    <div id='kcomp-wrapper'>
        <div className='kcomp-case'>
            <div className='kcomp-show'>
                
                {/* info at top  */}
                
                <div className='kdd-it'>
                    For More Information and Events
                </div>
                  
                <div className='kdd-it1'>
                    Select Your Campus
                </div>
                
                {/* info at top end */}
                
                <div className='kcomp-lst'>
                    
                     <select id="kdd" name="campp">
                       
                        <option value="lafa">
                            Lafayette Campus
                        </option>
                        
                        <option value="aurora">
                            Aurora Campus
                        </option>
                        
                        <option value="denv">
                            Denver Campus
                        </option>
                        
                        <option value="west">
                            West Campus
                        </option>
                        
                        <option value="longm">
                            Longmont Campus
                        </option>
                        
                        <option value="online">
                            Online Campus
                        </option>
                        
                      </select>
                                        
                </div>
                
                
               
                
            </div>
        </div>
    </div>
  )
}

export default Kids_campus