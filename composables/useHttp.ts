import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

type CustomFetchOptions<T> = UseFetchOptions<T> & {
  excludeInterceptor?: number[]
}

export async function useHttp<T>(
  url: string,
  opts: CustomFetchOptions<T> = {}
) {
  const { excludeInterceptor, ...options } = opts
  const defaults: UseFetchOptions<T> = {
    onRequest({ options }) {
      options.headers = new Headers(options.headers)
      options.headers.set('X-Requested-With', 'XMLHttpRequest')
    },

    async onResponseError({ response }) {
      const excludedInterceptor = (statusCode: number): boolean => {
        if (!excludeInterceptor) return false

        return excludeInterceptor.includes(statusCode)
      }

      if (!excludedInterceptor(response.status)) {
        if (response.status === 422) {
          showError({
            statusCode: 422,
            statusMessage: response._data.messages[0],
          })
        }

        if (response.status === 401) {
          showError({
            statusCode: 401,
            statusMessage: 'Your session has expired, please log in',
          })
        }

        if (response.status === 403) {
          showError({
            statusCode: 403,
            statusMessage:
              'Your Account is not permitted to request to some endpoints',
          })
        }

        if (response.status >= 500) {
          showError({
            statusCode: 500,
            statusMessage:
              'Were sorry but were having some technical difficulties. please try again later',
          })
        }
      }
    },
  }

  const params = defu(options, defaults)

  return await useFetch(url, params)
}
