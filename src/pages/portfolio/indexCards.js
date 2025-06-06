import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGithub, FaGlobe } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-img-top" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <FaGithub /> &nbsp;
          GitHub
        </Button>
        {"\n"}
        {"\n"}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaGlobe /> &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;