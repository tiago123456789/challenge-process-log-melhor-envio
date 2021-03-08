const { ObjectId } = require("mongodb");

class ProcessLogFileService {

    constructor(metricRepository, readFileStream) {
        this._metricRepository = metricRepository;
        this._readFileStream = readFileStream;
    }

    process(filepath) {
        let lines = [];

        if (!this._readFileStream.isExist(filepath)) {
            throw Error(`File ${filepath} is invalid.`);
        }

        return this._readFileStream.read(
            filepath,
            async (line) => {
                lines.push({...JSON.parse(line), _id: ObjectId() });
                if (lines.length == 50) {
                    await this._storeMetrics(lines);
                    lines = [];
                }
            },
            async () => {
                if (lines.length) {
                    await this._storeMetrics(lines);
                }
                process.exit();
            }
        )
    }

    _storeMetrics(metrics) {
       return this._metricRepository.insertMany(metrics);
    }
}

module.exports = ProcessLogFileService;