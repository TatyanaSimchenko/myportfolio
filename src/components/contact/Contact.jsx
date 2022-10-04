import React, {useRef} from "react";
import emailjs from "emailjs-com"
import { MdOutlineEmail } from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs"
import "./contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gm6wxhb', 'template_leb2ibc', form.current, 'iAZRth5wbUZb2F9KZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>misstaty8181@gmail.com</h5>
            <a href="mailto:misstaty8181@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>FB messenger</h5>
            <a href="https://m.me/tetianasymchenko" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+48 739 493 519</h5>
            <a href="https://api.whatsapp.com/send?phone=48739493519" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* end of contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
