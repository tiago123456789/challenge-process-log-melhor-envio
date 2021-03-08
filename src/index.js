const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/../.env") });
const logger = require("./configs/Logger");
const yargs = require('yargs');
const processLogFileService = require("./factories/ProcessLogFileMetricServiceFactory")();

const options = yargs
 .usage(`Usage: ${process.env.INSTRUCTION_COMMAND} <command>`)
 .option("p", { alias: "path", describe: "Path log file ", type: "string", demandOption: true })
 .argv;

(async () => {
    try {
        logger.info("Initialize processement of logs");
        await processLogFileService.process(options.path);
        logger.info("finished processement of logs");
    } catch(error) {
        logger.error(error);
        process.exit();
    }
})();
