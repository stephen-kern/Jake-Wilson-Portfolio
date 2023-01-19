import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import JakeStudio from "../../assets/images/JakePress.jpg";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="form-img-container">
        <img src={JakeStudio} alt="Jake Wilson using the printing press"></img>
      </div>
      <div className="email-form">
        <h4 className="contact-title"> Contact Jake Wilson </h4>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="SEND" className="contact-btn"/>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
