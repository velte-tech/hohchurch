import React from 'react';
import { Link } from "react-router-dom";
import logoImg from "../../assets/brand/logo.png";
import "./header.css";

function header() {
  return (
    <>
      <section id="give_header">
        <div className="header_wrapper container">
          <div className="left">
            <Link to="/give"><img src={logoImg} alt="" /></Link>
            
            </div>
          <div className="right">
            <Link to="/give" className='hover_overlay'>LOG-IN</Link>
            <Link to="/" className='hover_overlay'>BACK TO SITE</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default header