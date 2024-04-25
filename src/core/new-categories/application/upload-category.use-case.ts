import { ICategoriesRepository } from "../domain/categories.repository";

export const uploadCategoryUseCase = (repository: ICategoriesRepository) =>
    repository.uploadCategory