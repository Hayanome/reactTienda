import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/styleLogin.css";
import fondo from "./assets/Imagenes/login_fondo.jpg";

const login = (props) => {
    return (
        <main style={{ backgroundImage: `url(${fondo})` }}>
            <section className="inicioSesion">
                <section className="login">
                    <form
                        onSubmit={(ev) => {
                            ev.preventDefault();
                            /* 
          nombre de las variables que saldrian para el back
            */
                            const correo = ev.target.correo.value;
                            const contraseña = ev.target.contraseña.value;
                        }}
                    >
                        <h1>Inicio de sesión</h1>
                        Usuario <br />
                        <input
                            type="text"
                            name="correo"
                            placeholder="Correo Electrónico"
                        />
                        <br />
                        <br />
                        Contraseña <br />
                        <input
                            type="password"
                            /* 
          Super importante en name colocar tal como se llamará en base de datos para que funcione, sin embargo
          se tendria que cambiar en las variables contraseña y correo la parte ev.tarjet.contraseña.value por:
          ev.tarjet.nombre nuevo de la variable.value
            */
                            name="contraseña"
                            placeholder="Contraseña"
                        />
                        <br />
                        <br />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    <br />
                    ¿eres nuevo? <Link to="../Crearcuenta">Crear Cuenta</Link>
                </section>
            </section>
        </main>
    );
};

export default login;
