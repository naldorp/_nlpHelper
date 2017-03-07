var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');

var entities_date = require('./entities/date');
var entities_location = require('./entities/location');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//enable cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/status', function(req, res) {
    res.json({
        status: 'running'
    });
});

app.get('/', function(req, res) {
    if (req.query.message == undefined) {
        res.json({
            error: "message not specified"
        });
    }
    if (req.query.entities == undefined) {
        res.json({
            error: "entities not specified"
        });
    }

    res.locals.result = {
        message: req.query.message,
        entities: {}
    }


    entities_date(req, res, function(req, res) {
        entities_location(req, res, function(req, res) {
            res.json(res.locals.result);
        })
    });

});

app.set('port', process.env.PORT || config.default_port);

app.listen(app.get('port'), '0.0.0.0', function() {
    console.log('listening on port ' + app.get('port'));
})
