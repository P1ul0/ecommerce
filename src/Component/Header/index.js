import img_logo from "../../assets/img_logo.png";
import "./style";
import { BtnCarrinho, HeaderPrincipal , ImgCarrinho, ImgLogo, NumCarrinho, SubHeader, TitleLogo } from "./style.js";



export const Header = ({openCart, quantify}) => {

    function open(){
      openCart()
    }
  

  return (
    <HeaderPrincipal >
      <SubHeader>
      <ImgLogo className="img_logo" src={img_logo} alt="logo ecommerce" />
      <TitleLogo>Atacadista</TitleLogo>
      </SubHeader>
      <BtnCarrinho onClick={open}>
        <ImgCarrinho/>
        {quantify === 0 ?
         null :
        <NumCarrinho>{quantify}</NumCarrinho>
        }
      </BtnCarrinho>
    </HeaderPrincipal >
  );
};
