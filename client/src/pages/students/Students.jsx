import React from 'react'
import './Students.css'
import stuu22 from "../../assets/images/stuu22.jpg";
import nxtt from "../../assets/images/nxtt.jpg";
import { Link } from 'react-router-dom'
import AOS from "aos";
import { useEffect, useState } from 'react';
import Students_groups from '../../components/students_groups/Students_groups';


const Students = () => {


  // animation
  useEffect(() => {
    AOS.init({
        duration: 500,
        // offet: 1000,
      },
      []
    );
  });

  return (
    <div id='students-wrapper'>
      <div className='students-case'>

        {/* showcase */}
        <div className='min-group-showcase-1'>
          <div className='min-group-case-1'>
            <div className='min-group-txt'>
              <h1 className='focus-in-contract-bck'>
                STUDENTS
              </h1>
              <h2 className='focus-in-contract-bck'>
                MIDDLE SCHOOL & HIGH SCHOOL
              </h2>
            </div>
          </div>
        </div>
        {/* showcase end */}

        {/* students section 2  */}

        
        <div className='stusec2-wrapper'>
          <div className='stusec2-case'>
            <div className='stusec2'>
              <div className='stu-left'>
                <div className='stu-pic'>
                  <img
                  src={stuu22} alt=""
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                />
                </div>

                <div className='stu-shp'
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="620"
                >
                </div>
              </div>

              <div className='stu-right'
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
              >
                <div className='stu-txt1'>
                  FLATIRONS STUDENTS
                </div>

                <div className='stu-txt2'>
                  Every student deserves to have friends and a place where they can belong and connect with others.And Flatirons Students exists to do just that.
                </div>

                <div className='stu-txt3'>
                  Flatirons Students, worship on Sunday’ s at 11 AM and meet on Wednesday nights throughout the school year.Once a month we have an all - student rally in Lafayette.All other Wednesdays students meet in groups at your their campus.
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* students section 2 end */}



        {/* two info buttons  */}

        <Students_groups />

        {/* two info buttons end */}

    

        {/* next gen  */}

        <div className='nxtgen-wrapper'>
          <div className='nxtgen-case'>
            <div className='nxtgen'>
              <div className='nxtgen-left'
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
              >
                <div className='nxt-l1'>
                  NEXTGEN MINISTRIES
                </div>
                <div className='nxt-l2'>
                  From cradle to college, we want to come alongside you to help you grow in a relationship with Christ.NEXTGEN Ministries include Kids, Students, College, and Parents Ministry.
                </div>
                <div className='nxt-l3'>
                  <button className='btn'>SERVE</button>
                </div>
                <div className='nxt-l4'>
                  <button className='btn'>RESOURCES</button>
                </div>
              </div>

              <div className='nxtgen-right'>
                <div className='nxt-pic'
                  data-aos="fade-leftt"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="600"
                >
                  <img
                  src={nxtt} alt=""/>
                </div>

                <div className='nxt-shp'
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="610"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* next gen end */}


        {/* newslettr  */}

        <div className='kid-news-wrapper'>
          <div className='kid-news-txt focus-in-contract-bck'>
            Parent Newsletter Sign - Up
          </div>
        </div>

        {/* newslettr end */}


        
      </div>
    </div>
  )
}

export default Students