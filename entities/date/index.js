var db = require('mongodb').MongoClient;
var _connectionString = 'mongodb://localhost:27017/nlpHelper';

module.exports = function(req, res, callback) {
    var message = req.query.message;
    var entities = req.query.entities.split(',');
    
    if (entities.indexOf('date') > -1) {
        
        db.connect(_connectionString, function(err, db) {
            if (err) console.error(err);

            db.collection('date').find({
                "$text": {
                    "$search": message
                }
            }, {
                score: {
                    $meta: "textScore"
                }
            }).sort({
                score: {
                    $meta: "textScore"
                }
            }).toArray(function(err, items) {
                if (err) console.error(err);

                if (items.length > 0) {
                    res.locals.result.entities.date = {
                        "name": items[0].details.name,
                        "value": eval(items[0].details.expression)
                    }
                }
                callback(req,res);
            })
        });
    }
}
