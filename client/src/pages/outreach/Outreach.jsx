import React from "react";
import "./Outreach.css";
import { Link } from "react-router-dom";
// import spp1 from "../../assets/images/spp1.jpg";
// import spp2 from "../../assets/images/spp2.jpg";
// import spp3 from "../../assets/images/spp3.jpg";
// import { MdCheckBox } from 'react-icons/md';
import { GrMail } from "react-icons/gr";
import { AiTwotonePhone } from "react-icons/ai";
// import Box_check from '../../components/checkbox/Box_check';
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import CheckboxList from "../../components/checkbox/Box_check";
import logo from "../../assets/brand/hohlogo.png";

const Outreach = () => {
  return (
    <div className="out-page">
      <div className="out-wrapper">
        {/* showcase */}
        <div className="out-showcase">
          <div className="out-case">
            <div className="out-text">
              <h1 className="focus-in-contract-bck">OUTREACH</h1>
            </div>
          </div>
        </div>
        {/* showcase end */}




        {/* local outreach */}

        <div className="local-wrapper">
          <div className="local-case">
            {/* <div className='local-1'>
              <span className='ll-1'> LOCAL </span>
              <span className='ll-2'> GLOBAL </span>
            </div> */}

            <div className="local-2">
              Local Community Missions
            </div>
            <div className="local-3">
              Jesus talked a lot about His love for those who are poor, hurting,
              broken and forgotten. Each of our campuses strives to partner with
              local organizations serving their local community.
            </div>
            <div className="local-4">Select a local partner to learn more.</div>
            <div className="local-5"></div>
          </div>
        </div>

        {/* local outreach end */}

        {/* outreach grops sopnsors */}

        <div className="out-spo-wrapper">
          <div className="out-spo-case">
            {/* mother flex */}
            <div className="out-sop-show">
              {/* three flex */}
              <div className="out-sop">
                <div className="sop-1">
                  <img src={logo} alt="" />
                </div>
                {/* <div className='sop-2 hover_overlay_2'>
                  180 Ministries | 3333 S Bannock <br></br>
                  Street Suite 700 <br></br>
                  Englewood, CO 80110 <br></br>
                </div> */}
                {/* <div className='sop-3'>
                  Campus Affiliation
                </div> */}

                {/* <div className='sop-4'>
                  Denver
                </div> */}

                <div className="sop-4">
                  Day Centre
                </div>

                <div className="sop-5">
                  <Link className="linkAnima">
                    {" "}
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="sop-6"></div>
              </div>
              {/* three flex end */}

              {/* three flex */}
              <div className="out-sop">
                <div className="sop-1">
                  <img src={logo} alt="" />
                </div>
                {/* <div className='sop-2 hover_overlay_2'>
                  Collegiate Crossings | 1230 Banner <br></br>
                  Circle <br></br>
                  Erie, CO 80516 <br></br>

                </div> */}
                {/* <div className='sop-3'>
                  Campus Affiliation
                </div> */}

                {/* <div className='sop-4'>
                  Denver
                </div> */}
                <div className="sop-4">
                  Highway Youth Club
                </div>

                <div className="sop-5">
                  <Link className="linkAnima">
                    {" "}
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="sop-6"></div>
              </div>
              {/* three flex end */}

              {/* three flex */}
              <div className="out-sop">
                <div className="sop-1">
                  <img src={logo} alt="" />
                </div>
                {/* <div className='sop-2 hover_overlay_2'>
                  Echo | 27640 Hwy 74 <br></br>
                  Evergreen, CO 80437
                </div> */}
                {/* <div className='sop-3'>
                  Campus Affiliation
                </div> */}

                {/* <div className='sop-4'>
                  West
                </div>  */}
                <div className="sop-4">
                  21st Century Education 
                </div>
                <div className="sop-5">
                  <Link className="linkAnima">
                    {" "}
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="sop-6"></div>
              </div>
              {/* three flex end */}

              {/* three flex */}
              <div className="out-sop">
                <div className="sop-1">
                  <img src={logo} alt="" />
                </div>
                {/* <div className='sop-2 hover_overlay_2'>
                  Echo | 27640 Hwy 74 <br></br>
                  Evergreen, CO 80437
                </div> */}
                {/* <div className='sop-3'>
                  Campus Affiliation
                </div> */}

                {/* <div className='sop-4'>
                  West
                </div>  */}
                <div className="sop-4">
                  Shift 
                </div>
                <div className="sop-5">
                  <Link className="linkAnima">
                    {" "}
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="sop-6"></div>
              </div>
              {/* three flex end */}

            </div>
            {/* mother flex end */}
          </div>
        </div>

        {/* outreach grops sopnsors end */}



        {/* global */}

        <div className="local-wrapper">
          <div className="local-case">
            {/* <div className='local-1'>
              <span className='ll-1'> LOCAL </span>
              <span className='ll-2'> GLOBAL </span>
            </div> */}

            <div className="local-2">Global Mission</div>
            <div className="local-3">
              Jesus talked a lot about His love for those who are poor, hurting,
              broken and forgotten. Each of our campuses strives to partner with
              global organizations serving the world at large.
            </div>
            <div className="local-4">Select a global partner to learn more.</div>
            <div className="local-5"></div>
          </div>
        </div>

        {/* local outreach end */}

        {/* outreach grops sopnsors */}

        <div className="out-spo-wrapper">
          <div className="out-spo-case">
            {/* mother flex */}
            <div className="out-sop-show">
              {/* three flex */}
              <div className="out-sop">
                <div className="sop-1">
                  <img src={logo} alt="" />
                </div>
                {/* <div className='sop-2 hover_overlay_2'>
                  180 Ministries | 3333 S Bannock <br></br>
                  Street Suite 700 <br></br>
                  Englewood, CO 80110 <br></br>
                </div> */}
                {/* <div className='sop-3'>
                  Campus Affiliation
                </div> */}

                {/* <div className='sop-4'>
                  Denver
                </div> */}

                <div className="sop-4">KLM</div>

                <div className="sop-5">
                  <Link className="linkAnima">
                    {" "}
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="sop-6"></div>
              </div>
              {/* three flex end */}

              {/* three flex */}
              <div className="out-sop">
                <div className="sop-1">
                  <img src={logo} alt="" />
                </div>
                {/* <div className='sop-2 hover_overlay_2'>
                  Collegiate Crossings | 1230 Banner <br></br>
                  Circle <br></br>
                  Erie, CO 80516 <br></br>

                </div> */}
                {/* <div className='sop-3'>
                  Campus Affiliation
                </div> */}

                {/* <div className='sop-4'>
                  Denver
                </div> */}
                <div className="sop-4">
                  HOH PAKISTAN
                </div>

                <div className="sop-5">
                  <Link className="linkAnima">
                    {" "}
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="sop-6"></div>
              </div>
              {/* three flex end */}

              {/* three flex */}
              <div className="out-sop">
                <div className="sop-1">
                  <img src={logo} alt="" />
                </div>
                {/* <div className='sop-2 hover_overlay_2'>
                  Echo | 27640 Hwy 74 <br></br>
                  Evergreen, CO 80437
                </div> */}
                {/* <div className='sop-3'>
                  Campus Affiliation
                </div> */}

                {/* <div className='sop-4'>
                  West
                </div>  */}
                <div className="sop-4">
                  Kingdom Culture Alliance (KCA)
                </div>
                <div className="sop-5">
                  <Link className="linkAnima">
                    {" "}
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="sop-6"></div>
              </div>
              {/* three flex end */}


              {/* three flex */}
              <div className="out-sop">
                <div className="sop-1">
                  <img src={logo} alt="" />
                </div>
                {/* <div className='sop-2 hover_overlay_2'>
                  Echo | 27640 Hwy 74 <br></br>
                  Evergreen, CO 80437
                </div> */}
                {/* <div className='sop-3'>
                  Campus Affiliation
                </div> */}

                {/* <div className='sop-4'>
                  West
                </div>  */}
                <div className="sop-4">
                  Affiliated Churches / Mission Support
                </div>
                <div className="sop-5">
                  <Link className="linkAnima">
                    {" "}
                    MORE INFO <span className="arrow"></span>{" "}
                  </Link>
                </div>
                <div className="sop-6"></div>
              </div>
              {/* three flex end */}
            </div>
            {/* mother flex end */}
          </div>
        </div>

        {/* outreach grops sopnsors end */}



        {/* want to get connected */}
        <div className="to-get">
          Get Connected
        </div>
        {/* want to get connected end */}

        {/* connect forms */}

        <div className="form-wrapper">
          <div className="form-case">
            <form className="form-connect">
              <div className="fmcase">

                <div className="fm-1">
                  <div className="i-name">
                    FULL NAME <span className="star-form">*</span>
                  </div>
                  <input className="i-form"></input>
                </div>

                <div className="fm-1">
                  <div className="i-name">
                  ADDRESS <span className="star-form">*</span>
                  </div>
                  <input className="i-form"></input>
                </div>
              </div>

              {/* SECOND FLEXX */}

              <div className="email-phone-wrapper">
                <div className="email-phone">
                  
                  <div className="em-1">
                    <div className="i-name">
                      EMAIL <span className="star-form">*</span>
                    </div>
                    <div className="iii">
                      <span className="heya">
                        <GrMail />
                      </span>
                      <input className="i-form ooo"></input>
                    </div>
                  </div>

                  <div className="em-2">
                    <div className="i-name">PHONE</div>
                    <div className="iii">
                      <span className="heya">
                        <AiTwotonePhone />
                      </span>
                      <input className="i-form ooo-2"></input>
                    </div>
                  </div>

                  {/* <CheckboxList /> */}
                  

                  <div className='em-3'>
                    <CheckboxList />
                  </div>
                  
                  {/* <div className='em-4'>
                    <Link className='btn'>SUBMIT</Link>
                  </div> */}
                </div>
              </div>

              <div className="em-4">

                <button className="btn">SUBMIT</button>

                {/* <Link  className="btn">
                  GIVE
                </Link> */}

                <a className="btn" target="_blank"
                  href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=L5USDDJ9JLKZJ"
                  rel="noreferrer"
                >DONATE</a>

              </div>

              {/* SECOND FLEXX END */}
            </form>
          </div>
        </div>

        {/* connect forms end */}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Outreach;
