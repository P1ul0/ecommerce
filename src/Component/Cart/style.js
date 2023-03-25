import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsFillCartPlusFill , BsFillCartDashFill} from "react-icons/bs"


export const Container = styled.div` 
    background-color: rgba(98, 205, 255,0.7);
    height: 100vh;
    width: 400px;
    position: fixed;
    right: 0;
    z-index: 10000;
    filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.7));
`
export const Button = styled(AiOutlineArrowLeft)`
    padding: 10px 10px;
    border: none;
    margin-top: 5px;
    cursor: pointer;
`
export const Products = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 150px;
    width: 350px;
    margin: 50px 20px;
    border-radius: 50px;
    filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.7));
`

export const ImgProducts = styled.img`
    height: 100px;
    width: 100px;
    object-fit: contain;
    position: absolute;
    left: 33px;
`

export const TextProducts = styled.p`
    font-size: 20px;
    font-weight: bolder;
    position: absolute;
    top: -10px;
    left: 150px;
`
export const PriceProducts = styled.p`
    font-size: 20px;
    font-weight: bolder;
    position: absolute;
    top: 40px;
    left: 150px;
`
export const ButtonAumentar = styled.button`
    position: fixed;
    top: 100px;
    left: 190px;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 5px;
    background-color: darkblue;
    cursor: pointer;
`
export const ImgButtonAumentar = styled(BsFillCartPlusFill)`
    height: 20px;
    width: 20px;
    color: white;
`
export const TextMeioButton = styled.p`
    position: fixed;
    top: 93px;
    left: 175px;
    font-size: 15px;
    font-weight: 700;
`

export const ButtonDiminuir= styled.button`
    position: fixed;
    top: 100px;
    left: 140px;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 5px;
    background-color: darkblue;
    cursor: pointer;
`
export const ImgButtonDiminuir = styled(BsFillCartDashFill)`
    height: 20px;
    width: 20px;
    color: white;
`

export const PriceTextProducts = styled.p`
    font-size: 20px;
    font-weight: bolder;
    position: absolute;
    top: 700px;
    left: 10px;
`
export const ButtonCompraTotal = styled.button`
    position: fixed;
    top: 710px;
    margin-left: 168px;
    height: 50px;
    width: 200px;
    border: none;
    border-radius: 100px;
    background-color: darkblue;
    cursor: pointer;

`

export const TextBtnCompra = styled.p`
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
    color: white;
`

