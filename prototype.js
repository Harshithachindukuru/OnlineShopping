function person(first,last,age){
this.firstname=first;
this.lastname=last;
this.age=age;
}
person.prototype.name = function() {
    return this.firstname + " " + this.lastname
}
const person1=new person("harshitha","chindukuru",22);
person.prototype.gender="female";
console.log("my name is " + person1.name());
console.log(person1.gender);