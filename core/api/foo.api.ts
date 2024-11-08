// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { internalLogger } from "~logger";

export { fooApi };

const logger = internalLogger.getChild("fooApi"); // LogTape

/**
 * API genérica 2
 */
const fooApi = (user: string, data: unknown) => {
        logger.debug("[API]: User {user} footage data: {data}", {
                user: user,
                data: data,
                time: Date.now(),
        });

        const result = {
                user: user || "guest",
                data: data || { info: "" },
                time: Date.now(),
                bar: "FOOTAGE " + crypto.randomUUID(),
        };

        logger.debug("[API]: User {user}, recived this data: {data}", {
                user: user,
                data: result,
        });

        return result;
};
