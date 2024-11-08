// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { expect } from "@expect";
import { after, before, describe, it } from "@testing";
import { database } from "~database";

describe("Database Operations", () => {
        const TEST_USER = "Developer";
        const TEST_LOG = { any: "thing", zeta: "LOG" };
        let MOCK_DB: Deno.Kv;

        before(async () => {
                MOCK_DB = await Deno.openKv(":memory:");
        });

        after(async () => {
                await MOCK_DB.close();
        });

        it("Simple save Log", async () => {
                const result = await database.saveLog({
                        rawMessage: "TESTE TESTE",
                        properties: { user: TEST_USER, ...TEST_LOG },
                }, MOCK_DB);

                expect(result).not.toThrow();
        });

        it("Simple get log", async () => {
                const result = await database.getLogByUser({ user: TEST_USER }, MOCK_DB);

                expect(result).toMatchObject([{ message: "TESTE TESTE" }]);
        });

        it("Not send user on get log", async () => {
                const result = await database.getLogByUser({ user: "" }, MOCK_DB);

                expect(result).toMatchObject({
                        message: `User not found`,
                        result: new Error("User not found"),
                });
        });
});
