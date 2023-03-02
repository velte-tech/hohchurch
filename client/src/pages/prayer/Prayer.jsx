import React from "react";
import "./Prayer.css";
// import AOS from "aos";
// import { useState, useEffect } from 'react';
import { MdAllInbox } from "react-icons/md";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

const Prayer = () => {
  // animation
  // useEffect(() => {
  //   AOS.init({
  //       duration: 500,
  //       // offet: 1000,
  //     },
  //     []
  //   );
  // });

  return (
    <div id="prayer-wrapper">
      <div className="prayer-case">
        <div className="prayer-show">
          <div className="pray-left">
            <div className="pl-txt focus-in-contract-bck">PRAYER</div>
          </div>

          <div className="pray-right">
            <div className="pr">
              <div className="pr-1">
                <div className="pr1-tt1 focus-in-contract-bck">
                  WHEN LIFE HURTS, PRAYER HELPS!
                </div>
                <div className="pr1-tt2">
                  You are not alone in your situation! The Highway Of Holiness
                  Church Prayer Team exists to call on God for those in need.
                  Please share your requests with us so that we can stand
                  alongside you in prayer. If you need some additional support,
                  let us know so that we can help you get connected with others
                  at ighway Of Holiness Church that understand your struggle and
                  can offer hope. Leave your contact info in the request if you
                  need us to contact you.
                </div>
                <div className="pr1-tt3">
                  When Life Hurts…Prayer Helps! If you need prayer, please
                  submit the prayer request form on this page.
                </div>
              </div>

              <div className="pr-2">
                <form
                  action="https://formsubmit.co/88fcc1b06d43556476d88696654f2534"
                  method="POST"
                  className="pf"
                >
                  <p className="pf-1">PRAYER REQUEST FORM</p>

                  <div className="nl">
                    <div className="nl1">
                      <div className="ft-1">FULL NAME</div>
                      <div className="ft-2"></div>
                    </div>
                    <div className="nl2">
                      <input required name="Full_name"></input>
                    </div>
                  </div>

                  <div className="nl">
                    <div className="nl1">
                      <div className="ft-1">EMAIL</div>
                      <div className="ft-2"></div>
                    </div>
                    <div className="nl2">
                      <div className="sinn">
                        <MdAllInbox />
                      </div>
                      <input required name="Email" className="zinn"></input>
                    </div>
                  </div>

                  <div className="nl mess-ara">
                    <div className="nl1">
                      <div className="ft-1">REQUEST</div>
                      <div className="ft-2"></div>
                    </div>
                    <div className="nl2">
                      <textarea
                        required
                        name="Prayer_request"
                        placeholder="Please pray that...(up to 500 characters)"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pr-3">
                    <button className="btn">SEND REQUEST</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Prayer;
