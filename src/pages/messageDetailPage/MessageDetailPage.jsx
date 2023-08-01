import React from "react";
import { useParams } from "react-router-dom";
import "./message_detail_page.css";
import { items } from "../../components/MsgPagination/Data";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

function MessageDetailPage() {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);
  return (
    <div>
      {/* {item.title} */}
      <section id="message_video">
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
      <ScrollToTop />
    </div>
  );
}

export default MessageDetailPage;
