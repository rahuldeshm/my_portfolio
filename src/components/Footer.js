import { Container, Row, Col } from "react-bootstrap";
import { TbHexagonLetterD, TbHexagonLetterR } from "react-icons/tb";
import SocialIcons from "./ui/SocialIcons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="flogo">
            <TbHexagonLetterR size={80} style={{ color: "white" }} />
            <TbHexagonLetterD size={80} style={{ color: "white" }} />
          </Col>
          <Col size={12} sm={6} className="fsocial">
            <SocialIcons />
            <p>Copyright 2022. All Rights Reserved</p>
            <p>Email: rahuldeshmukh4545@gmail.com</p>
            <p>Phone: +91 703 023 6576 , +91 770 955 5099</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
