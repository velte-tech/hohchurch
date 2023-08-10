import React, { useEffect, useState } from "react";
// import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import "./outreact_detail.css";
import sanityClient from "../../client.js";
import PortableText from "@sanity/block-content-to-react";
// import serializers from "@sanity/block-content-to-react";
import { serializers } from "../../utils/contentSerializers";

function OutreachDetail() {
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "outreachDetail"]`)
      .then((data) => {
        setDetailData(data[0]);
        console.log("outreach detail: ", data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section id="outreach_house" className="outreach_section">
        <h2 className="outreach_head">{detailData?.localCommunityTitle}</h2>
        <div className="wrapper container">
          <div id="higway_house" className="outreach_house_main">
            <h2>{detailData?.highwayHouseTitle}</h2>
            <PortableText
              blocks={detailData?.highwayHouseText}
              serializers={serializers}
            />
          </div>
        </div>
      </section>
      <section id="youth_club" className="outreach_section">
        <div className="wrapper container">
          <h2>{detailData?.highwayYouthClubTitle}</h2>
          <PortableText
            blocks={detailData?.highwayYouthClubText}
            serializers={serializers}
          />
          <h2></h2>
        </div>
      </section>

      <section id="centryeducation" className="outreach_section">
        <div className="wrapper container">
          <h2>{detailData?.the21CenturyTitle}</h2>
          <PortableText
            blocks={detailData?.the21CenturyText}
            serializers={serializers}
          />
          {/* <ul>
            <li>
              Developing cutting edge skills for Christian Children for the 21st
              century.
            </li>
            <li>
              Train up the child the way they should go - Proverbs 22:6; Hebrews
              12:11.
            </li>
          </ul> */}
        </div>
      </section>
      <section id="outreach_detail_shift" className="outreach_section">
        <div className="wrapper container">
          <h2>{detailData?.shiftTitle}</h2>
          <PortableText
            blocks={detailData?.shiftText}
            serializers={serializers}
          />
          {/* <p>Connect with us on our social platforms</p>
          <p>
            Twitter -{" "}
            <a
              className="outreach_detail_social"
              href="https://twitter.com/shift_hy"
              target="_blank"
              rel="noopener noreferrer"
            >
              @shift_hy
            </a>
          </p>
          <p>
            IG -{" "}
            <a
              className="outreach_detail_social"
              href="https://www.instagram.com/shift.hy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @shift.hy
            </a>
          </p> */}
        </div>
      </section>

      <section id="outreach_detail_klm" className="outreach_section">
        <h2 className="outreach_head">{detailData?.globalMissionsTitle}</h2>
        <div className="wrapper container">
          <h2>{detailData?.klmTitle}</h2>
          <PortableText
            blocks={detailData?.klmText}
            serializers={serializers}
          />
        </div>
      </section>

      <section id="outreach_pakistan" className="outreach_section">
        <div className="wrapper container">
          <h2>{detailData?.hohPakistanTitle}</h2>
          <PortableText
            blocks={detailData?.hohPakistanText}
            serializers={serializers}
          />
        </div>
      </section>

      <section id="outreach_alliance" className="outreach_section">
        <div className="wrapper container">
          <h2>{detailData?.kcaTitle}</h2>
          <PortableText
            blocks={detailData?.kcaText}
            serializers={serializers}
          />
        </div>
      </section>

      <section id="outreach_affiliated" className="outreach_section">
        <div className="wrapper container">
          <h2>{detailData?.affiliatesTitle}</h2>
          <PortableText
            blocks={detailData?.affiliatesText}
            serializers={serializers}
          />
        </div>
      </section>
      {/* <ScrollToTop /> */}
    </>
  );
}

export default OutreachDetail;
