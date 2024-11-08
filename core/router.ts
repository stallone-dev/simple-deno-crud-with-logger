// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { Router } from "@oak";
import { basicRoute } from "~route/basic.route.ts";
import { fooRoute } from "~route/foo.route.ts";
import { barRoute } from "~route/bar.route.ts";
import { getUserLogRoute } from "~route/get-log.route.ts";

export { mainRoute };

const mainRoute = new Router()
        .get("/", basicRoute)
        .post("/foo", await fooRoute)
        .post("/bar", await barRoute)
        .get("/getlog/:user", await getUserLogRoute);
