import React from "react";
import { Outlet } from "react-router-dom";
// import {} from 'react-icons';

function SlideContent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default SlideContent;
