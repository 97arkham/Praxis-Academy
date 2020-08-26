class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName() {
        return this.make + " " + this.model;
    }
    static getColor(v){
        return v.color;
    }
}
let car = new Vehicle("Toyota", "Corolla", "Black");
let carr = new Vehicle("Honda","Accord","Purple");

console.log(Vehicle.getColor(carr));
console.log(car);