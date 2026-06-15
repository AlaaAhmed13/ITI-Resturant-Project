import React from "react";
import "../component/ContactForm.css";
import { Content } from "../component/landing";


const Landing=()=>{
    return(
        <div className="landing ContactLanding">
            <Content h1='La Cuisine' h2='SPECIAL MOMENTS' p='An unforgettable dining experience in the heart of Covent Garden, London.Contemporary british menu, inspired by the traditions of Great Britain.'/>
        </div>
    )
}

const ContactForm = () => {
  return (
    <section className="contact-container">
      <div className="contact-overlay">
        <h2>CONTACT FORM</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration, by injected humour, or new
          randomised words which don’t look believable.
        </p>
        <form className="contact-form">
          <div className="left-fields">
            <input type="text" placeholder="Full Name*" required />
            <input type="email" placeholder="Email Address*" required />
            <input type="tel" placeholder="Phone Number*" required />
          </div>
          <div className="right-field">
            <textarea placeholder="Your Message..." required></textarea>
          </div>
  <div className="send-button">
    <button type="submit">SEND MESSAGE</button>
  </div>
</form>
      </div>
    </section>
  );
};
const Contact=()=>{
  return(
    <>
        <Landing />
        <ContactForm />
    </>
  )
}


export default Contact;
