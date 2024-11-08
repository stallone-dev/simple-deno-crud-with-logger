// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { database } from "~database";

export { getUserLogApi };

const getUserLogApi = async (user: string) => {
        return await database.getLogByUser({ user: user });
};
