// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { expect } from "@expect";
import { after, before, describe, it } from "@testing";
import { barApi } from "~api/bar.api.ts";

describe("Bar Route", () => {
        const TEST_USER = "Developer";
        const TEST_DATA = { any: "thing", zeta: "byte" };
        let MOCK_DB: Deno.Kv;

        before(async () => {
                MOCK_DB = await Deno.openKv(":memory:");
        });

        after(async () => {
                await MOCK_DB.close();
        });

        it("Simple interation", async () => {
                const result = await barApi(TEST_USER, TEST_DATA);

                expect(result).not.toThrow();
        });

        it("Match object", async () => {
                const result = await barApi(TEST_USER, TEST_DATA);

                expect(result).toMatchObject({
                        user: TEST_USER,
                        data: TEST_DATA,
                        time: Date.now(),
                });
        });

        it("Not send user", async () => {
                const result = await barApi("", TEST_DATA);

                expect(result).toMatchObject({ user: "guest", data: TEST_DATA });
        });

        it("Not send data", async () => {
                const result = await barApi(TEST_USER, "");

                expect(result).toMatchObject({ user: TEST_USER, data: { info: "" } });
        });
});
