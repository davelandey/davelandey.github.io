import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = (props) => {
  const toggle = props.toggle;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toggle();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_KEY,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type='text' name='user_name'  />
    <label>Email</label>
    <input type='email' name='user_email' />
    <label>Message</label>
    <textarea name='message' />
    <input type='submit' value='Send' />
  </form>
  );
};

export default Email;
