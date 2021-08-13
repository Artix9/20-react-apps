import React, { createContext, useContext, useReducer } from "react";
import products from "../products";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

// reducer
const initialState = { cart: [] };

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD":
      //payload is going to be our sku
      return {
        ...state,
        cart: [
          ...state.cart,
          products.find((product) => product.sku === payload),
        ],
      };

    case "REMOVE":
      const indexInCart = state.cart.findIndex(
        (product) => product.sku === payload
      );
      const newCart = [...state.cart];
      newCart.splice(indexInCart, 1);
      return { ...state, cart: newCart };

    case "EMPTY":

    default:
      return state;
  }
}

// cart content for the provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (sku) => dispatch({ type: "ADD", payload: sku });
  const removeItem = (sku) => dispatch({ type: "REMOVE", payload: sku });

  function countItemsInCart(sku) {
    const itemsInCart =
      state.cart.filter((product) => product.sku === sku) ?? [];

    return itemsInCart.length;
  }

  function totalPrice() {}

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        cart: state.cart,
        countItemsInCart,
        totalPrice: totalPrice(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
