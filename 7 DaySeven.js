// console.log("Objects");
//              Day seven: Objects
//      task/Activities

// Activity1: Object Creation And Access
//  * task1: Create an object representing a book with properties Like ,Autor,Year,and title etc and log the object to the console.

let Book = {
title:"Reqs-e-Bismil",
author:"Hashim Nadeem Sahb",
type:"Drama",
yera:2020,
str(){ console.log(`Name:${this.title} \nAuthor:${this.author}`);}
};
// console.log(Book);

//  * task2: Access and log the title and author properties of book
// console.log(`title:${Book.title}\nAuthor:${Book.author}}}`);
// Activity2: Object Methods

//  * task3: Add a method to the book that Returns a string with the book's title and Author, and logthe result to the calling this method

let Book2 = {
    title:"Reqs-e-Bismil",
    author:"Hashim Nadeem Sahb",
    type:"Drama",
    yera:2020,
    str(){ console.log(`Name:${this.title} \nAuthor:${this.author}`);}
    };
// Book2.str()

//  * task4: Add a method to the book that takes  a parameter(year) andupdates the book's year property, then log the updated object;

let Book3 = {
    title:"Reqs-e-Bismil",
    author:"Hashim Nadeem Sahb",
    type:"Drama",
    yera:2020,
update(newYear=this.yera){ this.yera=newYear ; console.log(Book3);}
    };

    // Book3.update(2024);

// Activity3: Nested Objects;

//  * task5: Create a nested Object representing a library with properties like name and books(an array of the objects), and log the library object to the console;\

let library = {name:"INDUS PUBLIC LIBRARY",Address: "Sachal Colony Larkana",
books:[
    {
        title:"AAjiz",
        author:"AAjiz~dM"
    },{
                title:"Baq1&2",
        author:"AAjiz~dM"
    },{
                title:"Dum Ishq Ishq",
        author:"AAjiz~dM"
    },{
                title:"MurshaD",
        author:"AAjiz~dM"
    },{
                title:"Kaise-tere-Khudgarzi2",
        author:"AAjiz~dM"
    },{
                title:"King OF Kings",
        author:"AAjiz~dM"
    }
]
};
// console.log(library);
//  * task6: Access and log name of the library and titles of the all books in the library;

let libraryName= library.name;
console.log(libraryName);
let libraryBooks =library.books;
libraryBooks.map((val,index)=>{
    let titles = val.title;
    console.log(`Book ${index+1}. ${val.title}`);
});

// console.log(Object.values(library));


// Activity4: The This Keyword
//  * task7: Add a method to the Book Object that Uses this keyword to return a string with the Book's title and Year, and log the Result of calling this method;


let Book4 = {
    title:"Reqs-e-Bismil",
    author:"Hashim Nadeem Sahb",
    type:"Drama",
    yera:2020,
    str(){ console.log(`Name:${this.title} \nAuthor:${this.author}`);}
    };

    Book4.str()


// Activity5: Object iteration
//  * task8: Use a for..in loop to iterate over the properties of the book object and log each property and its value;

for (let key in Book4){
console.log(`${key}: ${Book4[key]}}`);

}
//  * task9: Use Object.keys() and Object.Values() methods to log alla the keys and values of the book object;
let objeKeys = Object.keys(Book4)
let objValues= Object.values(Book4)
console.log("\t \t Keys : \n ",objeKeys,"\t \t Values : \n ",objValues);
