// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal
// deno-lint-ignore-file ban-unused-ignore

import { getUserLogApi } from "~api/get-user-log.api.ts";
import { routeLogger } from "~logger";

export { getUserLogRoute };

const logger = routeLogger.getChild(["api", "getUserLogApi"]);

// deno-lint-ignore no-explicit-any
const getUserLogRoute = async ({ params, request, response }: any) => {
        const user = params.user;

        logger.info("[ROUTE]: User {user} requested loggers", {
                user: user,
                href: request.url.href,
                time: Date.now(),
        });

        const result = await getUserLogApi(user);

        logger.debug("[ROUTE]: User {user} received {data}", {
                user: user,
                data: result,
                time: Date.now(),
        });

        response.body = JSON.stringify(result);
};
