import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
        <h2 className="project-heading">
          Mis trabajos <strong className="purple">Recientes </strong>
        </h2>
        <p style={{ color: "white" }}>
          He aquí algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AlteaService"
              description="Project for a mechanic workshop, in which you can see the services offered and their prices, the location of the workshop, contact form and a look with photos to the facilities give it a look!!!.  ----------------------------------------------------- Proyecto para un taller mecanico,en el cual se pueden ver los servicios que se ofrecen y sus precios,la ubicacion del taller, forma de contacto y un vistazo con fotos y videos a las instalaciones dale un vistazo."
              ghLink="https://github.com/AgusConde9/AlteaService"
              demoLink="https://alteaservicear.000webhostapp.com/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AlteaServiceShop"
              description="A shopping system designed and implemented with HTML 5, CSS 3, JavaScript, React (JS) and SEO (Search Engine Optimization), in this the goal was to achieve a functional shopping cart to which you can add products so simulating a purchase of the business and with a shopping tab. You can see it in the buttons below this text! ----------------------------------------------------- Un sistema de compras diseñado e implementado con HTML 5, CSS 3, JavaScript, React (JS) y SEO (Search Engine Optimization), en este el objetivo fue lograr un carrito de compras funcional al cual se le puedan agregar productos simulando así una compra del negocio y con una pestaña de compras. ¡Puedes verlo en los botones debajo de este texto! " 
              ghLink="https://github.com/AgusConde9/AlteaServiceShop"
              demoLink="https://alteaserviceshop.000webhostapp.com/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TecnoCardalesShop"
              description="In this project HTML 5, JavaScript, CSS 3, React (JS) and SEO were used for the implementation for the final work of the CoderHouse course on React JS. You can see it in the link below this text! Go ahead click the button don't be afraid!.----------------------------------------------------- En este proyecto se utilizaron para la implementacion HTML 5, JavaScript, CSS 3, React (JS) y SEO para el trabajo final del curso de CoderHouse sobre React JS"
              ghLink="https://github.com/AgusConde9/TecnoCardalesShop"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Agutin Conde Portfolio"
              description="This project is my website, a landing page which is about my portfolio of work done and information about me, the page is designed so that a client can be informed about who he would be contacting, it is developed with JavaScript, React (JS) and CSS 3. Click, Thanks!.----------------------------------------------------- Este proyecto es mi pagina web, una landing page la cual se trata sobre mi portafolio de trabajos hechos y sobre informacion mia,la pagina esta diseñada para que un cliente pueda informarse sobre a quien estaria contactando, esta desarrollada con JavaScript, React (JS) y CSS 3"
              ghLink="https://github.com/AgusConde9/Agustin-Conde-Portfolio"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
