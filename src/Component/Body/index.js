import { useEffect, useState } from "react"
import { api } from "../../Api/api"

export const Body = () =>{
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        api.get("")
        .then((res) => setProducts(res.data))
    }
    useEffect(() => {
        getProducts()
    })
}