import styled from "styled-components";
import {BsFillCartPlusFill} from "react-icons/bs"

export const Container = styled.div`
    width: 94.5%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 12px;
    padding: 32px 32px;
`

export const Product = styled.div`
    width:400px;
    max-height:auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 50px 24px;
    filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.7));
`

export const ImgProduct = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin-top: 10px;
    border-radius: 5px;
`
export const TitleProduct = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: black;
`

export const DescriptionProduct = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: black;
    margin-left: 20px;
`

export const PriceProduct = styled.p`
    font-size: 20px;
    font-weight: bold;
`

export const Btn = styled.button`
    width: 30%;
    background-color: darkblue;
    border-radius: 200px;
    margin-bottom: 20px;
    cursor: pointer;
`

export const ImgButton = styled(BsFillCartPlusFill)`
    height: 30px;
    width: 50px;
    color: white;
`