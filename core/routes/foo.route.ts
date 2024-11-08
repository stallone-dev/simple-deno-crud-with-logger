// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import type { Context } from "@oak";
import { fooApi } from "~api/foo.api.ts";

export { fooRoute };

const fooRoute = async ({ request, response }: Context) => {
        // deno-lint-ignore no-explicit-any
        const { user, data } = await request.body.json() as any;

        const result = fooApi(user, data);

        response.body = JSON.stringify(result);
};
