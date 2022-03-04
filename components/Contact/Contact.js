import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styles from "./contact.module.css";

const Contact = (props) => {
  const { email, tel, github } = props.content;
  return (
    <section className="contact-section">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <p>CONTACT ME</p>
        <p>I’m always in learning...</p>
        {/* {email}
        {tel}
        {github} */}
      </div>
    </section>
  );
};

export default Contact;
