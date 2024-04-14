export default defineEventHandler((event) => {
  return {
    query: getQuery(event),
    method: event.method,
    message: 'Hello World GET'
  }
})
