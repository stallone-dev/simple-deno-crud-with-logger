// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { expect } from "@expect";
import { after, before, describe, it } from "@testing";

import { getUserLogApi } from "~api/get-user-log.api.ts";

describe("Get user Log", () => {
        const TEST_USER = "Developer";
        let MOCK_DB: Deno.Kv;

        before(async () => {
                MOCK_DB = await Deno.openKv(":memory:");
        });

        after(async () => {
                await MOCK_DB.close();
        });

        it("Simple interation", async () => {
                const result = await getUserLogApi(TEST_USER, MOCK_DB);

                expect(result).toMatchObject({
                        message: `OK - Logs list of user: ${TEST_USER}`,
                });
        });
});
