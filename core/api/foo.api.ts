// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal
export { fooApi };

const fooApi = (user: string, data: string) => {
        return {
                user: user,
                data: data,
                time: Date.now(),
                bar: "FOOTAGE " + crypto.randomUUID(),
        };
};
