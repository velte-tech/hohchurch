import React, { useEffect, useState } from "react";
import "./sermons.css";
import Slide from "../../components/msgSlider/slider";
import { useParams } from "react-router-dom";
import { slideData } from "../../components/msgSlider/data";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import sanityClient from "../../client";

export default function Sermon() {
  const { id } = useParams();
  // const item = slideData.find((item) => item.id === id);
  const [item, setItem] = useState({});

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "slider" && _id == "${id}"]{..., image->}`)
      .then((data) => {
        console.log("slider: ", data);
        setItem(data[0]);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div>
      <section id="sermon_video">
        <div className="video_wrapper">
          <iframe
            id="utube_video"
            width="760"
            height="415"
            src={item.link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <Slide />
      <ScrollToTop />
    </div>
  );
}