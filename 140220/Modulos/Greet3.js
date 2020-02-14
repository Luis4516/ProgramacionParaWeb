function Greetr() { //Clase con inicial mayuscula
    this.greeting = 'Hello world';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();
