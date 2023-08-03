import React from "react";
import "./map.css";

function GoogleMap() {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="map"
            width="1500px"
            height="500"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed/v1/place?q=Unit+8,+2-8+Fountayne+Rd,+London+N15+4QL,+United+Kingdom&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            // src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default GoogleMap;
