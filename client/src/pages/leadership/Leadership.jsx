import {React} from 'react'
import { Link } from 'react-router-dom';
import './Leadership.css'
// Images
import l1 from "../../assets/images/l1.webp";
import naruto from "../../assets/images/naruto.jpg";

import { MdMailOutline } from 'react-icons/md';
import { useEffect } from "react";
import AOS from "aos";




const Leadership = () => {

   useEffect(() => {
     AOS.init({
         duration: 500,
         once: false,
         mirror: true,
       },
       []
     );
   });

  return (

    <div className='leadership-page'>
      <div className='leadership-wrapper'>

        {/* shwowcse */}
        <div className='leadership-showcase'>
          <div className='leadership-show'>
            <div className='leadership-text'>
              <h1>LEADERSHIP</h1>
            </div>
          </div>
        </div>
        {/* shwowcse end */}


        {/* leaders */}

        <div className='leaders-wrapper'>
          <div className='leaders-main'>
            <div className='leaders-case'>
          
              <div className='lead-case-1'>

                {/* lead show-1  */}

                <div className='leaders-show'>

                  <div className='leader-1 one-1'>

                    <div className='lead-pic'>
                      <img src={l1} alt="" />
                    </div>

                    <div className='lead-name'>
                      JIM BURGEN 
                    </div>

                    <div className='lead-title'>
                      <span className='past'>Lead Pastor</span>

                      <Link to='/Messages' className='hover_overlay'>
                        <MdMailOutline />
                      </Link>
                    </div>
                    
                  </div>
                  
                  <div className='leader-1 one-1'>

                    <div className='lead-pic'>
                      <img src={l1} alt="" />
                    </div>

                    <div className='lead-name'>
                      JIM BURGEN 
                    </div>

                    <div className='lead-title'>
                      <span className='past'>Lead Pastor</span>

                      <Link to='/Messages' className='hover_overlay'>
                        <MdMailOutline />
                      </Link>
                    </div>
                    
                  </div>

                </div>

                {/* lead show end-1 */}
                
                {/* lead show-2  */}

                <div className='leaders-show'>

                  <div className='leader-1'>

                    <div className='lead-pic'>
                      <img src={l1} alt="" />
                    </div>

                    <div className='lead-name'>
                      JIM BURGEN 
                    </div>

                    <div className='lead-title'>
                      <span className='past'>Lead Pastor</span>

                      <Link to='/Messages' className='hover_overlay'>
                        <MdMailOutline />
                      </Link>
                    </div>
                    
                  </div>
                  
                  <div className='leader-1'>

                    <div className='lead-pic'>
                      <img src={l1} alt="" />
                    </div>

                    <div className='lead-name'>
                      JIM BURGEN 
                    </div>

                    <div className='lead-title'>
                      <span className='past'>Lead Pastor</span>

                      <Link to='/Messages' className='hover_overlay'>
                        <MdMailOutline />
                      </Link>
                    </div>
                    
                  </div>

                </div>

                {/* lead show end-2 */}

              </div>
              
              <div className='lead-case-2'>

                {/* lead show-2  */}

                <div className='leaders-show-2'>

                  <div className='leader-1 one-1 one-2'>

                    <div className='lead-pic'>
                      <img src={l1} alt="" />
                    </div>

                    <div className='lead-name'>
                      JIM BURGEN 
                    </div>

                    <div className='lead-title'>
                      <span className='past'>Lead Pastor</span>

                      <Link to='/Messages' className='hover_overlay'>
                        <MdMailOutline />
                      </Link>
                    </div>
                    
                  </div>
                  
                  <div className='leader-1'>

                    <div className='lead-pic'>
                      <img src={l1} alt="" />
                    </div>

                    <div className='lead-name'>
                      JIM BURGEN
                    </div>

                    <div className='lead-title'>
                      <span className='past'>Lead Pastor</span>

                      <Link to='/Messages' className='hover_overlay'>
                        <MdMailOutline />
                      </Link>
                    </div>
                    
                  </div>

                </div>

                {/* lead show end-2 */}

              </div>  

            </div>
          </div>
        </div>

        {/* leaders end */}


        {/* our leaders */}

        <div className='values-wrapper'>
          <div className='values'>
            <div className='values-showcase'>
              <div className='values-text-case    container'>
                <div className='values-tt1'>
                  OUR ELDERS
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* our leaders end */}



        {/* ALONE */}

        <div className='alone-wrapper'>
          <div className='alone'>
            <div className='alone-1'
                data-aos="fade-right"
                
            >

              <div className='lone-1'>
                WE DON'T DO THIS <br></br> ALONE
              </div>
              <div className='lone-2'>
                Just like a board of directors helps a company thrive, our Elders helps our staff make the best decisions
                for Flatirons.It also goes deeper than that.According to the Bible, an Elder protects, oversees, leads, and cares
                for the church.They make sure we do what we say we 're going to do and live out <span className='hoo'>our values</span>.
              </div>
              <div className='lone-3'>
                Contact our elders at
              </div>
              <div className='lone-4'>
                <Link to='/' className='hover_overlay'>
                  elders @flatironschurch.com
                </Link>
              </div>
              
            </div>

            <div className='alone-2'>

              <div className='pic'
                data-aos="fade-left"
                
              >
                <img src={naruto} alt="" />
              </div>

              <div className='shape-2'
                data-aos="fade-left"
                data-aos-delay="400"
                
              >
              </div>

            </div>
          </div>
        </div>

        {/* ALONE END */}

      </div>
    </div>

  )
}

export default Leadership