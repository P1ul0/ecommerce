import img_logo from "../../assets/img_logo.png";
import img_carrinho from "../../assets/img_carrinho.png";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <img className="img_logo" src={img_logo} alt="logo ecommerce" />
      <p className="title_logo">Atacadista</p>
      <img className="img_carrinho" src={img_carrinho} alt="img_carrinho" />
    </div>
  );
};
