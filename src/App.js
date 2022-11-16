import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Carrito from "./Carrito/Carrito";
import Inicio from "./Inicio";
import Login from "./Login";
import Crearcuenta from "./Crearcuenta";
import Tienda from "./productos/tienda";
import React from "react";
import Cartprovider from "./Carrito/Cartcontext";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/login" element={<Login />} />
                <Route path="/crearcuenta" element={<Crearcuenta />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
function NotFound() {
    return <>Ha llegado a una página que no existe</>;
}
export default App;
