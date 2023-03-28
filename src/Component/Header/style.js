import styled from "styled-components";
import {BsCart4} from "react-icons/bs";

export const HeaderPrincipal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 50px;
    background-color: #FFF2CC;
`

export const SubHeader = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`
export const ImgLogo = styled.img`
    width: 30%;
`

export const TitleLogo = styled.p`
    font-size: 20px;
    color: darkblue;
    font-weight: bold;
`

export const BtnCarrinho = styled.button`
    background-color: #FFF2CC;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
`

export const NumCarrinho = styled.p`
    position: relative;
    top: -20px;
    right: 40px;
    background-color: black;
    border: 2px solid black;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #FFF2CC;
`

export const ImgCarrinho = styled(BsCart4)`
    height: 50px;
    width: 50px;
    margin-right: 30px;
    color: darkblue;
`