// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import type { Context } from "@oak";
import { fooApi } from "~api/foo.api.ts";
import { routeLogger } from "~logger";

export { fooRoute };

const logger = routeLogger.getChild(["api", "fooApi"]);

const fooRoute = async ({ request, response }: Context) => {
        // deno-lint-ignore no-explicit-any
        const { user, data } = await request.body.json() as any;

        logger.info("[ROUTE]: User {user} send {data}", {
                user: user,
                data: data,
                href: request.url.href,
                time: Date.now(),
        });

        const result = fooApi(user, data);

        logger.debug("[ROUTE]: User {user} received {data}", {
                user: user,
                data: result,
                time: Date.now(),
        });

        response.body = JSON.stringify(result);
};
