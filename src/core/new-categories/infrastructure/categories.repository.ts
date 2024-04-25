import axios from 'axios'
import { ICategoriesRepository } from '../domain/categories.repository'

const API_URL = 'https://api.escuelajs.co/api/v1'

const getAllCategories: ICategoriesRepository['getAllCategories'] =
  async () => {
    try {
      const res = await axios.get(`${API_URL}/categories`)
      return res.data
    } catch (error) {
      throw new Error('Error fetching categories')
    }
  }

const uploadCategory: ICategoriesRepository['uploadCategory'] = async (
  categoryData
) => {
  try {
    const res = await axios.post(`${API_URL}/categories`, categoryData)
    return res.data
  } catch (error) {
    throw new Error('Error uploading category')
  }
}

const getProductsByCategory: ICategoriesRepository['getProductsByCategory'] =
  async (categoryId) => {
    try {
      const res = await axios.get(
        `${API_URL}/categories/${categoryId}/products`
      )
      return res.data
    } catch (error) {
      throw new Error('Error fetching products by category')
    }
  }

export const categoriesRepository: ICategoriesRepository = {
  getAllCategories,
  uploadCategory,
  getProductsByCategory
}
