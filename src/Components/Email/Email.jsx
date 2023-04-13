import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Email.css'

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
    <form id='emailForm' ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input 
        type='text' 
        name='user_name' 
        placeholder="Your name, please"/>
      <label>Email:</label>
      <input 
        type='email' 
        name='user_email'
        placeholder="Your email address, here" />
      <label>Message:</label>
      <textarea 
        name='message' 
        placeholder="Okay, let's hear it..well, read it I suppose."/>
      <input 
        type='submit' 
        value='Send'
        id='emailSendButton'
         />
    </form>
  );
};

export default Email;
