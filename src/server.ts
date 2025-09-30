import fastify from "fastify";
import routes from "./routes.js"
import swagger from "@fastify/swagger"
import swaggerUI from "@fastify/swagger-ui"

const app = fastify();

await app.register(import('@fastify/swagger'))

declare module "fastify"

app.register(routes);

app.listen({port: 3333, host: "0.0.0.0"}).then(() => {
    console.log('Server is running');
}) 

