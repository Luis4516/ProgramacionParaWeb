var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world';
}
/*
util.inherits(Greetr, EventEmitter); //Heredamos del elemento nodejs
Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new Greetr(); //Generar una nueva instancia de la clase constructura

greeter1.on('greet', function() { //responder al evento mediante una funcion, mete o saca Peventos
    console.log('Someone greeted!');
});

greeter1.greet(); //Se invoca la funcion y manda a llamar greet de la linea 9
*/

util.inherits(Greetr, EventEmitter); 
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr(); 

greeter1.on('greet', function(data) { 
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');

//Cuando utilizo prototype abro un espacio en la clase constructora y puedo mandar datos a .this
//La diferencia entre apply y this es que el primero es un vector y el segundo una cadena de argumentos