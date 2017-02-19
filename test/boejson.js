/**
 * Created by Miguel on 07/02/2017.
 */

var expect = require('chai').expect;
var should = require('chai').should;
var assert = require('chai').assert;




console.log('YYYYMMDD =' + yyyymmdd);

describe('El formateador de la fecha', function(){

    it('-Debe crear la variable fecha de tipo date.', function(){
        expect(fecha).be.a('date');
    });

    it('-Debe crear la variable año y asignarle el valor del año en curso en formato yyyy',function(){
        expect(ano).to.have.lengthOf(4);
    });

    it('-Debe crear la variable mes y asignarle el valor del mes en curso en formato mm',function(){
        expect(mes).to.have.lengthOf(2);
    });

    it('-Debe crear la variable dia y asignarle el valor del dia en curso en formato dd',function(){
        expect(dia).to.have.lengthOf(2);
    });
    it('-Debe crear la variable yyyymmdd y asignarle el valor de la concatenacion de año, mes y dia',function(){
        expect(yyyymmdd).to.have.lengthOf(8);
    });
});


