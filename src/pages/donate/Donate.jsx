import React, { useEffect, useState } from "react";
import "../../styles.css";
import "./Donate.css";
import { bankCards, donateSticker, supportImg } from "../../assets/images";
import { donateContent } from "../../constants/data";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";
import sanityClient from "../../client.js";

const Donate = () => {
  const [donateData, setDonateData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "donate"]`)
      .then((data) => {
        console.log("donate data", data[0]);
        setDonateData(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Support a cause */}
      <section className="supportSection pt-6">
        <div className="container pt-4">
          <div className="row justify-content-center">
            <div className="col-12 ">
              <div className="d-md-flex align-items-end pb-3 d-none">
                <h1 className="supportText">Support</h1>&nbsp;&nbsp;&nbsp;
                <img
                  loading="lazy"
                  src={supportImg}
                  className="img-fluid supportImg"
                />
                <h1 className="supportText">a cause</h1>
              </div>
              <div className="d-block d-md-none">
                <h1 className="supportText text-center">Support a cause</h1>
              </div>
              <div className="px-lg-5 supportMargin">
                <p>{donateData?.supportText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* payment methods */}
      <section className="paymentMethodList">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="px-lg-5 supportMargin">
                <h2 style={{ marginBottom: "25px", marginTop: "20px" }}>
                  HOH accepts the following
                </h2>

                <ul className="methodList">
                  {donateData?.paymentMethodList.map((method, index) => (
                    <li key={"payM#" + index}>
                      <span className="ml-3 ml-lg-0">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">{/* <DonatePayment /> */}</div>
        </div>
      </section>

      {/* Payment process */}
      <section className="paymentProcess my-3">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center justify-content-center">
              <h2 className="mb-4">Make Donation</h2>
            </div>
          </div>

          {/* methods */}
          <div className="row mt-5 pt-lg-3 pt-5 card-group">
            {/* bank card */}
            <div className="col-lg-6 col-12">
              <div className="card h-100 bank position-relative">
                <img
                  loading="lazy"
                  src={donateContent?.methods[0].icon}
                  className="donateIcon"
                />

                {/* header */}
                <div className="card-header text-center">
                  <h2 className="card-title pt-5">
                    {donateData?.methods[0].title}
                  </h2>
                  <p className="card-text px-lg-3">
                    {donateData?.methods[0].description}
                  </p>
                </div>

                {/* body */}
                <div className="card-body pb-2">
                  <ul>
                    {donateData?.methods[0].steps.map((step, index) => (
                      <li key={"step#" + index}>
                        <span className="ml-3">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* cheque card */}
            <div className="col-lg-6 col-12">
              <div className="card h-100 bank position-relative">
                <img
                  loading="lazy"
                  src={donateContent?.methods[1].icon}
                  className="donateIcon"
                />

                {/* header */}
                <div className="card-header text-center">
                  <h2 className="card-title pt-5 cheque">
                    {donateData?.methods[1].title}
                  </h2>
                  <p className="card-text px-lg-3">
                    {donateData?.methods[1].description}
                  </p>
                </div>

                {/* body */}
                <div className="card-body pb-2">
                  <ul>
                    {donateData?.methods[1].steps.map((step, index) => (
                      <li key={"step#" + index}>
                        <span className="ml-3">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* email money card */}
            <div className=" col-12">
              <div className="card h-100 bank position-relative">
                <img
                  loading="lazy"
                  src={donateContent?.methods[2].icon}
                  className="donateIcon"
                />

                {/* header */}
                <div className="card-header text-center">
                  <h2 className="card-title pt-5 emailMoney">
                    {donateData?.methods[2].title}{" "}
                    <p>(with your PayPal account or your Credit/Debit Card)</p>
                  </h2>
                  <p className="card-text px-lg-3">
                    {donateData?.methods[2].description}
                  </p>
                </div>

                <div className="d-flex justify-content-center">
                  <a
                    className="btn btn-paypal"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=L5USDDJ9JLKZJ"
                  >
                    DONATE NOW
                  </a>
                </div>

                {/* body */}
                <div className="card-body pb-2">
                  <ul className="ul-paypal">
                    {donateData?.methods[2].steps.map((step, index) => (
                      <li key={"step#" + index}>
                        <span className="ml-3">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* other payment methods */}
            {/* <div className="col-lg-6 col-12">
              <div className="card h-100 bank position-relative">
                <img
                  loading="lazy"
                  src={donateContent?.methods[3].icon}
                  className="donateIcon"
                />

                <div className="card-header text-center">
                  <h2 className="card-title pt-5 other">
                    {donateData?.methods[3].title}
                  </h2>
                  <p className="card-text px-lg-2">
                    {donateData?.methods[3].description}
                  </p>
                </div>

                <div className="d-flex justify-content-center">
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.paypal.com/donate/guest?token=PFE8OIphkTVPbYi3rNiuQE8VKB9sghGPNtSo7ETGUSD8hdTvpjKGcaK-Q9FcqnKDGD-kIJeKjmtP4ZVz"
                  >
                    DONATE NOW
                  </a>
                </div>

                <div className="card-body pb-2">
                  <ul>
                    {donateData?.methods[3].steps.map((step, index) => (
                      <li key={"step#" + index}>
                        <span className="ml-3">{step}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <img src={bankCards} className="img-fluid bank-cards" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* sticker */}
      <section className="stickerSection">
        <div className="container py-5 mb-4">
          <div className="row w-75">
            <div className="col-12">
              <img
                loading="lazy"
                src={donateSticker}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
};

export default Donate;
