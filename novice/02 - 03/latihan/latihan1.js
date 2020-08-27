// Impretive dan Declarative Pattren
var books = [
    {name:'Java Script', pages:450},
    {name:'CSS',pages:950},
    {name:'Node', pages : 678}

];
   

// Imperative Pattern
for(var i = 0;i<books.length; i++){
    books[i].lastRead = new Date();
}

//declarative Pattern
books.map((book) =>{
    book.lastReadBy = 'me';
    return book;
})

console.log(books);
