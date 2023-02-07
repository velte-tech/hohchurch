import {React, useEffect} from 'react'
import './Ministries.css'
import bapp from "../../assets/images/cx5.jpeg";
import bapp1 from "../../assets/images/kmm.jpeg";
import bapp2 from "../../assets/images/ya22.jpeg";
import bapp3 from "../../assets/images/gpo1.jpeg";
import bapp4 from "../../assets/images/gpo2.jpeg";
import bapp5 from "../../assets/images/gpo3.jpeg";
import AOS from "aos";
import { Link } from 'react-router-dom';



const Ministries = () => {

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

    <div id='ministry-page'>
      <div className='ministry-wrapper'>

        {/* showcase */}
        <div className='ministry-case'>
          <div className='ministry-text'>
            <h1 className='focus-in-contract-bck'>MINISTRY</h1>
          </div>
        </div>
        {/* showcase end */}

      </div>

      {/* where */}


        <div className='where-wrap'>
          <div className='where-show'>
            <div className='where-case'>
            <div className='where-11'
              data-aos="fade-right"
            >

              <span className='w-11-1 focus-in-contract-bck'>
                SERVE WITH US!
              </span>

              <br></br>

              Highway of Holiness is a volunteer - driven community and we need you to make things work!Sign up to serve with one of our teams below.
              </div>

              <div className='where-22'>
                <div className='w-shape'
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-anchor-placement="center-bottom"
                ></div>
                <div className='w-pic'
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-anchor-placement="center-bottom"
                >
                   {/* <img src={bapp} alt="" /> */}
                </div>
              <div className='w-tt focus-in-contract-bck'>
                WHERE WOULD YOU <br></br>
                LIKE TO SERVE ?
              </div>
                
              </div>
            </div>
          </div>
        </div>



      {/* where end */}
      



      {/* min-sec */}


      
      <div className='min-sec-wrapper'>

        <div className='min-sec-case'>

          {/* flrxxxxxxxx */}

          <div className='min-sec'>

            <div className='minsec'>
              <div className='min-1'>
                 <img src={bapp} alt="" />
              </div>
              <div className='min-2'>STUDENTS</div>
              <div className='min-3'>
                {/* <Link className='linkAnima'>SIGN UP<span className="arrow"></span>
                </Link> */}
                <Link to='/Students' className='linkAnima'>MORE INFO<span className="arrow"></span>
                </Link>
              </div>
              <div className='min-4'></div>
            </div>
            
            <div className='minsec'>
              <div className='min-1'>
                 <img src={bapp3} alt="" />
              </div>
              <div className='min-2'>YOUNG ADULTS</div>
              <div className='min-3'>
                {/* <Link className='linkAnima'>SIGN UP<span className="arrow"></span> </Link> */}
                <Link to='/Young_adults' className='linkAnima'>MORE INFO<span className="arrow"></span> </Link>
              </div>
              <div className='min-4'></div>
            </div>

          </div>

          {/* flexxxxxxxxxxxx */}

          {/* flrxxxxxxxx */}

          <div className='min-sec'>

            <div className='minsec'>
              <div className='min-1'>
                 <img src={bapp2} alt="" />
              </div>
              <div className='min-2'>PRAYER</div>
              <div className='min-3'>
                {/* <Link className='linkAnima'>SIGN UP<span className="arrow"></span>
                </Link> */}
                <Link to='/Prayer' className='linkAnima'>MORE INFO<span className="arrow"></span>
                </Link>
              </div>
              <div className='min-4'></div>
            </div>
            
            <div className='minsec'>
              <div className='min-1'>
                 <img src={bapp3} alt="" />
              </div>
              <div className='min-2'>PARENTS</div>
              <div className='min-3'>
                {/* <Link className='linkAnima'>SIGN UP<span className="arrow"></span> </Link> */}
                <Link to='/Parents' className='linkAnima'>MORE INFO<span className="arrow"></span> </Link>
              </div>
              <div className='min-4'></div>
            </div>

          </div>

          {/* flexxxxxxxxxxxx */}

          {/* flrxxxxxxxx */}

          <div className='min-sec'>

            <div className='minsec'>
              <div className='min-1'>
                 <img src={bapp4} alt="" />
              </div>
              <div className='min-2'>KIDS MINISTRY</div>
              <div className='min-3'>
                {/* <Link className='linkAnima'>SIGN UP<span className="arrow"></span>
                </Link> */}
                <Link to='/Kids' className='linkAnima'>MORE INFO<span className="arrow"></span>
                </Link>
              </div>
              <div className='min-4'></div>
            </div>
            
            <div className='minsec'>
              <div className='min-1'>
                 <img src={bapp5} alt="" />
              </div>
              <div className='min-2'>CARE</div>
              <div className='min-3'>
                {/* <Link className='linkAnima'>SIGN UP<span className="arrow"></span> </Link> */}
                <Link to='/Care' className='linkAnima'>MORE INFO<span className="arrow"></span> </Link>
              </div>
              <div className='min-4'></div>
            </div>

          </div>

          {/* flexxxxxxxxxxxx */}

        </div>

      </div>



      {/* min-sec end */}

    </div>

  )

}

export default Ministries