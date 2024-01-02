import { Product } from "@/app/util/types";
import { CartItem } from "./cart-model";

const cart: CartItem[] = [];
let updateCallback: () => void = () => {};

export const addToCart = (product: Product): void => {
  const existingItem = cart.find((item) => item.product.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  // Llamar al callback para notificar al componente sobre el cambio en el carrito
  updateCallback();
};

export const removeFromCart = (productId: string): void => {
  const index = cart.findIndex((item) => item.product.id.toString() === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }

  // Llamar al callback para notificar al componente sobre el cambio en el carrito
  updateCallback();
};

export const getCart = (): CartItem[] => {
  return [...cart];
};

// Función para registrar un callback de actualización
export const registerUpdateCallback = (callback: () => void): void => {
  updateCallback = callback;
};
