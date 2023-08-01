import React from "react";
import "./Messages.css";
import MsgPagination from "../../components/MsgPagination/MsgPagination";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

const Messages = () => {
  return (
    <div>
      <section id="message_showcase">
        <div className="showcase_wrapper text_center">
          <p>LATEST MESSAGE</p>
          <h2>THE MOUNTAIN OF EDUCATION</h2>
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
