
import fastify from 'fastify'
import categoryRoutes from './routes/category-routes';
import cors from '@fastify/cors'
import { AppError } from './common/AppError.js'

export const app = fastify()
app.register(cors, {
  origin: '*',
})

app.register(categoryRoutes)

app.setErrorHandler((error, _, reply) => {
 
 if (error instanceof AppError) {
    reply.status(error.statusCode).send({
      status: "error",
      message: error.message,
    });
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})

try {
  await app.listen({ port: 3000 })
} catch (err) {
  console.error(err)
  process.exit(1)
}
