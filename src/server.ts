import fastify from "fastify";

const app = fastify();

app.get('/', async (require, reply) => {
 return reply.send('Servidor rodando')
})

app.listen({port: 8080}).then(() => {
    console.log('Server is running');
}) 

