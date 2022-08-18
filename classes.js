class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar = new Car("Ford", 2014); //creating a new object to the class
  console.log(myCar.name + " " + myCar.year);