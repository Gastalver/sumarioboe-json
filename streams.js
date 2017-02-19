/**
 * Created by Miguel on 13/02/2017.
 */


var httpGET = require('request'),
    parseString = require('xml2js').parseString,
    jsonBOE = "";

function yyyymmdd(fecha){
    if (fecha == null) {
        fecha = new Date();
        ano = fecha.getFullYear().toString();
        mes = (fecha.getMonth() < 9 ? "0" : "") + (fecha.getMonth() + 1).toString();
        dia = (fecha.getDate() < 10 ? "0" : "") + fecha.getDate().toString();
    } else if (typeof fecha !== 'string' || fecha.length !== 8) {
        return ("Parámetro erróneo. Debe ser string en formato YYYYMMDD");
    } else {
        ano = fecha.slice(0, 4);
        mes = fecha.slice(4, 6);
        dia = fecha.slice(-2);
    }
    return ano.concat(mes, dia);
}

function sumarioJSON(fecha, callback){
    httpGET('http://boe.es/diario_boe/xml.php?id=BOE-S-' + yyyymmdd(fecha),
        function (erroR, response, body) {
        if (!erroR && response.statusCode == 200) {
            //console.log("BODY:" + body);
            parseString(body, function (err, result) {
                //console.log("PARSESTRING: " + result.error + "\n");
                jsonBOE = JSON.stringify(result);
                //console.log("innerJSONBOE: " + jsonBOE + "\n");
                callback(JSON.stringify(result));
            });
        }
        else {
            callback(erroR);
        }
    });
}

function mycallback(resultado) {
    console.log("resultadoSumarioJson: " + resultado);
}

sumarioJSON('20130225',mycallback);



