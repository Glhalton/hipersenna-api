import fastify from "fastify";
import routes from "./routes";

const app = fastify();

app.register(routes);

app.listen({port: 8080}).then(() => {
    console.log('Server is running');
}) 

