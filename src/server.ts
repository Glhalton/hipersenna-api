import fastify from "fastify";
import routes from "./routes.js";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

await app.register(fastifyCors, {
  origin: ["*"],
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Hipersenna-api",
      description: "Documentação da api do Hipersenna",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:3333", description: "Servidor local" }],
  },
});

await app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(routes);

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server is running");
});
