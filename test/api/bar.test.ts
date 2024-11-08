// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { expect } from "@expect";
import { describe, it } from "@testing";
import { fooApi } from "~api/bar.api.ts";

describe("Bar Route", () => {
        const TEST_USER = "Developer";
        const TEST_DATA = { any: "thing", zeta: "byte" };

        it("Simple interation", async () => {
                const result = await fooApi(TEST_USER, TEST_DATA);

                expect(result).not.toThrow();
        });

        it("Match object", async () => {
                const result = await fooApi(TEST_USER, TEST_DATA);

                expect(result).toMatchObject({
                        user: TEST_USER,
                        data: TEST_DATA,
                        time: Date.now(),
                });
        });

        it("Not send user", async () => {
                const result = await fooApi("", TEST_DATA);

                expect(result).toMatchObject({ user: "guest", data: TEST_DATA });
        });

        it("Not send data", async () => {
                const result = await fooApi(TEST_USER, "");

                expect(result).toMatchObject({ user: TEST_USER, data: { info: "" } });
        });
});
