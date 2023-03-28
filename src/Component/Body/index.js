import { useEffect, useState } from "react"
import { api } from "../../Api/api"

import "./style"
import { Container, DescriptionProduct, ImgProduct, PriceProduct, Product, TitleProduct, Btn, ImgButton } from "./style"

export const Body = ({addProducts, counter, setCounter}) =>{
    const [products, setProducts] = useState([])

    const getProducts = async () => {
       await api.get("")
        .then((res) => setProducts(res.data.products))
    }
    useEffect(() => {
        getProducts()
    },[])

    function addCart(id, addcounter){
        addProducts(id)
        setCounter(addcounter + 1)
    }

    return(
        <Container>
         { products.map((product) => {
            return(
                <Product key={product.id}>
                <ImgProduct src={product.images[0]}/>
                <TitleProduct>{product.title}</TitleProduct>
                <DescriptionProduct>{product.description}</DescriptionProduct>
                <PriceProduct>R${product.price}</PriceProduct>
                <Btn onClick={() => addCart(product.id, counter)} ><ImgButton/></Btn>
            </Product>
            )
         })} 
        </Container>
    )
}