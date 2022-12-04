import React, { useState } from "react";
import style from "./contactForm.module.scss"


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    e.target.reset();
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>


      <div className={style.inputWrapper}>
        <label htmlFor="name">_name:</label>
        <input type="text" id="name" required pattern="\S+.*" />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor="email">_email:</label>
        <input type="email" id="email" required pattern="\S+.*" />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor="message">_message:</label>
        <textarea id="message" required />
      </div>
      {/* <span> your email won't be shared with anyone</span> */}

      <span>sorry, temporarily out of service</span>
      <button type="submit" disabled={false}>{status}</button>

    </form>
  );
};

export default ContactForm;