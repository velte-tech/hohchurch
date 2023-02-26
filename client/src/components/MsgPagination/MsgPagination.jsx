import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./msgPagination.css";
import { items } from "./Data";

export function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Link to={`/message/${item.id}`} key={item.id}>
            <img src={item.image} alt="" />
            <div className="bottom">
              <p>{item.title}</p>
              <p>{item.names}</p>
            </div>
          </Link>
        ))}
    </>
  );
}

function MsgPagination() {
  //   const handlePageClick = (event) => {
  //     console.log(event.selected);
  //   };

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

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
        <div className="message_card">
          <Items currentItems={currentItems} />
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
