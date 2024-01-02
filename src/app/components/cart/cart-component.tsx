import React, { useState, useEffect } from "react";
import {
  getCart,
  removeFromCart,
  registerUpdateCallback,
} from "./cart-service";
import Link from "next/link";

const Cart: React.FC<{ isCartVisible: boolean; toggleCartVisibility: () => void }> = ({ isCartVisible, toggleCartVisibility }) => {
  const [cart, setCart] = useState(getCart());

  useEffect(() => {
    const updateCallback = () => {
      setCart(getCart());
    };

    registerUpdateCallback(updateCallback);

    return () => {
      registerUpdateCallback(() => {});
    };
  }, []);


  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };



  return isCartVisible &&(
    
  <div
      className="productcart-container animate__animated animate__fadeIn"
      style={{ display: "flex" }}
    >
      <div className="productcart-container-header px-3 justify-content-between">
        <h4 className="text-light text-sm" style={{ fontSize: "30px" }}>
          Carrito
        </h4>
        <button className="productcart-close-button" onClick={toggleCartVisibility}>X</button>
      </div>
      <div className="productcart-container-body">
        <div className="productcart-body-overflow  ">
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, i) => (
                <a className="mb-1 " target="_blank" key={i}>
                  <span>
                    {item.product.name} - (Cantidad: {item.quantity})
                  </span>
                  <button
                    onClick={() =>
                      handleRemoveFromCart(item.product.id.toString())
                    }
                    className="btn "
                  >
                    {" "}
                    Eliminar
                  </button>
                </a>
              ))}
            </ul>
          ) : (
            <a target="_blank align-content-center d-flex justify-content-center">
              <span> El Carrito está vacío</span>
            </a>
          )}
        </div>
      </div>
      <div className="  d-flex mb-2 justify-content-end px-3">
        <Link
          href={{}}
          className="bg-warning p-2 button lab-btn text-white d-flex"
        >
          {" "}
          <span className="icofont-external-link d-flex me-1 align-items-center"></span>{" "}
          <span>Consultar Carrito</span>
        </Link>
      </div>

</div>
  );
};

export default Cart;
