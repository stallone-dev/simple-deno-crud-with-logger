// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal
export { fooApi };

const fooApi = (user: string, data: unknown) => {
        return {
                user: user || "guest",
                data: data || { info: "" },
                time: Date.now(),
                bar: "BAR " + crypto.randomUUID(),
        };
};
