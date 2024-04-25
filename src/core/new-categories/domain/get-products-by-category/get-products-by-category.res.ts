export interface IGetProductsByCategoryRes {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
}

interface Category {
  id: number
  name: string
  image: string
}
