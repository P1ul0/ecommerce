import { useState } from "react";
import { Body } from "../Component/Body";
import { Header } from "../Component/Header";
import { Cart } from "../Component/Cart";


export const Ecommerce = () => {
  const [carts, setCarts] = useState([]);
  const [cart, setCart] = useState(false);
  const [counter, setCounter] = useState(0)

  function routeCart() {
    setCart(!cart);
  }


 
  function add(cart) {
    let quantity = 1;
    let exist= false;
    carts.forEach((e) => {
      if (e.cart === cart) {
      
        e.quantity++;
        exist = true
        return;
      }
    });
    if(!exist){
      setCarts([{ cart: cart, quantity: quantity }, ...carts]);
    }
  }

  return (
    <>
      {cart === true ? (
        <Cart cart={cart} closeCart={routeCart} products={carts} />
      ) : null}
      <Header cart={cart} openCart={routeCart} quantify={counter} />
      <div className="corpo">
        <Body addProducts={add} counter={counter} setCounter={setCounter}/>
      </div>
    </>
  );
};
