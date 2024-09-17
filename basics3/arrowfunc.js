const user = {
    username:"kshitiz",
    price:999,

    welcomemsg:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }


}

 user.welcomemsg()
 user.username= "sam"
 user.welcomemsg()


 console.log(this); //here it will show an empty object  {}  because this keyword is not defined in global scope and is executed in node

 function kshi(){
    let username= "kshitiz"
    console.log(this);
 } // func k andr we cannot use  this keyword here because this keyword is not defined in global scope and is executed in node

 const code = ()=>{
    let username ="kshitiz"
    console.log(this);
 }
 code() // here this keyword will show the global object  because arrow function does not have its own

 const addTwo = (num1,num2)=>{ //normal arrow func
    return num1+num2
 }//curly braces use hua to return use krna pdega
 console.log(addTwo(3,7))

 const addTw = (num1,num2)=>   num1+num2 //an explicit func
 //curly braces ni use hua to arrowfunc m bina return use kiye excute kr skte hai
 console.log(addTw(3,8))

 const add =(num4,num5) => ({username:"kshitiz"})//object ko return krne k liye parenthesis  andr daalna hi pdega
console.log(add(3,4))

