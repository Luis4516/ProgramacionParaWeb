var Emitter = require('./Emiter');

var emtr = new Emitter(); //Lo invoco
//Empiezo a meter handlers
emtr.on('greet', function() {
    console.log('Somewhere, someone said hello.');
});
emtr.on('greet', function() {
    console.log('A greeting ocurred!.');
});
emtr.on('greet', function() {
    console.log('greet.');
});

console.log('Hello');
emtr.emit('greet'); //Al invocarlo una vez llama dos veces