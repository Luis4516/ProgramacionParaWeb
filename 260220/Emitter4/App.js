'use strict';

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world';
    }

greet(data) {
    console.log(`${this.greeting}: ${data}`)
    this.emit('greet', data);
    }
}

let data = 'Corona!';
var greeter1 = new Greetr(); 

greeter1.on('greet', function(data) { 
    console.log('Someone greeted!: ' + data);
});

greeter1.greet(data);
