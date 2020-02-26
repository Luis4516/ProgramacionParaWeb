var obj = {
    name: 'John Doe',
    greet: function(par, par2) {
        console.log(`Hello ${ this.name } ${par} ${par2}`);
    }
}

var par = `agregado`;
var par2 = `agregado2`;
obj.greet(par, par2);
obj.greet.call({name: 'Jane Doe'}, par, par2);
obj.greet.apply({name: 'Jane Doe'}, [par, par2]);