
import React from 'react';
import './Mailto.css'
import { MdMailOutline } from "react-icons/md";

const EmailContactButton = ({ emailAddress, subject }) => {
  const handleClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    
    <div id='mailto-but'>
        <button onClick={handleClick} className='mall-btn'>
            Contact
            <div className="mailtoo">
                <div className="m-ico hover_overlay_2">
                    <MdMailOutline />
                </div>
            </div>
        </button>
    </div>
    
  );
};

export default EmailContactButton;
