import { Container, Row, Col } from 'react-bootstrap';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ub6nzxj', // Replace with your actual service ID
        'template_7qvr6hk', // Replace with your actual template ID
        form.current,
        {
          publicKey: 'ge60H6QXoSQqHg0f8', // Replace with your actual public key
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="Contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <form ref={form} onSubmit={sendEmail}>
              <h1>Contact Me</h1>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Enter your name..." required />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Enter your email..." required />
              <label>Message</label>
              <textarea name="message" placeholder="Write your message..." required />
              <input type="submit" value="Send" />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;