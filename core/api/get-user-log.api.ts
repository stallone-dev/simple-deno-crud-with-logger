// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { database } from "~database";
import { internalLogger } from "~logger";

export { getUserLogApi };

const logger = internalLogger.getChild("fooApi"); // LogTape

/**
 * API para captura dos Logs gerados pelo usuário
 * @param db Se precisar usar Mock no DB, use este parâmetro
 */
const getUserLogApi = async (user: string, db?: Deno.Kv) => {
        logger.debug("[API]: User {user} request log", {
                user: user,
                time: Date.now(),
        });

        const result = await database.getLogByUser({ user: user }, db);

        logger.debug("[API]: User {user} recived logs", {
                user: user,
        });

        return {
                message: `OK - Logs list of user: ${user}`,
                data: result,
        };
};
