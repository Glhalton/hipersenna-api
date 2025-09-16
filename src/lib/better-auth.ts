import { fastifyCors } from "@fastify/cors";
import { FastifyInstance } from "fastify";
import { auth } from "./auth";

export default function betterAuthServer(app: FastifyInstance) {
  app.route({
    method: ["GET", "POST"],
    url: "/api/auth/*",
    async handler(req, rep) {
      try {
        // Construct request URL
        const url = new URL(req.url, `http://${req.headers.host}`);
        
        // Convert fastify headers to standard object
        const headers = new Headers();
        Object.entries(req.headers).forEach(([key, value]) => {
          if (value) headers.append(key, value.toString());
        });

        // Create fetch API-compatible request
        const request = new Request(url.toString(), {
          method: req.method,
          headers,
          body: req.body ? JSON.stringify(req.body) : undefined,
        });

        // Process authentication request
        const response = await auth.handler(request);

        // Forward response to client
        rep.status(response.status);
        response.headers.forEach((value, key) => rep.header(key, value));
        rep.send(response.body ? await response.text() : null);

      } catch (error:any) {
        app.log.error("Authenticate Error: ", error);
        rep.status(500).send({
          error: "Internal authenticate error",
          code: "AUTH_FAILURE"
        })
      }
    }
  })

  app.register(fastifyCors, {
    origin: process.env.CLIENT_ORIGIN || "https://k0t2cv6k-3333.brs.devtunnels.ms/",
    methods: ["GET", "POST"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With"
    ],
    credentials: true,
    maxAge: 86400
  })
}