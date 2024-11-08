// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { Router } from "@oak";

export { mainRoute };

const mainRoute = new Router()
        .get("/", () => {})
        .post("/foo", () => {})
        .post("/bar", () => {})
        .get("/getlog", () => {});
