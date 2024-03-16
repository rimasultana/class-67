function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");



console.log(myFather.name());
