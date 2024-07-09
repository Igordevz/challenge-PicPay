import fastify from "fastify";
import router from "./router";

const app = fastify();

app.register(router)

app.listen({
  port: 8080,
}).then(() => {
  console.log("http server running")
})