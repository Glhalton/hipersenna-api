import fastify from "fastify";
import "dotenv/config";
import routes from "./routes.js";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastifyCors } from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  ZodTypeProvider,
} from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

await app.register(fastifyCors, {
  origin: ["*"],
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Hipersenna-api",
      description: "Documentação da API do Hipersenna",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [{ url: "http://localhost:3333", description: "Servidor local" }],
  },
  transform: jsonSchemaTransform,
});

await app.after(app.withTypeProvider);

await app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(routes);

app
  .listen({ port: Number(process.env.API_PORT) || 3333, host: "0.0.0.0" })
  .then(() => {
    console.log("Server is running");
  });
