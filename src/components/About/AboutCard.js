import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Agustin Conde </span>
            from <span className="purple"> Buenos aires,Argentina</span>
            <br />I am a junior FullStack developer which specializes in Front-End
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports like football or tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with my family
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <p style={{ textAlign: "justify" }}>
          Hola a todos,yo soy <span className="purple">Agustin Conde </span>
            de <span className="purple"> Buenos aires,Argentina</span>
            <br />Soy un desarrollador junior FullStack que se especializa en Front-End
            <br />
            <br />
            Aparte de la programación, ¡hay otras actividades que me encantan realizar!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Hacer deportes como futbol o tenis
            </li>
            <li className="about-activity">
              <ImPointRight /> Pasar tiempo con mi familia
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esfuérzate por construir cosas que marquen la diferencia."{" "}
          </p>
          <footer className="blockquote-footer">Agustin Conde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
