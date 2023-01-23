import React from 'react';
import { Link } from "react-router-dom";
import "./give.css";

function Give() {
  return (
    <>
    <section id="give_login">
      <div className="login_wrapper container">
      <p>LOGIN</p>
      <form>
        <div className="give_input">
        <label for="username">USERNAME</label>
        <input id="username" type="text" required/>
        </div>
        <div className="give_input">
        <label for="password">PASSWORD</label>
        <input id='password' type="password" required/>
        </div>
        <div className="check">
        <input type="checkbox" id="checked" />
        <label for="checked"> Keep me logged in</label>
        </div>
        <div className="bottom_links">
          <input type="submit" name="LOGIN" className="btn"/>
          <Link className='btn_l'>REGISTER</Link>
          <Link className='btn_l'>FORGOT ACCOUNT</Link>
        </div>
      </form>
      </div>
    </section>
    </>
  )
}

export default Give