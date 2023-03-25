import { useState } from "react"
import { Body } from "../Component/Body"
import { Header } from "../Component/Header"
import { Cart } from "../Component/Cart"
import"./style.css"

export const Ecommerce = () => {
    const [cart, setCart] = useState(false)

    function routeCart () {
        setCart(!cart)
    }


    return (
        <>
        { cart ===true ? 
        <Cart cart={cart} closeCart={routeCart}/>
        :
        null
        }
        <Header cart={cart} openCart={routeCart}/>
        <div className="corpo">
        <Body/>
        
        </div>
        </>
    )
}