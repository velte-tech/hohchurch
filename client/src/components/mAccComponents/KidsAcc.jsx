import React, {useState} from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./KidsAcc.css";
function KidsAcc(props) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="item">
            <div onClick={()=> setIsOpen(!isOpen)} className="title">
              <p>{props.label}</p>
              <span className={isOpen ? "rotate_icon" : ""}>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
           
            <div className= {isOpen ? "content animated" : "content"}>
              {props.children}
            </div>
             
          </div>
  )
}

export default KidsAcc