import create from 'zustand';
import { Product } from '../../../core/products/domain/product.interface';

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

export const useProducts = () => useProductStore((state) => state.products);
export const useSetProducts = () => useProductStore((state) => state.setProducts);