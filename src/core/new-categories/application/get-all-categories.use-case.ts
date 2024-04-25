import { ICategoriesRepository } from "../domain/categories.repository"

export const getAllCategoriesUseCase = (repository: ICategoriesRepository) =>
  repository.getAllCategories
