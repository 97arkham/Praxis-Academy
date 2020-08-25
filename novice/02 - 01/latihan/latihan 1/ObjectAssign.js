//Object.assign() adalah menyalin nilai dari semua propertu enumerable sendiri dari satu atau lebih objek.
const nilai1 = {a:2,b:4};
const nilai2 = {a:4,c:5};
const retrun = Object.assign(nilai1,nilai2);
console.log(nilai1);
console.log(nilai2);
console.log(retrun);