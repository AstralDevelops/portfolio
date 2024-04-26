import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import bioLink from "../../Assets/Projects/bioLink.png";
import botSite from "../../Assets/Projects/botSite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bioLink}
              isBlog={false}
              title="Bio Link Site"
              description="A site i made with html, css, js that show's all of my current socials"
              demoLink="https://astraldevelops.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={botSite}
              isBlog={false}
              title="Astral Development"
              description="A site coded in html, css, js and soon will have a purpose for it's existence. (I'm coding a discord bot)"
              demoLink="https://astraldevelopment.store/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Astral Portfolio"
              description="The site your currently on coded with React.js this took awhile so please enjoy :)"
              demoLink="https://astraldev.lol/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
