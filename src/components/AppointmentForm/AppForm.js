import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./AppForm.css";

function ApntForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3lcypm6",
        "stylish_1987",
        form.current,
        "AUlMKnD1KXAEE5QBG"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Message didn't send");
        }
      );
    e.target.reset();
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={`apnt-btn ${props.className}`}
      >
        Book an Appointment
      </Button>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title"
          >
            REQUEST AN APPOINTMENT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form" ref={form} onSubmit={sendEmail}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Name*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  name="user_name"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" className="mb-3">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  name="user_email"
                />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Phone*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Phone"
                  name="user_phone_no"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="user_address"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="5" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" name="user_city" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="user_state"
                />
              </Form.Group>
              <Form.Group as={Col} md="3">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="user_zipcode"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" className="mb-3">
                <Form.Label>Service*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Service"
                  name="service"
                />
              </Form.Group>
              <Form.Group as={Col} md="3" className="mb-3">
                <Form.Label>Date*</Form.Label>
                <Form.Control
                  type="date"
                  required
                  placeholder="Date"
                  name="user_date"
                />
              </Form.Group>
              <Form.Group as={Col} md="3">
                <Form.Label>Time*</Form.Label>
                <Form.Control
                  type="time"
                  required
                  placeholder="Time"
                  name="user_time"
                />
              </Form.Group>
            </Row>
            <Button type="submit" className="apnt-form-onl-btn">
              Submit form
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApntForm;
