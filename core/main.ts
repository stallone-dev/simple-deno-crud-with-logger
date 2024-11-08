// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { Application } from "@oak";
import { mainRoute } from "./router.ts";

const PORT = Number(Deno.env.get("APP_PORT")) ?? 8080;

const app = new Application();

app.use(mainRoute.routes());
app.use(mainRoute.allowedMethods());

await app.listen({ port: PORT });
