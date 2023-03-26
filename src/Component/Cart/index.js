import { useState, useEffect } from "react";
import {
  Container,
  Products,
  Button,
  ButtonAumentar,
  ButtonDiminuir,
  TextBtnCompra,
  ImgProducts,
  TextProducts,
  PriceProducts,
  PriceTextProducts,
  ButtonCompraTotal,
  ImgButtonAumentar,
  ImgButtonDiminuir,
  TextMeioButton
} from "./style";
import { api, urlApi } from "../../Api/api";

export const Cart = ({ closeCart, products }) => {
  const [cart, setCart] = useState([]);
  const [quantify, setQuantify] = useState(1)

  useEffect(() => {
    (async () => {
      const requests = products.map((e) => api.get(`${urlApi}/${e.products ? null : e.cart}`));
      const responses = await Promise.all(requests);
      const data = responses.map((res) => res.data);
      setCart(data);
    })();
  }, [products]);

  function close() {
    closeCart();
  }


  

  

  
  let soma = 0
  return (
    <Container>
      <Button onClick={close}></Button>
      {cart.map((product) => {
        soma += product.price;
          return(
            <Products key={product.id}>
                <ImgProducts src={product.images[0]}/>
                <TextProducts>{product.title}</TextProducts>
                <PriceProducts>R${product.price}</PriceProducts>
                <ButtonAumentar><ImgButtonAumentar/></ButtonAumentar>
                <TextMeioButton>{quantify}</TextMeioButton> 
                <ButtonDiminuir><ImgButtonDiminuir/></ButtonDiminuir>
            </Products>
          )
      })}
      <PriceTextProducts>Total: R${soma.toFixed(2)}</PriceTextProducts>
      <ButtonCompraTotal>
        <TextBtnCompra>Compre</TextBtnCompra>
      </ButtonCompraTotal>
    </Container>
  );
 
};
