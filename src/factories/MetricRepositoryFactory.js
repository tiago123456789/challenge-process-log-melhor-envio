const App = require("../contants/App");
const MetricRepository = require("../respositories/MetricRepository");

module.exports = () => {
    return new MetricRepository(App.DB_COLLECTIONS.METRICS);
}