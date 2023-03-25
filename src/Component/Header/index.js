import img_logo from "../../assets/img_logo.png";
import "./style.css";
import {BsCart4} from "react-icons/bs"
import { useState } from "react";


export const Header = ({openCart}) => {
    const [num, setNum] = useState(2)
    
    function open(){
      openCart()
  }
  

  return (
    <div className="header">
      <div className="subheader">
      <img className="img_logo" src={img_logo} alt="logo ecommerce" />
      <p className="title_logo">Atacadista</p>
      </div>
      <button className="btn_carrinho" onClick={open}  >
        <BsCart4 className="img_carrinho"/>
        {num === 0 ?
         null :
        <p className="num_carrinho">{num}</p>
        }
      </button>
      
      
      
    </div>
  );
};
