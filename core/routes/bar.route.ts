// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import type { Context } from "@oak";
import { barApi } from "~api/bar.api.ts";

export { barRoute };

const barRoute = ({ request, response }: Context) => {
        // deno-lint-ignore no-explicit-any
        const { user, data } = request.body as any;

        const result = barApi(user, data);

        response.body = JSON.stringify(result);
};
