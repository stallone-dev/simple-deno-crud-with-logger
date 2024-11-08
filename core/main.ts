// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { Application } from "@oak";
import { mainRoute } from "./router.ts";
import logtapeConfig from "~configLogger";

const PORT = Number(Deno.env.get("APP_PORT")) || 8080;

await logtapeConfig();

const app = new Application();

app.use(mainRoute.routes());
app.use(mainRoute.allowedMethods());

// deno-lint-ignore no-console
console.log(`Deno with logger example: http://localhost:${PORT}`);

await app.listen({ port: PORT });
