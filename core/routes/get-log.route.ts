// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import type { Context } from "@oak";
import { getUserLogApi } from "~api/get-user-log.api.ts";

export { getUserLogRoute };

const getUserLogRoute = async ({ request, response }: Context) => {
        // deno-lint-ignore no-explicit-any
        const { user } = request.body as any;

        const result = await getUserLogApi(user);

        response.body = JSON.stringify(result);
};
