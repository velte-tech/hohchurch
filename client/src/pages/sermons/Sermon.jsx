import React from "react";
import "./sermons.css";
import Slide from "../../components/msgSlider/slider";
import { useParams } from "react-router-dom";
import { slideData } from "../../components/msgSlider/data";

export default function Sermon() {
  const { id } = useParams();
  const item = slideData.find((item) => item.id === id);

  return (
    <div>
      <section id="sermon_video">
        <div className="video_wrapper">
          <iframe
            id="utube_video"
            width="760"
            height="415"
            src={item.utube}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <Slide />
    </div>
  );
}
