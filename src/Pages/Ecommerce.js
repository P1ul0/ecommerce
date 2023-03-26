import { useState } from "react";
import { Body } from "../Component/Body";
import { Header } from "../Component/Header";
import { Cart } from "../Component/Cart";
import "./style.css";

export const Ecommerce = () => {
  const [carts, setCarts] = useState([]);
  const [cart, setCart] = useState(false);

  function routeCart() {
    setCart(!cart);
  }


 
  function add(cart) {
    let quantify = 1;
    carts.forEach((e) => {
      if (e.cart !== cart) {
        e.quantify == 1;
      }else{
        quantify ++;
      }
    });
    setCarts([{ cart: cart, quantify: quantify }, ...carts]);
  }

  

  return (
    <>
      {cart === true ? (
        <Cart cart={cart} closeCart={routeCart} products={carts} />
      ) : null}
      <Header cart={cart} openCart={routeCart} quantify={carts.length} />
      <div className="corpo">
        <Body addProducts={add} />
      </div>
    </>
  );
};
