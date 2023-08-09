import React, { useEffect, useState } from "react";
import "./Prayer.css";
import { MdAllInbox } from "react-icons/md";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import sanityClient from "../../client.js";
import PortableText from "@sanity/block-content-to-react";

const Prayer = () => {
  const [prayerData, setPrayerData] = useState();

  const serializers = {
    types: {
      block: (props) => {
        const { style } = props.node;
        //  normal: (children) => {
        console.log("children: ", props.children);
        if (style === "normal") {
          if (props.children.length === 1 && props.children[0] === "") {
            return <br />;
          }
          return <p>{props.children}</p>;
        }
      },
      // }
    },
  };

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "prayerPage"]`)
      .then((data) => {
        console.log("prayer: ", data[0]);
        setPrayerData(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="prayer-wrapper">
      <div className="prayer-case">
        <div className="prayer-show">
          <div className="pray-left">
            <div className="pl-txt focus-in-contract-bck">
              {prayerData?.title}
            </div>
          </div>

          <div className="pray-right">
            <div className="pr">
              <div className="pr-1">
                <div className="pr1-tt1 focus-in-contract-bck">
                  {prayerData?.prayerSectionTitle}
                </div>
                <div className="pr1-tt2">
                  <PortableText
                    blocks={prayerData?.prayerSectionText}
                    serializers={serializers}
                  />
                </div>
                {/* <div className="pr1-tt3">
                  When Life Hurts…Prayer Helps! If you need prayer, please
                  submit the prayer request form on this page.
                </div> */}
              </div>

              <div className="pr-2">
                <form
                  action="https://formsubmit.co/info@hohcentre.co.uk"
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
                      {/* <div className="sinn">
                        <MdAllInbox />
                      </div> */}
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
