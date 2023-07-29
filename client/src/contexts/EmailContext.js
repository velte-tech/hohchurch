import React from "react";
import { createContext, useContext, useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const serveWithUsRef = useRef();

  const [{ ...formFields }, setFormFields] = useState({});
  const [initialState, setInitialState] = useState();
  const [statusMessage, setStatusMessage] = useState("");
  const [status, setStatus] = useState(0);

  const clearState = () => setFormFields({ ...initialState });

  const notifyEmail = () => toast.success("Request Sent Successfully!");

  const serveSubmitEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(serveWithUsRef.current);
    console.log("formData: ", formFields);

    console.log(
      "url: ",
      `${process.env.REACT_APP_EMAIL_API_URL}:${process.env.REACT_APP_SERVER_PORT}/send`
    );

    axios
      .post(
        `${process.env.REACT_APP_EMAIL_API_URL}:${process.env.REACT_APP_SERVER_PORT}/sendMail`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setStatus(response.status);

        notifyEmail();

        localStorage.setItem("registered", true);

        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <EmailContext.Provider
      value={{
        serveWithUsRef,
        setInitialState,
        setFormFields,
        setStatusMessage,
        statusMessage,
        clearState,
        serveSubmitEmail,
        status,
      }}
    >
      {children}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </EmailContext.Provider>
  );
};

export const useEmail = () => useContext(EmailContext);
