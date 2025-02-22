import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { div } from "framer-motion/client";

const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const ContactForm = () => {
  console.log(regEmail.test("d@gmail.com"));
  const [messageData, setMessageData] = useState("");
  const [email, setEmail] = useState("");
  const submit = async (e) => {
    e.preventDefault();

    try {
      const params = { message: messageData, email: email };
      console.log(messageData);
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_API}/api/email`,
        data: params,
      });
      toast("Email sent sucessfully");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const messageHandler = (e) => {
    console.log(e.target.value);
    setMessageData(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <form className="form">
        <label htmlFor="email">Email</label>
        <input type="email" className="form__email" onChange={emailHandler} />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={messageHandler}
          type="text"
          className="form__message"
        />
        <a href="#" type="submit" onClick={submit} className="form__submit">
          Contact
        </a>
      </form>
      <div className="contact-wrap">
        <a href="https://www.linkedin.com/in/daniel-brusky-6a0a7a1b6/">
          <img
            src="/assets/linkedin.svg"
            alt=""
            className="linkedin"
          />
        </a>

        <a className="github-link" href="https://github.com/dbcode1">
          <img
            className="github-contact"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
          />
        </a>
      </div>
    </div>
  );
};
export default ContactForm;
