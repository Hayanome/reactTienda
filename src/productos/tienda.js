import React from "react";
import Producto from "./producto";
const tienda = () => {
    return (
        <main>
            <h1>Nuestros prodúctos</h1>
            <section className="flex-container">
                <section className="articulos">
                    <Producto />
                    <Producto />
                    <Producto />
                    <Producto />
                    <Producto />
                    <Producto />
                    <Producto />
                    <Producto />
                    <Producto />
                </section>
            </section>
        </main>
    );
};

export default tienda;
