import React from 'react'
import { Link } from 'react-router-dom';
import churchImg from "../../assets/images/church.jpg";

function SingleCard() {
  return (
    <>
     <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={churchImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">GROUP LEADER AND APPLICATION</p>
                <p>Find our service time and direction to our locations</p>
                <Link className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
    </>
  )
}

export default SingleCard