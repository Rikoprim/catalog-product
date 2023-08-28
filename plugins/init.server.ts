import type { Pinia } from 'pinia'

export default defineNuxtPlugin(async ({ $pinia }) => {
  if (!process.server) return

  const { getProduct } = useProductStore($pinia as Pinia)

  await getProduct()
})
