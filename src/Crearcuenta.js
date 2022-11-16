import React, { useState } from "react";
import "./assets/css/styleCrearCuenta.css";
const CrearCuenta = () => {
  /* Importante: estas constantes son hooks lo que hacen es basicamente leer los datos recibidos imprimirlos en
  values de cada input del formulario y leer los cambios que se le hagan en tiempo real con el set
  osea para  const [nombre, setNombre] nombre el es nombre del dato recibido y setNombre la lectura de los
  cambios del mismo, se puede comprobar esto por consola y solo se hizo acá porque si lo dejamos en el inico de sesion
  se podria leer por consola el usuario y contraseña del cliente lo que arroja un problema de seguridad  */
  const [nombre, setNombre] = useState ('');
  const [apellidoPadre, setApellidoPadre] = useState ('');
  const [apellidoMadre, setApellidoMadre] = useState ('');
  const [telefono, setTelefono] = useState ('');
  const [correo, setCorreo] = useState ('');
  const [direccion, setDireccion] = useState ('');
  const [contraseña, setContraseña] = useState ('');
  const error = validacion(nombre, apellidoPadre, apellidoMadre,correo,contraseña);
    return (
      <main>
        <section class="crear_cuenta">
          <h1>Crea una cuenta con nosotros</h1>
          <form onSubmit={ev => {ev.preventDefault()}}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={ev => setNombre(ev.target.value)}
            />
            
            <br />
            <br />
            <input
              type="text"
              name="apellidoPadre"
              placeholder="Apellido Paterno"
              value={apellidoPadre}
              onChange={ev => setApellidoPadre(ev.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="apellidoMadre"
              placeholder="Apellido Materno"
              value={apellidoMadre}
              onChange={ev => setApellidoMadre(ev.target.value)}/>
            <br />
            <br />
            <input
              type="number"
              name="telefono"
              placeholder="Telefono"
              value={telefono}
              onChange={ev => setTelefono(ev.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="correo"
              placeholder="Correo Electronico"
              value={correo}
              onChange={ev => setCorreo(ev.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección Residencia"
              value={direccion}
              onChange={ev => setDireccion(ev.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={contraseña}
              onChange={ev => setContraseña(ev.target.value)}
            />
            <br />
            <br />
            <button type="submit" disabled={error}>Crear Cuenta</button>
            <br />
            <p>{error}</p>
          </form>
        </section>
      </main>
    );
  }
   /* 
        Super importante en name colocar tal como se llamará en base de datos para que funcione, sin embargo
        se tendria que cambiar en las variables contraseña y correo la parte ev.tarjet.contraseña.value por:
         ev.tarjet.nombre nuevo de la variable.value
          */
const validacion = (nombre, apellidoPadre, apellidoMadre, telefono, correo, direccion, contraseña) =>{
  if (nombre.includes(' ') || apellidoPadre.includes(' ') || apellidoMadre.includes(' ')) return 'No deben haber espacios en ninguna casilla';
  /*if (nombre.length === 0 || apellidoPadre.length === 0 || apellidoMadre.length === 0 || correo.length === 0)  return 'No debe haber ningun espacio vacio'*/
}  

export default CrearCuenta;
