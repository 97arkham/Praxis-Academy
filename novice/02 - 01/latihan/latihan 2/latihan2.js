function Shape() {
    this.type = "shape";
    this.getType = function(){
        return this.type;
    }
}

function Triangle(a,b,c) {
    Shape.call(this);
     this.type="triangle";
     this.a =a;
     this.b = b;
     this.c = c;
     
}
Triangle.prototype = Object.create(Shape);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

function shuffle(zsa){
zsa.sort(()=> Math.random()-0.5);
}

var t = new Triangle(1, 2, 3);

console.log( t.constructor === Triangle);
console.log(Shape.isPrototypeOf(t));
console.log (t.getPerimeter());
console.log(t.getType());

let arr = [1,2,3,4,5,6,7,8,9,10];
shuffle(arr);
console.log(arr);
