// primitive

// 7 types : string , number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

// refernce (non primitive) 

// array , Objects , Functions 

const heroes = ["shaktiman", "naagraj"]

let myObj={
    name:"kshitiz",
    age:21,
}

const myFunction =function(){
    console.log("Hello world")
}
console.log(typeof heroes);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//two types of memory (stack and heap)

//stack(primmitve)
// Primitive values are stored in the stack
 
//heap(non primitive)
// non primitive values are stored in the heap

let myyoutubeName = "kshitiz"

let anothername= myyoutubeName
anothername= "flex"

console.log(myyoutubeName);
console.log(anothername);

//stack k andr ksi v value ko lenge toh uska copy aega

let userOne = {
    email: "user@gmaail",
    upi: "user@oksbi"

}
let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne)
console.log(userTwo);
// lekin heap k andr uska reference milta hai koi v change original value k andr hi hota hai



