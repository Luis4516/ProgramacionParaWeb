var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){ //Una funcion con los atributos dentro de la variable
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
}
}; //This solo tiene acceso hasta aqui

person.greet(); //Se ejecuta la función
console.log(person['firstname']);

// Temple Strings, Object literals, Key pairs