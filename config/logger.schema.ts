// Create by Stallone L. de Souza (@stallone-dev) - 2024 - License: CC0 1.0 Universal

import { getLogger } from "@logtape";

export { databaseLogger, internalLogger, routeLogger };

/**
 * Logger para verificação das rotas
 */
const routeLogger = getLogger(["route"]);

/**
 * Logger para debug interno
 */
const internalLogger = getLogger(["internal"]);

/**
 * Logger para manuseio do DB
 */
const databaseLogger = getLogger(["database"]);
