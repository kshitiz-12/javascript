//singleton literal ki trh nhi bnega constructor m bnega

//object literals

//Object.create constructor method

const MySym = "key1"

const JsUser ={
    name: "Kshitiz",
    age:18,
    [MySym]: "key1",
    location:"bengaluru",
    email: "abc@gmail.com",
    isLoggedIn: false

}

console.log(JsUser.email);
console.log(JsUser["age"]);
console.log(JsUser[MySym]);

// console.log(JsUser.name); //accessing property using dot notation

JsUser.email = "kshitiz@abc"

//Object.freeze(JsUser) // it will  prevent modification of object properties


JsUser.age = 21

console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello Js user");
}

console.log(JsUser.greeting); //undefined

console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
 console.log(JsUser.greetingtwo()); //undefined