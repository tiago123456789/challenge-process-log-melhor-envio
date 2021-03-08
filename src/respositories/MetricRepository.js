const database = require("../configs/Database");

class MetricRepository {

    constructor(collection) {
        this._collection = collection;
    }

    insertMany(registers) {
        return database()
        .then(db => {
            return db.collection(this._collection);
        })
        .then(collection => {
            return new Promise((resolve, reject) => {
                collection.insertMany(registers, {ordered: false}, function(err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    return resolve(result);
                });
            })
        })
    }

}

module.exports = MetricRepository;