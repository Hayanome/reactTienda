import React from "react";
import productos from "./imagen productos/camiseta.jpg";

const producto = (props) => {
    const descripcion = "descripcion";
    const precio = 100000;
    return (
        <section className="producto">
            <div>
                <img
                    className="imagen-Producto"
                    src={productos}
                    alt="Producto"
                ></img>
            </div>
            <br />
            {descripcion}
            <br />${precio}
            <br />
            <button type="button" className="btn btn-success">
                Añadir al carrito
            </button>
        </section>
    );
};

export default producto;
