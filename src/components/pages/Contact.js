import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const styles = {
  button: {
    backgroundColor: "#1D3557",
    border: "transparent",
  },
};

export default function Contact() {
  return (
    <Form className="content">
      <h2>Contact</h2>
      <p>
        <br></br> Contact details are included below: <br></br>
        <br></br>Parker Mathis<br></br>425-418-2121
        <br></br>parkerjmathis@gmail.com
        <br></br>
        <br></br>***Please note: Form is currently under development and is not ready to submit messages.***
      </p>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: "100px" }} />
      </Form.Group>

      {/* <Button variant="primary" type="submit"> */}
      <Button style={styles.button} type="submit">
        Submit
      </Button>
    </Form>
  );
}
