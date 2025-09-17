import fastify from "fastify";
import routes from "./routes.js"
import swageger from "@fastify/swagger"
import swaggerUI from "@fastify/swagger-ui"
import betterAuthServer from "./lib/better-auth.js";

const app = fastify();

await app.register(import('@fastify/swagger'))

app.register(betterAuthServer);

app.register(routes);

app.listen({port: 3333, host: "0.0.0.0" }).then(() => {
    console.log('Server is running');
}) 

