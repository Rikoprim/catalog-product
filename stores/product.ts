import { defineStore } from 'pinia'
import type { IProduct, ListProduct } from 'types/product_response'

interface AuthStorePropeties {
  listProducts: ListProduct | []
  product: IProduct | null
}

export const useProductStore = defineStore('product', {
  state: (): AuthStorePropeties => {
    return {
      listProducts: [],
      product: null,
    }
  },
  actions: {
    async getProduct() {
      try {
        const _fetch = useRequestFetch()

        const _data = await _fetch<ListProduct>(
          'http://localhost:4000/product',
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        this.listProducts = _data
      } catch (error) {
        console.log(error)
      }
    },
    async deleteProduct(id) {
      try {
        await useFetch<unknown>(`http://localhost:4000/product/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getDetailProduct(id) {
      try {
        const { data } = await useFetch<unknown>(
          `http://localhost:4000/product/${id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        this.product = data.value as IProduct
      } catch (error) {
        console.log(error)
      }
    },
  },
})
