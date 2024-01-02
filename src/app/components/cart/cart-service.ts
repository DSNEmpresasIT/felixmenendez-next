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
  updateCallback();
};

export const removeFromCart = (productId: string): void => {
  const index = cart.findIndex((item) => item.product.id.toString() === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }

  updateCallback();
};

export const getCart = (): CartItem[] => {
  return [...cart];
};

export const registerUpdateCallback = (callback: () => void): void => {
  updateCallback = callback;
};
// https://www.flaticon.es/icono-gratis/pago_2761101?term=cotizaci%C3%B3n&page=1&position=4&origin=tag&related_id=2761101