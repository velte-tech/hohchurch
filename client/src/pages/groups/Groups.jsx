import React, { useState } from 'react'
import './Groups.css'
import mappp from "../../assets/images/Figmap.png";
import { Link } from 'react-router-dom'; 
// import AOS from "aos";
import { ImSearch } from 'react-icons/im';


const Groups = () => {

  // const [selects, setSelects] = useState();  

  // const [isActive, setIsActive] = useState(false)

  // const [selected, setSelected] = useState('');

  

  return (
    

     <div className='group-page'>
      <div className='gropup-wrapper'>

        <div className='group-showcase'>
          <div className='group-case'>

            {/* showcase text */}
            <div className='group-text'>

              <h1 className='focus-in-contract-bck'>
                GROUPS FINDER
              </h1>

              <h2 className='focus-in-contract-bck'>
                TIMES ARE IN MOUNTAIN TIMEZONE
              </h2>

            </div>
            {/* showcase text */}

          </div>
        </div>

         {/* shape and map */}

            
            <div className='map-shape-wrapper'>
              <div className='map-shape'>
                <div className='mp-sp'>
                  <div className='mp slide-in-right' 
                    // data-aos="fade-left"
                    // data-aos-delay="400"
                  >
                    <img src={mappp} alt="" />
                  </div>

                  <div className='sp'>
                    <div className='map-shape silde-in-right'
                      // data-aos="fade-left"
                      // data-aos-delay="500"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>


        {/* shape and map end */}
        

        {/* search bar */}

        
        <div className='sh-wrapper'>
          <div className='sh-case'>

            <div className='sh'>
              <div className='sh-1'>
                <input type='text' className='sh-tt' placeholder='SEARCH'></input>
              </div>

              <div className='sh-2'>
                <Link><ImSearch /></Link>
              </div>
            </div>
            
          </div>
        </div>

        {/* search bar end */}









        {/* group heading */}

        {/* <div className='group-head-wrapper'>
          <div className='group-head-case'>

            <div className='group-head'>

              <div className='g-head'>
                <div className='gh-1'>
                  GROUP TYPE
                </div>
                <div className='gh-2'>
                  <ImSearch />
                </div>
              </div>
              
              <div className='g-head'>
                <div className='gh-1'>
                  CONTENT
                </div>
                <div className='gh-2'>
                  <ImSearch />
                </div>
              </div>
              
              <div className='g-head'>
                <div className='gh-1'>
                  DAY OF WEEK
                </div>
                <div className='gh-2'>
                  <ImSearch />
                </div>
              </div>
              
              <div className='g-head'>
                <div className='gh-1'>
                  ZIP CODE
                </div>
                <div className='gh-2'>
                  <ImSearch />
                </div>
              </div>
              
              <div className='g-head2'>
                <div className='gh-3'>
                  <ImSearch />
                </div>
                <div className='gh-4'>
                  Children
                </div>
              </div>
              
              <div className='g-head2'>
                <div className='gh-3'>
                  <ImSearch />
                </div>
                <div className='gh-4'>
                  Online
                </div>
              </div>

          </div>

          </div>
        </div> */}

        {/* group heading end */}



        {/* second group list */}


        {/* <div className='group-dropdown-wrapper'>

        
          <div className='group-dropdown'>
            <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>
              <span>GROUP TYPE</span>
              <span><MdOutlineKeyboardArrowDown /></span>
            </div>

            {isActive && (
              <div className='dropdown-content'>

                <div className='dropdown-item'>
                  Couples
                </div>
                <div className='dropdown-item'>
                  Couples
                </div>
                <div className='dropdown-item'>
                  Couples
                </div>

            </div>
            )}

          </div>
      
          <div className='group-dropdown'>
            <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>
              <span>GROUP TYPE</span>
              <span><MdOutlineKeyboardArrowDown /></span>
            </div>

            {isActive && (
              <div className='dropdown-content'>

                <div className='dropdown-item'>
                  Couples
                </div>
                <div className='dropdown-item'>
                  Couples
                </div>
                <div className='dropdown-item'>
                  Couples
                </div>

            </div>
            )}

          </div>
        
          <div className='group-dropdown'>
            <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>
              <span>GROUP TYPE</span>
              <span><MdOutlineKeyboardArrowDown /></span>
            </div>

            {isActive && (
              <div className='dropdown-content'>

                <div className='dropdown-item'>
                  Couples
                </div>
                <div className='dropdown-item'>
                  Couples
                </div>
                <div className='dropdown-item'>
                  Couples
                </div>

            </div>
            )}

          </div>
        

        </div> */}


       
        {/* second group list end */}




        {/* individual church groups */}


        <div className='church-group-wrapper'>
          <div className='church-group-case'>

            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}
            
            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}
            
            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}
            
            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}
            
            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}
            
            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}
            
            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}
            
            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}
            
            {/* group flex */}
            <div className='church-group'>

              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>
              
              <div className='ch-gr'>
                <div className='ch-gr-1'>
                  PATTI PALER 'S  <br></br>
                  WOMEN 'S GROUP
                </div>
                <div className='ch-gr-2'>
                  Wednesday at 6: 30 PM <br></br>
                  Content: WeekendMessage
                </div>
                <div className='ch-gr-3 hover_overlay'>
                  3751 W 136 th Ave Unit I1 <br></br>
                  Broomfield, CO 80023 - 8143
                </div>
                <div className='ch-gr-4'>
                  <Link className='linkAnima'>MORE INFO <span className="arrow"></span> </Link>
                </div>
                <div className='ch-gr-5'></div>
              </div>

            </div>
            {/* group flex end */}


          </div>
        </div>



        {/* individual church groups end */}

      </div>
    </div>
    
  )
}



export default Groups