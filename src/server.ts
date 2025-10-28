import fastify from "fastify";
import routes from "./routes.js";
import swagger from "@fastify/swagger";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

await app.register(fastifyCors, {
  origin: ["*"],
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

await app.register(import("@fastify/swagger"));

declare module "fastify";

app.register(routes);

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server is running");
});
