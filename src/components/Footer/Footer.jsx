import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Footer = (props) => {
  return (
    <div className="footer" onClick={props.closeNav}>
      <div className="footer__white">
        <div>
          <Link to="/">
            <img
              className="footer__white--logo"
              src={require("../../images/icons/Logo360Negro.png")}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="footer__white__ubication">
          <Link to="/dondeestamos">
            <p>
              Gran Vía, 36 / 28002 Madrid{" "}
              <span>
                <img
                  src={require("../../images/icons/positionIcon.png")}
                  alt="Ubication icon"
                  className="smallIcon"
                />
              </span>
            </p>
          </Link>
        </div>
      </div>

      <div className="footer__yellow">
        <div className="footer__yellow__up">
          <div className="footer__yellow__up__icons">
            <a href="https://www.facebook.com/profile.php?id=100079150917439" target="_blank" rel="noreferrer">
              <img
                className="footer__yellow__up__icons--icon"
                src={require("../../images/icons/FacebookIcon.png")}
                alt="Facebook logo"
              />
            </a>
            <a href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noreferrer">
              <img
                className="footer__yellow__up__icons--icon"
                src={require("../../images/icons/WhastsappIcon.png")}
                alt="Whatsapp logo"
              />
            </a>
            <a href="https://www.instagram.com/?hl=es" target="_blank" rel="noreferrer">
              <img
                className="footer__yellow__up__icons--icon"
                src={require("../../images/icons/InstagramIcon.png")}
                alt="Instagram logo"
              />
            </a>
          </div>
          <div>
            <Link to="/horarios">
              <img
                className="footer__yellow__up__clockIcon"
                src={require("../../images/icons/ClockIcon.png")}
                alt="Clock icon"
              />
            </Link>
          </div>
          <div className="footer__yellow__up__text">
            <Link to="/avisolegal">
              <p>Aviso legal</p>
            </Link>
            <Link to="/politicaprivacidad">
              <p>Política de privacidad</p>
            </Link>
            <Link to="/politicacookies">
              <p>Política de cookies</p>
            </Link>
          </div>
        </div>

        <div className="footer__yellow__down">
          <p>rest360º © Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
