import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import yourImg from '../../assets/images/pic1.png';
import Particle from "../../components/Particle";
import "./style.css";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Particle />
        <Container fluid className="home-section">
          <Container className="home-content">
            <Row className="align-items-center">
              <Col md={7} className="home-header">
                <h1 className="heading">
                  {introdata.title}{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋
                  </span>
                </h1>

                <p className="intro-description">{introdata.description}</p>

                <div className="animated-text-container">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 30,
                      delay: 10,
                      cursor: "_"
                    }}
                  />
                </div>

                <div className="intro_btn-action">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </Col>

              <Col md={5} className="home-image order-first order-md-last">
                <img
                  src={yourImg}
                  alt="home pic"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </HelmetProvider>
  );
};