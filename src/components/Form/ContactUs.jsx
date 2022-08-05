import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactus.styles.css';

const ContactUs = () => {
  const [ alert, setAlert ] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qiy5yop', 'template_5e4vfuc', form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setAlert(true)
          setTimeout(() => {
            setAlert(false);
          }, 5000);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className='formStyles'
    >
      {
        alert && (
          <div className='alerts'>
              <h3>Thanks for contacting me!</h3>
              <p>I will be responding as soon as possible.</p>
          </div>
        )
      }
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="Name" 
          name="from_name" 
          id='from_name' 
          required 
        />
        <label htmlFor="user_email" className="form__label">Name</label>
      </div>

      <div className="form__group field">
        <input
          type="email"
          className="form__field"
          placeholder="Name"
          name="user_email"
          id='user_email'
          required 
        />
        <label htmlFor="user_email" className="form__label">Email</label>
      </div>

      <div className="form__group field">
        <textarea
          className="form__field"
          placeholder="Comments"
          name="message"
          id='message'
          required
        />
        <label htmlFor="message" className="form__label">Message</label>
      </div>

      <input type="submit" value="Send" disabled={alert} />
    </form>
  );
};

export default ContactUs;