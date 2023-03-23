import axios from 'axios'


const urlApi = "https://dummyjson.com/products"

export const api = axios.create({
    baseURL: urlApi
})