import fastify from "fastify";
import routes from "./routes.js"
import swageger from "@fastify/swagger"
import swaggerUI from "@fastify/swagger-ui"

const app = fastify();

await app.register(import('@fastify/swagger'))



app.register(routes);

app.listen({port: 8080}).then(() => {
    console.log('Server is running');
}) 

