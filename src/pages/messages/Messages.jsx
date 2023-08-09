import React, { useEffect, useState } from "react";
import "./Messages.css";
import MsgPagination from "../../components/MsgPagination/MsgPagination";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import { urlFor } from "../../utils/urlFor";
import sanityClient from "../../client.js";

const Messages = () => {
  const [messagesData, setMessagesData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "messagePage"]{..., headerImage->, messagePageCards[] {..., image->} }`
      )
      .then((data) => {
        console.log("messages data", data[0]);
        setMessagesData(data[0]);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <section id="message_showcase">
        <div
          className="showcase_wrapper text_center"
          style={{
            backgroundImage: `url(${urlFor(messagesData?.headerImage?.image)})`,
          }}
        >
          <p>{messagesData?.title}</p>
          <h2>{messagesData?.subtitle}</h2>
        </div>
      </section>

      <section id="message_messages">
        <div className="messages_wrapper">
          {/* ======= FILTER ======= */}
          <div className="filter">{/* <FilterMsg /> */}</div>
          <MsgPagination />
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Messages;
