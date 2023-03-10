import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <h2 style={{ fontSize: "2.6em" }}>
              DEJAME <span className="purple"> PRESENTARME </span>
            </h2>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br></br><br></br>
              Me enamoré de la programación y por lo menos he aprendido algo, creo... 🤷‍♂️
              <br />
              <br />I am fluent in new and classics like
              <i>
                <b className="purple"> HTML 5, Javascript, CSS and React (JS). </b>
              </i>
              <br></br>
              <br />Domino los nuevos y clásicos como
              <i>
                <b className="purple"> HTML 5, Javascript, CSS and React (JS). </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br></br>
              <br />
              Mi campo de interés es la construcción de nuevas &nbsp;
              <i>
                <b className="purple">Tecnologías y productos web </b> y también en áreas relacionadas con{" "}
                <b className="purple">
                Aprendizaje profundo y procesamiento de lenguaje natural.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            
            <br />
              <br />
              Siempre que es posible, también aplico mi pasión por desarrollar productos
              con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Librerías y frameworks modernos de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <h2>ENCUÉNTRAME EN</h2>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p>
            No dude en<span className="purple"> conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AgusConde9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/agustin-conde-51437a219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/agusconde9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
