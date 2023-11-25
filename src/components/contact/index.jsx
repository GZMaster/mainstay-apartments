import React, { useState } from "react";
import "../../styles/Contact.scss";
import contactimg from "../../assets/images/contactimg.png";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "LexxyFX",
    message: "",
    reply_to: "retrodevstechnology@gmail.com",
    from_number: "",
    from_email: "",
    subject: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact_wrapper">
      <header>
        <h3>Contact us</h3>
        <h1>get in touch with us</h1>
        <p>
          We are here to assist you with any inquiries or requests you may have.
          We look forward to hearing from you.
        </p>
      </header>

      <div>
        <div className="contact_left">
          <img src={contactimg} alt="contactimg" />
        </div>

        <form className="contact_right C_Form" onSubmit={onSubmit}>
          <label className="form_label">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            value={toSend.from_name}
            className="form_control"
            onChange={handleChange}
          />
          <label className="form_label">Phone Number</label>
          <input
            type="number"
            placeholder="Phone number"
            name="from_number"
            value={toSend.from_number}
            className="form_control"
            onChange={handleChange}
          />
          <label className="form_label">Email</label>
          <input
            type="email"
            placeholder="Email address"
            name="from_email"
            value={toSend.from_email}
            className="form_control"
            onChange={handleChange}
          />
          <label className="form_label">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            type="text"
            cols="30"
            rows="10"
            value={toSend.message}
            className="form_control"
            onChange={handleChange}
          />
          <button type="submit" className="C_btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
