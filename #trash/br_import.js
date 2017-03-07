console.log("test");

var fs = require('fs');

var fs = require('fs');
var obj;
fs.readFile('./br_cities.json', 'utf8', function(err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    var stream = fs.createWriteStream("./br_cities_final.json");

    stream.once('open', function(fd) {
        stream.write("[");
        for (var i = 0; i < obj.estados.length; i++) {
            for (var j = 0; j < obj.estados[i].cidades.length; j++) {
                stream.write('{"q":"' + obj.estados[i].cidades[j].toLowerCase() + '", "type":"city", "details":{"name": "'+obj.estados[i].cidades[j]+'","state":"'+obj.estados[i].nome+'"}},');
            }
        }
        stream.write("]");
        stream.end();
    });

});
