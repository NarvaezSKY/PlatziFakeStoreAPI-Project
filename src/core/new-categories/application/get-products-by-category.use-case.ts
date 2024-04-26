import { ICategoriesRepository } from '../domain/categories.repository'

export const getProductByCategoryUseCase = (
  repository: ICategoriesRepository
) => repository.getProductsByCategory
