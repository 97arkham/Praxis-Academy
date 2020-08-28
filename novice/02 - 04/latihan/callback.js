const fs = require('fs');

function someAsyncOperation(callback){
    fs.readFile('/path/to/file',callback);
}

const timeoutScheduled = Date.now();

setTimeout(()=>{
    const delay = Date.now() - timeoutScheduled;

    console.log(`${delay} ms have passed since i was schaduled`);
},2000);

someAsyncOperation(()=>{
    const startCallback = Date.now();
    while (Date.now() - startCallback < 10){

    }
});