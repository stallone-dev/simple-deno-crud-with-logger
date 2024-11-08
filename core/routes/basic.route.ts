// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import type { Context } from "@oak";

export { basicRoute };

const basicRoute = ({ response }: Context) => {
        response.body = JSON.stringify({ message: "Hello world!" });
};
