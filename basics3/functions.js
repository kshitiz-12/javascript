function SayMyName (){
    console.log("K");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("y");
}

SayMyName() //execution

function addTwoNum (num1,num2){ 
    console.log(num1+num2);
}
addTwoNum(3,4) 
// value inside the bracket while calling the function is arguments

// value inside the bracket while creating the parameter is called parameter

const result = addTwoNum(3,5)

//console.log("result :",result);

function addTwoNumb (num3,num4){ 
    let res =  num3+num4;
    return res; // iske baad kch v execute nai hoga

}
addTwoNumb(5,6)

const res = addTwoNumb(5,6)

console.log ("result :",res)

//..

function addTwoNumbe (num5,num6){ 
    return num5+num6

}
addTwoNumbe(10,20)

const resu = addTwoNumbe(30,40)

console.log ("result :",resu)

function loginUsermsg (username){
    if (username===undefined){  //(!username) will also work
        console.log("username is not provided");
        return

    }
    return `${username} just logged in`
}

console.log(loginUsermsg("kshitiz"));

console.log(loginUsermsg()); //  undefined just loggedin


function calcCartPrice(val1,val2,...num9){ //here its rest operator
    return num9
}
console.log(calcCartPrice(1000,200,400,500)); 
// its a rest operator we can pass multiple value into a function using this .. will give output as an array
//2values will go into  val1 and val2 and rest will go into num9 array

const user ={
    name:"kshitiz",
    age:25,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.age}`)
}

handleObject(user)

const  exarr = [ 200,400,500]
function handleArray(arr){
    return arr[1]
}

console.log(handleArray(exarr)) // will give output as 400

