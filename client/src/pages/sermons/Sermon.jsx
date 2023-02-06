import React from "react";
import "./sermons.css";
import Slide from "../../components/msgSlider/Slider";
// import { useLoaderData, useParams } from "react-router-dom";

export default function Sermon() {
  // const { id } = useParams();
  // const sermon = useLoaderData();

  return (
    <div>
      <section id="sermon_video">
        <div className="video_wrapper">
          <iframe
            id="utube_video"
            width="760"
            height="415"
            src="https://www.youtube.com/embed/BWDPWx6DNqM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section id="sermon_text">
        <div className="sermon_text_wrapper">
          <h2>THE MOUNTAIN OF EDUCATION</h2>
        </div>
      </section>
      <Slide />
      {/* sideData={slideData.filter((slideData) => slideData.names != "Jack Ryne")} */}
    </div>
  );
}

//load sermon details
// export const SermonDetailLoader = async ({ params }) => {
//   const { id } = params;
//   const res = await fetch("" + id);

//   return res.json();
// };
