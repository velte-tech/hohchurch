import React from 'react';
import "./map.css";

function GoogleMap() {
  return (
    <>
     <div class="mapouter"><div class="gmap_canvas"><iframe width="1500px" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
    </>
  )
}

export default GoogleMap