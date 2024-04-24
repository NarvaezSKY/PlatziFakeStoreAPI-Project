import axios from 'axios';
import { Category } from '../domain/category.interface';

const API_URL = 'https://api.escuelajs.co/api/v1';

export class CategoryRepository {
  async getAllCategories(): Promise<Category[]> {
    try {
      const response = await axios.get<Category[]>(`${API_URL}/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  async getCategoryById(categoryId: number): Promise<Category> {
    try {
      const response = await axios.get<Category>(`${API_URL}/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching category by ID:', error);
      throw error;
    }
  }

  async uploadCategory(categoryData: Category): Promise<void> {
    try {
      const response = await axios.post(`${API_URL}/categories`, categoryData);
      return response.data;
    } catch (error) {
      console.error('Error fetching category by ID:', error);
      throw error;
    }
  }
}
