export interface IProduct {
  id: number
  name: string
  type: string
  category: string
  description: string
  price: string
  images: string
}

export type ListProduct = IProduct[]
