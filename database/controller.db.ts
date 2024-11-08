// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal
// deno-lint-ignore-file no-unused-vars explicit-function-return-type no-explicit-any ban-unused-ignore

import { databaseLogger } from "~logger";

export { database };

/**
 * Namespace para controle do database
 */
const database = {
        saveLog: saveLog,
        getLogByUser: getLogByUser,
};

const kv = await Deno.openKv("./database/log.db"); // Database local
const logger = databaseLogger.getChild("logFn"); // Logtape

/**
 * Função para salvar os dados de LOG enviados pelo LogTape
 * @param db Se precisar usar Mock no DB, use este parâmetro
 */
async function saveLog({ rawMessage, properties }: any, db: Deno.Kv = kv) {
        const user = properties.user;
        const key = ["log", user, Date.now()];
        const value = {
                message: rawMessage,
                log: properties,
        };

        logger.debug("[DB]: User {user} try save log: {log} ", {
                user: properties.user,
                log: properties,
        });

        await db.set(key, value);

        logger.info("[DB]: User {user} request is saved!", {
                user: user,
        });
}

/**
 * Função para salvar os dados de LOG enviados pelo LogTape
 * @param db Se precisar usar Mock no DB, use este parâmetro
 */
async function getLogByUser({ user }: any, db: Deno.Kv = kv) {
        logger.debug("[DB]: User {user} requested data", {
                user: user,
        });

        if (!user) {
                const result = {
                        message: `User not found`,
                        result: new Error("User not found"),
                };

                logger.error("[DB]: Request not finished, message: {message} log: {log}", {
                        message: result.message,
                        log: result.result,
                });

                return result;
        }

        const key = ["log", user];

        const consult = db.list({ prefix: key });
        const result = [];

        for await (const item of consult) {
                result.push(item.value);
        }

        logger.info("[DB]: User {user} log request is finished!", {
                user: user,
        });

        return result;
}
