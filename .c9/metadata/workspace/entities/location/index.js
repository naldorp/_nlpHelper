{"filter":false,"title":"index.js","tooltip":"/entities/location/index.js","undoManager":{"mark":99,"position":99,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":0},"action":"insert","lines":["","    if (entities.indexOf('date') > -1) {","        db.connect(_connectionString, function(err, db) {","            if (err) console.error(err);","","            db.collection('date').find({","                \"$text\": {","                    \"$search\": message","                }","            }, {","                score: {","                    $meta: \"textScore\"","                }","            }).sort({","                score: {","                    $meta: \"textScore\"","                }","            }).toArray(function(err, items) {","                if (err) console.error(err);","","                if (items.length > 0) {","                    res.result.entities.date = {","                        \"name\": items[0].details.name,","                        \"value\": items[0].details.expression","                    }","                }","            })","        });","    }",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["var db = require('mongodb').MongoClient;","var _connectionString = 'mongodb://localhost:27017/nlpHelper';","","module.exports = function(req, res, callback) {","    console.log('testando...');","    var message = req.query.message;","    console.log('Message:', message);","","    var entities = req.query.entities.split(',');","    if (entities.indexOf('location') > -1) {","        db.connect(_connectionString, function(err, db) {","            if (err) console.error(err);","","            db.collection('location').find({","                \"$text\": {","                    \"$search\": message","                }","            }, {","                score: {","                    $meta: \"textScore\"","                }","            }).sort({","                score: {","                    $meta: \"textScore\"","                }","            }).toArray(function(err, items) {","                if (err) console.error(err);","","                if (items.length > 0) {","                    res.result.entities[\"location\"] = [items[0].details.name];","                }","                ","                callback();","            })","        });","    }","}",""],"id":4}],[{"start":{"row":40,"column":4},"end":{"row":68,"column":0},"action":"remove","lines":["if (entities.indexOf('date') > -1) {","        db.connect(_connectionString, function(err, db) {","            if (err) console.error(err);","","            db.collection('date').find({","                \"$text\": {","                    \"$search\": message","                }","            }, {","                score: {","                    $meta: \"textScore\"","                }","            }).sort({","                score: {","                    $meta: \"textScore\"","                }","            }).toArray(function(err, items) {","                if (err) console.error(err);","","                if (items.length > 0) {","                    res.result.entities.date = {","                        \"name\": items[0].details.name,","                        \"value\": items[0].details.expression","                    }","                }","            })","        });","    }",""],"id":5}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":31},"action":"remove","lines":["console.log('testando...');"],"id":6}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "],"id":7}],[{"start":{"row":3,"column":47},"end":{"row":4,"column":0},"action":"remove","lines":["",""],"id":8}],[{"start":{"row":5,"column":4},"end":{"row":5,"column":37},"action":"remove","lines":["console.log('Message:', message);"],"id":9}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "],"id":10}],[{"start":{"row":4,"column":36},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":11}],[{"start":{"row":4,"column":36},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":12}],[{"start":{"row":5,"column":49},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"insert","lines":["r"],"id":14}],[{"start":{"row":30,"column":26},"end":{"row":30,"column":27},"action":"insert","lines":["e"],"id":15}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":["s"],"id":16}],[{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":[","],"id":17}],[{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":["r"],"id":18}],[{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":["e"],"id":19}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":["q"],"id":20}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":21}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "],"id":22}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":8},"action":"insert","lines":["    "],"id":23}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":12},"action":"insert","lines":["    "],"id":24}],[{"start":{"row":26,"column":12},"end":{"row":26,"column":16},"action":"insert","lines":["    "],"id":25}],[{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["c"],"id":26}],[{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":["o"],"id":27}],[{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["n"],"id":28}],[{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["s"],"id":29}],[{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":["o"],"id":30}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["l"],"id":31}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["e"],"id":32}],[{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["."],"id":33}],[{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["l"],"id":34}],[{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["o"],"id":35}],[{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["g"],"id":36}],[{"start":{"row":26,"column":27},"end":{"row":26,"column":29},"action":"insert","lines":["()"],"id":37}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"insert","lines":["r"],"id":38}],[{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["e"],"id":39}],[{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["s"],"id":40}],[{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"insert","lines":["."],"id":41}],[{"start":{"row":26,"column":32},"end":{"row":26,"column":33},"action":"insert","lines":["r"],"id":42}],[{"start":{"row":26,"column":33},"end":{"row":26,"column":34},"action":"insert","lines":["e"],"id":43}],[{"start":{"row":26,"column":34},"end":{"row":26,"column":35},"action":"insert","lines":["s"],"id":44}],[{"start":{"row":26,"column":35},"end":{"row":26,"column":36},"action":"insert","lines":["u"],"id":45}],[{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"insert","lines":["l"],"id":46}],[{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"insert","lines":["t"],"id":47}],[{"start":{"row":26,"column":39},"end":{"row":26,"column":40},"action":"insert","lines":[";"],"id":48}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":38},"action":"remove","lines":["res.result"],"id":49},{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"insert","lines":["`"]}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"remove","lines":["`"],"id":50}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":30},"action":"insert","lines":["''"],"id":51}],[{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["t"],"id":52}],[{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["e"],"id":53}],[{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"insert","lines":["s"],"id":54}],[{"start":{"row":26,"column":32},"end":{"row":26,"column":33},"action":"insert","lines":["t"],"id":55}],[{"start":{"row":26,"column":33},"end":{"row":26,"column":34},"action":"insert","lines":["i"],"id":56}],[{"start":{"row":26,"column":34},"end":{"row":26,"column":35},"action":"insert","lines":["n"],"id":57}],[{"start":{"row":26,"column":35},"end":{"row":26,"column":36},"action":"insert","lines":["g"],"id":58}],[{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"insert","lines":["."],"id":59}],[{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"insert","lines":["."],"id":60}],[{"start":{"row":26,"column":38},"end":{"row":26,"column":39},"action":"insert","lines":["."],"id":61}],[{"start":{"row":26,"column":16},"end":{"row":26,"column":42},"action":"remove","lines":["console.log('testing...');"],"id":62}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":16},"action":"remove","lines":["                "],"id":63}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":64}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["l"],"id":65}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["o"],"id":66}],[{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":["c"],"id":67}],[{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":["a"],"id":68}],[{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"remove","lines":["a"],"id":69}],[{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"remove","lines":["c"],"id":70}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"remove","lines":["o"],"id":71}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"remove","lines":["l"],"id":72}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["."],"id":73}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["l"],"id":74}],[{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":["o"],"id":75}],[{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":["c"],"id":76}],[{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"insert","lines":["a"],"id":77}],[{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"insert","lines":["l"],"id":78}],[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"insert","lines":["s"],"id":79}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"remove","lines":["s"],"id":80}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":["q"],"id":81}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"remove","lines":["q"],"id":82}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":["s"],"id":84}],[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["c"],"id":85}],[{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["o"],"id":86}],[{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"insert","lines":["n"],"id":87}],[{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"insert","lines":["s"],"id":88}],[{"start":{"row":29,"column":20},"end":{"row":29,"column":21},"action":"insert","lines":["o"],"id":89}],[{"start":{"row":29,"column":21},"end":{"row":29,"column":22},"action":"insert","lines":["l"],"id":90}],[{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"insert","lines":["e"],"id":91}],[{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"insert","lines":["."],"id":92}],[{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"insert","lines":["l"],"id":93}],[{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"insert","lines":["o"],"id":94}],[{"start":{"row":29,"column":26},"end":{"row":29,"column":27},"action":"insert","lines":["g"],"id":95}],[{"start":{"row":29,"column":27},"end":{"row":29,"column":29},"action":"insert","lines":["()"],"id":96}],[{"start":{"row":29,"column":28},"end":{"row":29,"column":45},"action":"insert","lines":["res.locals.result"],"id":97}],[{"start":{"row":29,"column":46},"end":{"row":29,"column":47},"action":"insert","lines":[";"],"id":98}],[{"start":{"row":29,"column":16},"end":{"row":29,"column":47},"action":"remove","lines":["console.log(res.locals.result);"],"id":99}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":16},"action":"remove","lines":["                "],"id":100}],[{"start":{"row":28,"column":17},"end":{"row":29,"column":0},"action":"remove","lines":["",""],"id":101}]]},"ace":{"folds":[],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":28,"column":17},"end":{"row":28,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1488845124520,"hash":"b9a5fe9c5bc14e6ac0677b89440efe3fb8dc6a72"}