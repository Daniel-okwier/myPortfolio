import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectCard from './indexCards';
import Particle from "../../components/Particle";
import { meta, dataportfolio } from '../../content_option';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import './style.css'

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container fluid className="project-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Projects <strong className="purple"></strong>
          </h1>
          
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {dataportfolio.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.img}
                  title={project.title}
                  description={project.description}
                  ghLink={project.github}
                  demoLink={project.link}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </HelmetProvider>
  );
};