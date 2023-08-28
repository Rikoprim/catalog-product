import { joinURL, withQuery } from 'ufo'
import { createError } from 'h3'

export default defineEventHandler(async (event) => {
  const requestedWith = getRequestHeader(event, 'x-requested-with')

  if (requestedWith !== 'XMLHttpRequest') {
    throw createError({
      statusCode: 403,
      message: 'Forbidden Access',
    })
  }

  const { apiUrl } = useRuntimeConfig()
  const path = getRouterParam(event, 'path') ?? ''

  event.node.req.headers['Content-Type'] = 'application/json'

  const queryParam = getQuery(event)

  return await proxyRequest(
    event,
    withQuery(joinURL('http://localhost:4000', '/product', path), queryParam)
  )
})
