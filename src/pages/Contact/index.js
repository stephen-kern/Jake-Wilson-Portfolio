import { React, useRef,  } from "react";
import emailjs from "@emailjs/browser";
import JakeStudio from "../../assets/images/JakePress.jpg";

const ContactUs = () => {
  const form = useRef();
  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
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
        <form
          ref={form}
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <label>Name</label>
          <input type="text" name="user_name" required/>
          <label>Email</label>
          <input type="email" name="user_email" required/>
          <label>Message</label>
          <textarea name="message" required/>
          <input type="submit" value="SEND" className="contact-btn" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
