import React from 'react'
import './Kids_Detail.css'
import kdtpic from "../../assets/images/kdtpic.jpg";


const Kids_Detail = () => {
  return (
    <div className='kdet-wrapper'>
      <div className='kdet-case'>

        <div className='kd-showcase'>
          <div className='kdt-case'>
            <div className='kdt-show'>
              <img src={kdtpic} alt=""/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Kids_Detail