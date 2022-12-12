import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Toasty(props) {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <ToastContainer position="top-start" className="p-3">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={props.variant.toLowerCase()}>
            <Toast.Header>
                <strong className="me-auto">{props.title}</strong>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default Toasty;
