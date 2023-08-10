import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { CgSearchLoading } from "react-icons/cg";
import "./msgPagination.css";
// import { items } from "./Data";
import { urlFor } from "../../utils/urlFor";

function MsgPagination({ messageCards }) {
  //   const handlePageClick = (event) => {
  //     console.log(event.selected);
  //   };
  const itemsPerPage = 9;

  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState();
  const [pageCount, setPageCount] = useState(
    Math.ceil(items?.length / itemsPerPage)
  );

  const [itemOffset, setItemOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const endOffset = itemOffset + itemsPerPage;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    console.log("messageCards", messageCards);
    setItems(messageCards);
  }, [messageCards]);

  useEffect(() => {
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items?.length / itemsPerPage));
  }, [items, itemOffset, endOffset]);

  return (
    <>
      <div className="messages_main">
        <div className="search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
          />
          <span>Search</span>
          <CgSearchLoading className="search_icon" />
        </div>
        <div className="message_card">
          {items &&
            currentItems
              ?.filter((speaker) =>
                speaker?.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item) => (
                <Link to={`/message/${item._key}`} key={item._key}>
                  <img
                    src={urlFor(item?.image?.image)}
                    alt={item?.image?.image?.alt}
                  />
                  <div className="bottom">
                    <p>{item.title}</p>
                    <p>{item.subtitle}</p>
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
