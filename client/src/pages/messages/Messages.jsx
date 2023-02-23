import React from "react";
import "./Messages.css";
import { CgSearchLoading } from "react-icons/cg";
// import FilterMsg from "../../components/filter_message/FilterMsg";
import MsgPagination from "../../components/MsgPagination/MsgPagination";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

const Messages = () => {
  return (
    <div>
      <section id="message_showcase">
        <div className="showcase_wrapper text_center">
          <p>LATEST MESSAGE</p>
          <h2>BURN THE SHIPS - WEEK 1</h2>
        </div>
      </section>

      <section id="message_messages">
        <div className="messages_wrapper">
          <div className="search">
            <input type="text" />
            <span>Search</span>
            <CgSearchLoading className="search_icon" />
          </div>

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
