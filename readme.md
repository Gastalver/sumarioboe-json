#sumarioboe-json
Pequeño módulo para descargar el sumario del Boletín Oficial del Estado español, en formato XML, y convertirlo a formato JSON para manipularlo a conveniencia en una app basada en nodejs.

La API de Open Data del BOE aparece descrita en un documento pdf que se puede ver [en esta dirección](http://boe.es/datosabiertos/documentos/SumariosBOE_v_1_0.pdf).
## Uso
`sumarioboe-json(fecha, callback)`

**Parámetro fecha**: De tipo string. Si se indica `null` tomará por defecto la fecha del dia.

**callback**: El módulo es asincrono. Hacer un request al servidor de la Agencia del Boletín Estatal tarda varios segundos. La función callback será invocada con el sumario del BOE en formato json como parámetro, una vez recibido.. 

###Ejemplo
Se asigna el sumario de hoy, en formato json, a la variable indice.
```javascript
var sumario = require('./sumarioboe-json'),
    indice = "";

sumario(null,function(resultado){
    indice = resultado;
    console.log(indice);
});
```
Si queremos disponer del sumario de una fecha concreta, simplemente indicamos la fecha como parámetro de tipo string en formato yyyyddmm, tal y como exige la API del BOE.
```javascript
var sumario = require('./sumarioboe-json'),
    indice = "";

sumario('20170214',function(resultado){
    indice = resultado;
    console.log(indice);
});
```
