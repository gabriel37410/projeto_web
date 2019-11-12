var fs = require('fs');

var luzsFilePatch = 'db/luzs.json';

var loadFileLuzs = function() {
    var fileData = fs.readFileSync(luzsFilePatch, 'utf8');
    var luzs = JSON.parse(fileData);
    return luzs;
}

var saveFileLuzs = function(luzs) {
    var data = JSON.stringify(luzs);
    fs.writeFileSync(luzsFilePatch, data, 'utf8');
}

var getLuzs = function() {
    var luzs = loadFileLuzs();
    return luzs;
}

var saveLuz = function(newLuz) {
    var luzs = loadFileLuzs();
    luzs.push(newLuz);
    saveFileLuzs(luzs);
}


module.exports = {
    getLuzs: getLuzs,
    saveLuz: saveLuz
}