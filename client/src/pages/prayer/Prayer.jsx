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
                <form className="pf">
                  <p className="pf-1">PRAYER REQUEST FORM</p>

                  <div className="nl">
                    <div className="nl1">
                      <div className="ft-1">FIRST NAME</div>
                      <div className="ft-2"></div>
                    </div>
                    <div className="nl2">
                      <input></input>
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
                      <input className="zinn"></input>
                    </div>
                  </div>

                  <div className="nl">
                    <div className="nl1">
                      <div className="ft-1">CAMPUS</div>
                      <div className="ft-2"></div>
                    </div>

                    <select id="campp" name="campp">
                      <option value="nott">Please Select</option>
                      <option value="lafa">Lafayette Campus</option>
                      <option value="aurora">Aurora Campus</option>
                      <option value="denv">Denver Campus</option>
                      <option value="west">West Campus</option>
                      <option value="longm">Longmont Campus</option>
                      <option value="online">Online Campus</option>
                    </select>
                  </div>

                  <div className="nl mess-ara">
                    <div className="nl1">
                      <div className="ft-1">REQUEST</div>
                      <div className="ft-2"></div>
                    </div>
                    <div className="nl2">
                      <textarea placeholder="Please pray that...(up to 500 characters)"></textarea>
                    </div>
                  </div>
                </form>
              </div>

              <div className="pr-3">
                <button className="btn">SAVE REQUEST</button>
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
