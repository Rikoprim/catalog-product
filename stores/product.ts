import API_ENDPOINT from '~/misc/api_endpoint'
import { defineStore } from 'pinia'
import type { IProduct, ListProduct } from 'types/product_response'

interface AuthStorePropeties {
  listProducts: ListProduct | []
  product: IProduct | null
  editProduct: IProduct | null
  filter: string
}

export const useProductStore = defineStore('product', {
  state: (): AuthStorePropeties => {
    return {
      listProducts: [],
      product: null,
      editProduct: null,
      filter: '',
    }
  },
  actions: {
    clearValues() {
      this.editProduct = null
    },
    insertFilter(val) {
      this.filter = val
    },
    async getProduct() {
      try {
        const _fetch = useRequestFetch()

        const _data = await _fetch<ListProduct>(API_ENDPOINT.PRODUCT.API, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        this.listProducts = _data
      } catch (error) {
        console.log(error)
      }
    },
    async deleteProduct(id) {
      try {
        await useFetch<unknown>(`${API_ENDPOINT.PRODUCT.API}/${id}`, {
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
          `${API_ENDPOINT.PRODUCT.API}/${id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        this.product = data.value as IProduct
        this.editProduct = data.value as IProduct
      } catch (error) {
        console.log(error)
      }
    },
    async updateProduct(payload) {
      try {
        const { data } = await useFetch<unknown>(
          `${API_ENDPOINT.PRODUCT.API}/${payload.id}`,
          {
            method: 'PUT',
            body: payload,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
      } catch (error) {
        console.log(error)
      }
    },
  },
})
