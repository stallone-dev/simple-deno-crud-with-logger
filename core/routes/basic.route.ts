// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import type { Context } from "@oak";
import { routeLogger } from "~logger";

export { basicRoute };

const logger = routeLogger.getChild(["api", "basic"]);

const basicRoute = ({ request, response }: Context) => {
        logger.info("[ROUTE]: IP {user} access basic api", {
                user: request.ip,
                href: request.url.href,
                time: Date.now(),
        });

        response.body = JSON.stringify({ message: "Hello world!" });
};
