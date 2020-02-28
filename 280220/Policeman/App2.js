'use strict';
var util = require('util');

class Person {
    constructor() {
        this.firstname = 'John';
        this.lastname = 'Doe'; 
    }
}


class Policeman extends Person {
    constructor() {
        super();
        this.badgenumber = '1234';
    }
    greet() {
        console.log(`Hello ${this.firstname} ${this.lastname}, Badgenumber: ${this.badgenumber}`);
    }   
}

var officer = new Policeman(); 
officer.greet();

//Ver video What the heck is the event loop anyway? Philip Roberts