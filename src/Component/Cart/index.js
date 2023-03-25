
import { Container, Products, Button, ButtonCompra , TextBtnCompra , Img} from "./style";

export const Cart = ({closeCart}) => {
    
    function close(){
        closeCart()
    }

    return(
        <Container>
            <Button onClick={close}></Button>
            <Products>
            </Products>
            <ButtonCompra ><TextBtnCompra>Compre Agora !</TextBtnCompra></ButtonCompra>
        </Container>
    )
}