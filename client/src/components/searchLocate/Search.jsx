import React from 'react';
import "./search.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

function Search() {
  return (
    <div>
        <form className='form_container'>
            <p className='text_center'>GET DIRECTIONS</p>
          <div className='input_area'>
            <input type="text" required/>
            <span className='placeholder'>Type your address here</span>
          </div>
            <MdOutlineKeyboardArrowRight className='arrow_icon'/>
        </form>
    </div>
  )
}

export default Search