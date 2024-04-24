import { create } from 'zustand'
import { getAllProductsUseCase } from '../../../core/new-products/application/get-all-products.use-case'
import { productsRepository } from '../../../core/new-products/infrastructure/products.repository'
import {
  IGetAllProductsReq,
  IGetAllProductsRes
} from '../../../core/new-products/domain/get-all-products'

type States = {
  products: IGetAllProductsRes[]
  loading: boolean
}

type Actions = {
  getAllProducts: (body: IGetAllProductsReq) => void
}

type Store = States & Actions

export const useProductStore = create<Store>((set) => ({
  products: [],
  loading: true,
  getAllProducts: async (body) => {
    const data = await getAllProductsUseCase(productsRepository)(body)
    set({ products: data, loading: false })
  }
}))
