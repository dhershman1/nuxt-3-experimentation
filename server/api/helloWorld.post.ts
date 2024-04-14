export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return {
    method: event.method,
    message: 'Hello World POST',
    body
  }
})
