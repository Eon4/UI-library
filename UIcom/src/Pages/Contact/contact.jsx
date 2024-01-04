import { Form } from "../../Components/Form/Form"
import React from 'react';
import { Link } from 'react-router-dom';
import style from "../../Pages/Contact/contact.module.scss";

export const Contact = () => {
  return (
    <>
      <h1 >Contact Us</h1>

      {/* <p>Lalalaa contact us here</p> */}
      <Form/>

    </>
  );
};

export default Contact;