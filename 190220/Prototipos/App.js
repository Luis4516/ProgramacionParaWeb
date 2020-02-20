//Todos los objetos apuntan a un prototipo
//Prototype = agredando funcionalidad o propiedades

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};
//Funcionalidad nueva de greet para saludar

var john = new Person('John', 'Doe');
console.log(john.firstname);
//Unicamente el nombre
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();
//Jane también tiene acceso a Prototype