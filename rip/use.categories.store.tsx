// import {create} from 'zustand'
// import { Category } from '../src/core/categories/domain/category.interface'

// interface CategoryStore {
//   categories: Category[]
//   setCategories: (categories: Category[]) => void
// }

// const useCategoryStore = create<CategoryStore>((set) => ({
//   categories: [],
//   setCategories: (categories) => set({ categories })
// }))

// export const useCategories = () => useCategoryStore((state) => state.categories)
// export const useSetCategories = () =>
//   useCategoryStore((state) => state.setCategories)
