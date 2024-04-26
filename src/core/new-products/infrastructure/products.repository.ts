import axios from 'axios'
import { IProductsRepository } from '../domain/products.repository'

const API_URL = 'https://api.escuelajs.co/api/v1'

const getAllProducts: IProductsRepository['getAllProducts'] = async (body) => {
  const { categoryId, limit, offset, price_max, price_min, title } = body

  const params = new URLSearchParams()

  categoryId && params.append('categoryId', categoryId.toString())
  limit && params.append('limit', limit.toString())
  offset && params.append('offset', offset.toString())
  price_max && params.append('price_max', price_max.toString())
  price_min && params.append('price_min', price_min.toString())
  title && params.append('title', title)

  try {
    const { data } = await axios.get(`${API_URL}/products?${params.toString()}`)
    return data
  } catch (error) {
    throw new Error('Error fetching products')
  }
}

const getSingleProduct: IProductsRepository['getSingleProduct'] = async (
  id
) => {
  try {
    const res = await axios.get(`${API_URL}/products/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Error fetching product')
  }
}

const createProduct: IProductsRepository['createProduct'] = async (
  productData
) => {
  try {
    const res = await axios.post(`${API_URL}/products`, productData)
    window.location.reload()
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct: IProductsRepository['deleteProduct'] = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/products/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Error deleting product')
  }
}

const updateProduct: IProductsRepository['updateProduct'] = async (
  id,
  productData
) => {
  try {
    const res = await axios.put(`${API_URL}/products/${id}`, productData)
    window.location.reload()
    console.log(productData.category, 'PRODUCT DATA FROM REPOSITORY')
    console.log(res.data.category, 'RES DATA FROM REPOSITORY')
    return res.data
    
  } catch (error) {
    throw new Error('Error updating product')
  }
}

export const productsRepository: IProductsRepository = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct
}
