// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import type { Context } from "@oak";
import { barApi } from "~api/bar.api.ts";
import { routeLogger } from "~logger";

export { barRoute };

const logger = routeLogger.getChild(["api", "barApi"]);

const barRoute = async ({ request, response }: Context) => {
        // deno-lint-ignore no-explicit-any
        const { user, data } = await request.body.json() as any;

        logger.info("[ROUTE]: User {user} send {data}", {
                user: user,
                data: data,
                href: request.url.href,
                time: Date.now(),
        });

        const result = barApi(user, data);

        logger.debug("[ROUTE]: User {user} received {data}", {
                user: user,
                data: result,
                time: Date.now(),
        });

        response.body = JSON.stringify(result);
};
