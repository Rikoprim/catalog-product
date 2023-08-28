import { IProduct } from 'types/product_response'

export const useProduct = () => {
  const addProduct = async (payload: IProduct) => {
    return await useHttp('/api/product', {
      method: 'POST',
      server: false,
      body: payload,
    })
  }
  const updateProduct = async (payload: IProduct) => {
    return await useHttp('/api/product', {
      method: 'PUT',
      server: false,
      body: payload,
    })
  }

  return {
    addProduct,
    updateProduct,
  }
}
