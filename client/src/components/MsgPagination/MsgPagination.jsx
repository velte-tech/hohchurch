import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { CgSearchLoading } from "react-icons/cg";
import "./msgPagination.css";
import { items } from "./Data";

function MsgPagination() {
  //   const handlePageClick = (event) => {
  //     console.log(event.selected);
  //   };

  const [itemOffset, setItemOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 9;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="messages_main">
        <div className="search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span>Search</span>
          <CgSearchLoading className="search_icon" />
        </div>
        <div className="message_card">
          {items &&
            currentItems
              .filter((speaker) =>
                speaker.names.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item) => (
                <Link to={`/message/${item.id}`} key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="bottom">
                    <p>{item.title}</p>
                    <p>{item.names}</p>
                  </div>
                </Link>
              ))}
          {/* <Items currentItems={currentItems} /> */}
        </div>

        <ReactPaginate
          breakLabel={"..."}
          nextLabel={"Next"}
          onPageChange={handlePageClick}
          // Displayed Page Range = {5}
          pageCount={pageCount}
          previousLabel={"Previous"}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
        />
      </div>
    </>
  );
}

export default MsgPagination;
