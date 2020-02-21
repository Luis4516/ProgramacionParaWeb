var Emitter = require('events');
var eventsConfig = require('./config').events;

var emtr = new Emitter();

//Con el autocompletado del evento nos ahorramos errores tipo
emtr.on(eventsConfig.GREET, function() {
    console.log('Somewhere, someone said hello.');
});
emtr.on(eventsConfig.GREET, function() {
    console.log('A greeting ocurred!.');
});

console.log('Hello');
emtr.emit(eventsConfig.GREET);

//Es muy común ver archivos config.js en entornos de desarrollo