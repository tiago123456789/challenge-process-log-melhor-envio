const winston = require("winston");
const Sentry = require('winston-transport-sentry-node').default;
const moment = require("moment");

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { app: "collect-metrics", timestamp: moment.utc() },
  transports: [
    new Sentry({
      sentry: {
        dsn: process.env.SENTRY_DSN
      },
      level: 'error'
    }),
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({
      name: "process_log.log",
      filename: 'logs/process_log.log',
      level: 'info'
    }),
  ]
});

module.exports = logger;