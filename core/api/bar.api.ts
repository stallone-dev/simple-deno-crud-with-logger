// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { internalLogger } from "~logger";

export { barApi };

const logger = internalLogger.getChild("barApi"); // LogTape

/**
 * API genérica 2
 */
const barApi = (user: string, data: unknown) => {
        logger.debug("[API]: User {user} bartage data: {data}", {
                user: user,
                data: data,
                time: Date.now(),
        });

        const result = {
                user: user || "guest",
                data: data || { info: "" },
                time: Date.now(),
                bar: "BAR " + crypto.randomUUID(),
        };

        logger.debug("[API]: User {user}, recived this data: {data}", {
                user: user,
                data: result,
        });

        return result;
};
