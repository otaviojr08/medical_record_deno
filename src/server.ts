import { Application } from "jsr:@oak/oak";
import peopleRouter from "./routes/api.routes.ts";
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

const app = new Application();
const PORT = 8369;

// Configurar o CORS
app.use(oakCors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(peopleRouter.routes());
app.use(peopleRouter.allowedMethods());

console.log(`Server is running on http://localhost:${PORT}`);

await app.listen({ port: PORT });
