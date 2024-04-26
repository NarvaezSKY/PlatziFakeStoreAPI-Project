// import axios from 'axios'
// import { Product } from '../olddomain/product.interface'

// const API_URL = 'https://api.escuelajs.co/api/v1'

// export class ProductsRepository {
//   async getAllProducts(categoryId?: number): Promise<Product[]> {
//     try {
//       let url = `${API_URL}/products`
//       if (categoryId) {
//         console.log(categoryId)
//         url += `?categoryId=${categoryId}`
//       }
//       const response = await axios.get<Product[]>(url)
//       return response.data
//     } catch (error) {
//       console.error('Error fetching products:', error)
//       throw error
//     }
//   }

//   async getProductById(productId: number): Promise<Product> {
//     try {
//       const response = await axios.get<Product>(
//         `${API_URL}/products/${productId}`
//       )
//       return response.data
//     } catch (error) {
//       console.error('Error fetching product by ID:', error)
//       throw error
//     }
//   }

//   async deleteProduct(productId: number): Promise<Product> {
//     try {
//       const response = await axios.delete<Product>(
//         `${API_URL}/products/${productId}`
//       )
//       return response.data
//     } catch (error) {
//       console.error('Error deleting product:', error)
//       throw error
//     }
//   }

//   async createProduct(productData: Product): Promise<void> {
//     try {
//       const response = await axios.post(`${API_URL}/products`, productData)
//       console.log('Product created:', response.data)
//     } catch (error) {
//       console.error('Error creating product:', error)
//       throw error
//     }
//   }

//   async updateProduct(productId: number, productData: Product): Promise<void> {
//     try {
//       const response = await axios.put(
//         `${API_URL}/products/${productId}`,
//         productData
//       )
//       console.log('Product updated:', response.data)
//     } catch (error) {
//       console.error('Error updating product:', error)
//       throw error
//     }
//   }
// }
