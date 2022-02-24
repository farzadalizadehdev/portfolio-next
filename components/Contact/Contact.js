import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styles from "./contact.module.css";

const Contact = (props) => {
  return (
    <section>
      <h1>Contact Me</h1>
      <Link href="tel:+989127433785"><a>09127433785</a></Link>
      <Link href="mailto:farzadalizadehdev@email.com"><a>farzadalizadehdev</a></Link>
    </section>
  );
};

export default Contact;
