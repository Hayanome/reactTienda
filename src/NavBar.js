import React from "react";
import "./assets/css/style.css";
import { Link } from "react-router-dom";
import logo from "./assets/Imagenes/logo.jpg";
import facebook from "./assets/Imagenes/facebook.svg";
import instagram from "./assets/Imagenes/instagram.svg";
import carritoLogo from "./assets/Imagenes/shopping-cart.svg";

const NavBar =() =>{
  
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-logo" to="/">
            <img src={logo} alt="logo tienda" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Ropa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./tienda">
                  Nuestros Prodúctos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Ofertas Especiales
                </Link>
              </li>
            </ul>
            <span className="navbar-icon" href="#">
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram" />
              </a>
              <Link className="nav-link" to="./Carrito">
                <img src={carritoLogo} alt="carrito de compras" />0
              </Link>
            </span>

            <span className="navbar-login">
              <Link to="./Login">
                <button>Iniciar Sesión </button>
              </Link>
              <br />
              <Link to="./Crearcuenta">Crear Cuenta</Link>
            </span>
          </div>
        </div>
      </nav>
    );
  }

export default NavBar;
