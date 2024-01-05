import React, { useState, useEffect } from "react";
import {
  getCart,
  removeFromCart,
  registerUpdateCallback,
  decreaseQuantity,
  increaseQuantity,
  updateCartItemQuantity,
} from "./cart-service";
import Link from "next/link";
import QuotationIcon from "../assets/quotationIcon";
import phonesData from "@/app/util/data";

const Cart: React.FC<{
  isCartVisible: boolean;
  toggleCartVisibility: () => void;
}> = ({ isCartVisible, toggleCartVisibility }) => {
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

  const handleQuantityChange = (productId: string, newQuantity: string) => {
    const parsedQuantity = parseInt(newQuantity, 10);

    if (!isNaN(parsedQuantity) && parsedQuantity >= 1) {
      updateCartItemQuantity(productId, parsedQuantity);
    }
  };

  const generateWhatsAppMessage = () => {
    const cartMessage = cart
      .map((item) => `${item.product.name}: ${item.quantity} unidades.`)
      .join("\n");
    const initialMessage =
      "Hola, te hablo desde la página web. Me gustaría consultar la cotización de los siguientes productos:\n\n";
    const fullMessage = initialMessage + cartMessage;
    return encodeURIComponent(fullMessage);
  };

  return (
    isCartVisible && (
      <div
        className="productcart-container animate__animated animate__fadeIn"
        style={{ display: "flex" }}
      >
        <div className="productcart-container-header px-3 justify-content-between">
          <h4 className="text-light text-sm" style={{ fontSize: "30px" }}>
            Cotización
          </h4>
          <button
            className="productcart-close-button"
            onClick={toggleCartVisibility}
          >
            X
          </button>
        </div>
        <div className="productcart-container-body">
          <div className="productcart-body-overflow ">
            {cart.length > 0 ? (
              <ul className="d-flex  flex-column justify-content-center">
                {cart.map((item, i) => (
                  <a
                    className="mb-1 row justify-content-center align-items-center"
                    target="_blank"
                    key={i}
                  >
                    <span className="col md-col-4">{item.product.name}</span>
                    <div className="d-flex col md-col-6 ">
                      <button
                        className="p-1 flex w-1 btnFocus align-items-center"
                        onClick={() =>
                          decreaseQuantity(item.product.id.toString())
                        }
                      >
                        -
                      </button>
                      <input
                        className="inputCart"
                        type="text"
                        name="qtybutton"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.product.id.toString(),
                            e.target.value
                          )
                        }
                      />
                      <button
                        className="p-1 flex btnFocus  align-items-center"
                        onClick={() =>
                          increaseQuantity(item.product.id.toString())
                        }
                      >
                        +
                      </button>
                    </div>
                    <span
                      className="d-flex  col md-col-2 justify-content-center"
                    >
                      {" "}
                      <img
                        onClick={() =>
                          handleRemoveFromCart(item.product.id.toString())
                        }
                        src="/assets/images/del.png"
                        className=" d-flex  "
                        style={{
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                        }}
                        alt="delet"
                      />
                    </span>
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
        <div className=" d-flex mb-2 justify-content-end px-3">
          <Link
            href={`https://api.whatsapp.com/send?phone=${
              phonesData[0].phone
            }&text=${generateWhatsAppMessage()}`}
            style={{ backgroundColor: "#ffb11f" }}
            className="align-items-center p-2 button lab-btn text-white d-flex"
          >
            <span className="me-1">Consultar Cotización</span>
            <span className="icon-Quotation">
              <QuotationIcon width="35" height="35" />
            </span>
          </Link>
        </div>
      </div>
    )
  );
};

export default Cart;
