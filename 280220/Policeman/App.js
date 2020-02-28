var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}, Badgenumber: ${this.badgenumber}`) 
    //Antes undefined por la linea faltante
}

function Policeman() {
    Person.call(this); //Es parecido al super, se invoca al objeto this
    this.badgenumber = '1234'; //Nuevo atributo
}

util.inherits(Policeman, Person); //Se heredan las clases
var officer = new Policeman(); 
officer.greet(); //Se tiene que invocar al constructor de la superclase

