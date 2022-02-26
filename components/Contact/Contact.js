import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styles from "./contact.module.css";

const Contact = (props) => {
  const { email, tel, github } = props.content;
  return (
    <section className="contact-section">
      <p>CONTACT ME</p>
      <p>I’m always in learning...</p>
      {email}
      {tel}
      {github}
    </section>
  );
};

export default Contact;
