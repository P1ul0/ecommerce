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
      const requests = products.map(async (e) => {
        const item = await api.get(`${urlApi}/${e.products ? null : e.cart}`);
        const order = { item : item, quantity: e.quantity }
        return order;
      });
      const responses = await Promise.all(requests);
      const data = responses.map((res) => {
        const order = { item: res.item.data, quantity: res.quantity };
        return order;
      });
      setCart(data);
    })();
  }, [products]);

  function close() {
    closeCart();
  }

  if (!cart || cart.length === 0) {
    return null; 
  }

  let soma = 0
  return (
    <Container>
      <Button onClick={close}></Button>
      {cart.map((product) => {
        if(product !== undefined){
          if(product){
            soma += product?.item.price * product?.quantity;
            return[
              <Products key={product?.item.id}>
                  <ImgProducts src={product?.item.images[0]}/>
                  <TextProducts>{product?.item.title}</TextProducts>
                  <PriceProducts>R${product?.item.price}</PriceProducts>
                  <ButtonAumentar><ImgButtonAumentar/></ButtonAumentar>
                  <TextMeioButton>{product?.quantity}</TextMeioButton> 
                  <ButtonDiminuir><ImgButtonDiminuir/></ButtonDiminuir>
              </Products>
            ]

          }
   
        }
        return []
      })}
      <PriceTextProducts>Total: R${soma.toFixed(2)}</PriceTextProducts>
      <ButtonCompraTotal>
        <TextBtnCompra>Compre</TextBtnCompra>
      </ButtonCompraTotal>
    </Container>
  );
 
};
