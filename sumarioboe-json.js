/**
 * Created by Miguel on 07/02/2017.
 * Se le da una fecha en formato string YYYYMMDD y tiene que devolver el sumario del BOE de ese día en JSON
 */

var httpGET = require('request'),
    parseString = require('xml2js').parseString;

module.exports = function sumarioJSON(fecha, callback){
    var ano,mes,dia,yyyymmdd;
    if (fecha == null) {
        fecha = new Date();
        ano = fecha.getFullYear().toString();
        mes = (fecha.getMonth() < 9 ? "0" : "") + (fecha.getMonth() + 1).toString();
        dia = (fecha.getDate() < 10 ? "0" : "") + fecha.getDate().toString();
        yyyymmdd = ano.concat(mes, dia);
    } else yyyymmdd = fecha;

    httpGET('http://boe.es/diario_boe/xml.php?id=BOE-S-' + yyyymmdd,
        function (error, response, body) {
        if (!error && response.statusCode == 200) {
            parseString(body, function (err, result) {
                callback(JSON.stringify(result));
                });
            }
            else callback(error);
        });
};



