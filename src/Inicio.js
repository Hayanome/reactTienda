import React from "react";
import { Link } from "react-router-dom";

import "./assets/css/styleInicio.css";
import banner from "./assets/Imagenes/banner.jpg";

const Inicio = () => {
    const styleImage = {
        width: "100%",
        backgroundSize: "cover",
        minHeight: "100vh",
    };
    return (
        <main>
            <Link to="./tienda">
                <img
                    style={styleImage}
                    src={banner}
                    alt="Imagen Promocional"
                ></img>
            </Link>
        </main>
    );
};
export default Inicio;
