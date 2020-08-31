// const { resolve } = require("path");

let ditepati = true;
const janji2 = new Promise((resolve,reject)=>{
    if(ditepati){
        setTimeout(()=>{
            resolve('ditepati setelah beberapa waktu!');
        }, 2000);
    }else{
            setTimeout(()=>{
                reject('tidak di tepati anjingg!!!')
            }, 2000);
        }
    });
    console.log('mulai');
    janji2
        .finally(()=>console.log('selesai menunggu!'))
        .then(response => console.log('ok!: '+response))
        .catch(response => console.log('not ok: '+response));
    console.log('selesai');