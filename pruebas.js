/**
 * Created by Miguel on 19/02/2017.
 */

var sumario = require('./sumarioboe-json'),
    indice = "";

sumario('20140214',function(resultado){
    var indice = resultado;
    console.log(indice);
});




