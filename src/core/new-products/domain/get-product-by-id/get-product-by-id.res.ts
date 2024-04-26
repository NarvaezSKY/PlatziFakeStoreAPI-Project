export interface IGetSingleProductResponse {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
  categoryId: number
}

interface Category {
  name: string
  image: string
  creationAt: string
  updatedAt: string
}
