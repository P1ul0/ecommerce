import { useEffect, useState } from "react"
import { api } from "../../Api/api"
import {BsFillCartPlusFill} from "react-icons/bs"
import "./style.css"

export const Body = ({addProducts}) =>{
    const [products, setProducts] = useState([])

    const getProducts = async () => {
       await api.get("")
        .then((res) => setProducts(res.data.products))
    }
    useEffect(() => {
        getProducts()
    },[])

    function addCart(id){
        addProducts(id)
    }


    
    return(
        <div className="conteiner">
         { products.map((product) => {
            return(
                <div className="product" key={product.id}>
                <img className="img_product" src={product.images[0]}/>
                <p className="title_product">{product.title}</p>
                <p className="description_product">{product.description}</p>
                <p className="price_product">R${product.price}</p>
                <button className="btn" onClick={() => addCart(product.id)} ><BsFillCartPlusFill className="add_products" /></button>
            </div>
            )
         })} 
        </div>
    )
}