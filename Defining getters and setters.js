class Person {
    constructor(firstname, lastname) {

    this._firstname = firstname;
    this._lastname = lastname;
    }
    get firstname() {
    return this._firstname;
    }
    set firstname(name) {
    this._firstname = name;
    }
    get lastname() {
    return this._lastname;
    }
    set lastname(name) {
    this._lastname = name;
    }
   }
   let person = new Person('Husain', 'Saify');
   console.log(person.firstname, person.lastname); 
   person.firstname = 'Paul';
   person.lastname = 'Walker';
   console.log(person.firstname, person.lastname); 