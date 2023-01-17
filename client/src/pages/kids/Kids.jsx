import React from 'react'
import './Kids.css'
import { Link } from 'react-router-dom'
// import kdd1 from "../../assets/images/kidd1.png";
// import kdd2 from "../../assets/images/kidd2.png";
// import kdd3 from "../../assets/images/kidd3.png";


const Kids = () => {
  return (
    <div id='min-group-wrapper'>
      <div className='min-group'>

        {/* showcase */}
        <div className='min-group-showcase'>
          <div className='min-group-case'>
            <div className='min-group-txt'>
              <h1 className='focus-in-contract-bck'>
                KIDS MINISTRY
              </h1>
              <h2 className='focus-in-contract-bck'>
                BIRTH - FIFTH GRADE
              </h2>
            </div>
          </div>
        </div>
        {/* showcase end */}



        {/* kids cards section */}



        <div className='kids-cards-wrapper'>
          <div className='kids-cards-case'>

            {/* card */}

            <div className='kids-cards-show'>

              <div className='kids-cards'>
                
              </div>

            </div>

            {/* cardend  */}

          </div>
        </div>



        {/* kids cards section end */}

      </div>
    </div>
  )
}

export default Kids