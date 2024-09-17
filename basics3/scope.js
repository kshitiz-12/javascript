

// {} objects k sath object ko define krta hai and jab function or if else k sath aata hai to isko scope bolte hai

// let and const variable ko global scope me define krta hai and var ko local scope me define

if (true){
    let a = 10
    const b= 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);
//here a and b will show error but c will give an output

//{} scope k andr jo v value likhte hai wo block scope and uske bahr jo v likhte hai wo global scope hai
// {} iske andr ka value iske andr tk hi execute hota hai

// ispect wale console k andr and node k andr global scopes are different

//.......|NESTED SCOPE|.........//

function one(){
    const username = "kshitiz"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);
    two()

}
one()
//child func can access the variable parent func

if(true) {
    const username  = "kshitiz"
    if(username==="kshitiz"){
        const website = "yooutubee"
        console.log(username+website);

    }
   // console.log(website); cant be accessed bcz its inside scope
}
//console.log(username); ye v nai hoga czz scope k bahr hai

//.......|INTRESTING|..........

function addOne(num){
    return num+1
}

console.log(addOne(5))

const addTwo = function(num){ //this is also a type of func
    return num+2
}

addTwo(6)

// in JS VARIABLE can hold any value