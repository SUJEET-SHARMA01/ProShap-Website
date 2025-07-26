import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYEar = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-4">
            <p>&copy; ProShop {currentYEar}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
