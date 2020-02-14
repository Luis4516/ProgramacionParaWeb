
var greet = require('./Greet'); //En una sola funcion se regresó el saludo
greet();

var greet2 = require('./Greet2').greet; //Lo que cambió en este caso fue que se llamó por medio del metodo
greet2();

var greet3 = require('./Greet3'); //Greet regresa la instancia de un objeto
greet3.greet(); //Se accede a greet pero mediante el punto, se necesita para acceder a la notacion o metodo del objeto
greet3.greeting = 'Changed hello world!'; //referencia fisica, los cambios en esa direccion se verán reflejados

var greet3b = require('./Greet3'); //Aqui se demostró lo mencionado en la parte de arriba
greet3b.greet();

var Greet4 = require('./Greet4'); //Finalmente este es utilizado como clase
var grtr = new Greet4();
grtr.greet();