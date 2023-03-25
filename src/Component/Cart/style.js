import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai"

export const Container = styled.div` 
    background-color: #FFF2CC;
    height: 100vh;
    width: 400px;
    position: fixed;
    right: 0;
    z-index: 10000;
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
    background-color: #E4DCCF;
    height: 100px;
    width: 350px;
    margin: 50px 20px;
`

export const ButtonCompra = styled.button`
    position: fixed;
    top: 915px;
    margin-left: 100px;
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

