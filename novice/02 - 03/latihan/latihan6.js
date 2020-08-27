function multiply(a, b, c) {
    return a * b * c;
}
function multiplya(j) {
    return (k) => {
        return (w) => {
            return j * k * w
        }
    }
}
console.log(multiplya(1)(2)(3)) // 6
console.log(multiply(1,2,3)); 