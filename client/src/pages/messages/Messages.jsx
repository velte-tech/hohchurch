import React from "react";
import "./Messages.css";
import { Link } from "react-router-dom";
import { CgSearchLoading } from "react-icons/cg";
import FilterMsg from "../../components/filter_message/FilterMsg";
import ReactPaginate from "react-paginate";
import msgImage from "../../assets/images/church2.jpg";




const Messages = () => {
  const handlePageClick = (event) => {
    console.log(event.selected);
  };

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
          <div className="filter">
            <FilterMsg>
              <select name="" id="">
                <option value="all serias">ALL SERIES</option>
                <option value="dance">Dance</option>
                <option value="dark force">Dark Force</option>
                <option value="easter 2021">Easter 2022</option>
                <option value="easter 2022">easter 2022</option>
                <option value="golbal warming">Global Warming</option>
                <option value="golbal warming">creation</option>
                <option value="golbal warming">Depression</option>
                <option value="golbal warming">Intimacy</option>
                <option value="golbal warming">Judgemnet</option>
                <option value="golbal warming">Joy</option>
                <option value="golbal warming">Love</option>
              </select>
            </FilterMsg>

            <FilterMsg>
              <select name="" id="">
                <option value="all serias">ALL CARTEGORIES</option>
                <option value="dance">Addiction</option>
                <option value="dark force">Anger</option>
                <option value="easter 2021">Bible</option>
                <option value="easter 2022">Celebraion</option>
                <option value="golbal warming">Church Planting</option>
                <option value="golbal warming">creation</option>
                <option value="golbal warming">Depression</option>
                <option value="golbal warming">Intimacy</option>
                <option value="golbal warming">Judgemnet</option>
                <option value="golbal warming">Joy</option>
                <option value="golbal warming">Love</option>
              </select>
            </FilterMsg>
            <FilterMsg>
              <select name="" id="">
                <option value="all serias">ALL DATE</option>
                <option value="dance">January 2023</option>
                <option value="dark force">December 2022</option>
                <option value="easter 2021">November 2022</option>
                <option value="easter 2022">October 2022</option>
                <option value="golbal warming">September 2022</option>
                <option value="golbal warming">August 2022</option>
                <option value="golbal warming">July 2022</option>
                <option value="golbal warming">June 2022</option>
                <option value="golbal warming">May 2022</option>
                <option value="golbal warming">April 2022</option>
                <option value="golbal warming">March 2022</option>
              </select>
            </FilterMsg>
            <FilterMsg>
              <select name="" id="">
                <option value="all serias">SPEAKER</option>
                <option value="dance">Addiction</option>
                <option value="dark force">Michael Angelo</option>
                <option value="easter 2021">James Bondo</option>
                <option value="easter 2022">Celebraion</option>
                <option value="golbal warming">Mary Sagblogha</option>
                <option value="golbal warming">Sally Bigmouth</option>
                <option value="golbal warming">Clamp Snaky</option>
              </select>
            </FilterMsg>
          </div>
            <div className="messages_main">
              <div className="message_card">
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
                <Link>
                  <img src={msgImage} alt="" />
                  <div className="bottom">
                    <p>OUR NEXT GUEST</p>
                    <p>Burn The Ships - Week 1</p>
                  </div>
                </Link>
              </div>

              <ReactPaginate
                breakLabel={"..."}
                nextLabel={"Next"}
                onPageChange={handlePageClick}
                // Displayed Page Range = {5}
                pageCount={25}
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
        </div>
      </section>
    </div>
  );
};

export default Messages;
