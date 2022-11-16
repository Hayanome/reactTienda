import React from "react";
import "./assets/css/styleCarrito.css";
const carrito = () => {
  return (
    <main>
      <section class="row">
        <section class="col-sm-12 col-md-6 col-lg-7 col-xl-7">
          <section>
            <h2>Productos</h2>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ropa</td>
                    <td>$100.000</td>
                    <td>
                      <input
                        type="number"
                        id=""
                        class="input-text qty text"
                        step="1"
                        min="0"
                        max="2"
                        name="numeroArticulos"
                        title="Cantidad"
                        size="4"
                        placeholder="0"
                        inputmode="numeric"
                      />
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
        <section class="col-sm-12 col-md-6 col-lg-5 col-xl-5">
          <section class="pago">
            <h2>Total del carrito</h2>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Subtotal</th>
                  <td>$100.000</td>
                </tr>
                <tr>
                  <th scope="row">Costo envio</th>
                  <td>$12.000</td>
                </tr>
                <tr>
                  <th scope="row">Total</th>
                  <td>$112.000 </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              class="col-sm-12 col-md-12 col-lg-12 col-xl-12 btn btn-primary btn-lg"
            >
              realizar compra
            </button>
          </section>
        </section>
      </section>
    </main>
  );
};

export default carrito;
