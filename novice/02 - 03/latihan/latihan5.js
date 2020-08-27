const a = [1, 2, 3]
const b = a.map((v, k) => v * k)
// b = [0, 2, 6]
console.log(b);

const h = [1, 2, 3]
const sum = h.reduce((partial, x) => partial + x, 0);
console.log(sum);