import axios from 'axios'


export const urlApi = "https://dummyjson.com/products"

export const api = axios.create({
    baseURL: urlApi
})