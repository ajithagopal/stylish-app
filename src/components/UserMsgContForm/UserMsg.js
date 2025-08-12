import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./UserMsg.css";

const UserMsg = () => {
  return (
    <Form className="msg-form-cont">
      <Row className="mb-2">
        <Form.Group as={Col} md="12" controlId="formGridFName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} md="6" controlId="formGridEmail" className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="formGridLPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} md="12" controlId="formGridEmail">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" />
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} md="12" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your Message" />
        </Form.Group>
      </Row>

      <Button type="submit" className="send-msg-btn">
        Send Message
      </Button>
    </Form>
  );
};

export default UserMsg;
