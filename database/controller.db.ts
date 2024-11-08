// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal
// deno-lint-ignore-file no-unused-vars explicit-function-return-type no-explicit-any

export { database };

const kv = await Deno.openKv("./database/log.db");

const database = {
        saveLog: saveLog,
        getLogByUser: getLogByUser,
};

async function saveLog({ user, log }: any, db: Deno.Kv = kv) {
        const key = ["log", user, Date.now()];
        const value = log;

        await db.set(key, value);

        return {
                message: "New log saved",
                result: {
                        user: user,
                        log: log,
                },
        };
}

async function getLogByUser({ user }: any, db: Deno.Kv = kv) {
        if (!user) {
                return {
                        message: `User not found`,
                        result: new Error("User not found"),
                };
        }
        const key = ["log", user];

        const consult = db.list({ prefix: key });
        const result = [];

        for await (const item of consult) {
                result.push(item.value);
        }

        return {
                message: `Logs list of User: ${user}`,
                result: result,
        };
}
