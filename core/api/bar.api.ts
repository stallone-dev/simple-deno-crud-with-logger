// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal
export { barApi };

const barApi = (user: string, data: string) => {
        return {
                user: user,
                data: data,
                time: Date.now(),
                bar: "BAR " + crypto.randomUUID(),
        };
};
