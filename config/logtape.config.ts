// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { configure, getConsoleSink, getFileSink } from "@logtape";
import { database } from "~database";

/**
 * Comando global de configuração do LogTape,
 * @see {@link https://logtape.org/manual/config|Configs LogTape} para mais detalhes
 */
export default async (): Promise<void> =>
        await configure({
                // Formas de controle do fluxo de logs,
                // Mais detalhes: https://logtape.org/manual/sinks
                sinks: {
                        console: getConsoleSink(),
                        internalFile: getFileSink("./log/internal-log.log"), // Função para salvar em arquivo local
                        saveOnDB: async (record) => await database.saveLog(record), // Implementação para salvar no database
                },

                // Listiners de monitoramento dos logs
                // Mais detalhes: https://logtape.org/manual/categories
                loggers: [
                        {
                                category: ["route"],
                                level: "info",
                                sinks: ["console", "saveOnDB"],
                        },
                        {
                                category: ["internal"],
                                level: "debug",
                                sinks: ["console", "internalFile"],
                        },
                        {
                                category: ["database"],
                                level: "debug",
                                sinks: ["console"],
                        },
                ],
        });
