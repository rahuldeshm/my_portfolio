import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../../assets/png/astrocat.png";
import classes from "./Banner.module.css";
import "animate.css";

import AnimationScreen from "./AnimationScreen";
import SocialIcons from "../ui/SocialIcons";

export const Banner = () => {
  return (
    <section className={classes.banner} id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={8}>
            <AnimationScreen />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <div
              className={"animate__animated animate__zoomIn d-none d-md-block"}
            >
              <img src={headerImg} alt="Header Img" />
            </div>
            <div
              style={{ textAlign: "center" }}
              className="mt-4 d-none d-sm-block d-lg-none "
            >
              <SocialIcons />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
