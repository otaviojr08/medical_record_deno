import { Application } from "jsr:@oak/oak";
import peopleRouter from "./routes/api.routes.ts";

const app = new Application();
const PORT = 8369;

app.use(peopleRouter.routes());
app.use(peopleRouter.allowedMethods());

console.log(`Server is running on http://localhost:${PORT}`);

await app.listen({ port: PORT });
