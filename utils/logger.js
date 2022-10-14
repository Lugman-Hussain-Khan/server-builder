import { createLogger, format, transports } from "winston";
const { printf, combine, timestamp, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`);

const logger = createLogger({
    format: combine(
        colorize(),
        timestamp(),
        logFormat
    ),
    transports: [new transports.Console({ handleExceptions: true })]

});


export default logger;