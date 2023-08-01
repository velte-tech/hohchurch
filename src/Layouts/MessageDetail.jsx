import React from "react";
import { Outlet } from "react-router-dom";

function MessageDetail() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MessageDetail;
