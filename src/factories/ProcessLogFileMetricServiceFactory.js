
const ProcessLogFileService = require("../services/ProcessLogFileService");
const MetricRepositoryFactory = require("./MetricRepositoryFactory");
const ReadFileStreamFactory = require("./ReadFileStreamFactory");

module.exports = () => {
    return new ProcessLogFileService(
        MetricRepositoryFactory(), 
        ReadFileStreamFactory()
    );
}