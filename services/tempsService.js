var fs = require('fs');

var tempsFilePatch = 'db/temps.json';

var loadFileTemps = function() {
    var fileData = fs.readFileSync(tempsFilePatch, 'utf8');
    var temps = JSON.parse(fileData);
    return temps;
}

var saveFileTemps = function(temps) {
    var data = JSON.stringify(temps);
    fs.writeFileSync(tempsFilePatch, data, 'utf8');
}

var getTemps = function() {
    var temps = loadFileTemps();
    return temps;
}

var saveTemp = function(newTemp) {
    var temps = loadFileTemps();
    temps.push(newTemp);
    saveFileTemps(temps);
}


module.exports = {
    getTemps: getTemps,
    saveTemp: saveTemp
}