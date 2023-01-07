export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
        console.log('a')
    return { root: true }
  })
}
