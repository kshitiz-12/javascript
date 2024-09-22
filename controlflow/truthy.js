const useremail=[]

if(useremail){
    console.log("user email is available")
}
else{
    console.log("user email is not available")
}

//falsy value 
// false , 0 -0 , BigInt 0n ,"",null , undefined , NaN

//truthy values
// true , 1 , 1n , "any string" , [], {}, function () 

// Nullish coalescing Operator(??): null  undefined

let val1;
val1=5??10 //5
val1=null??10 // 10
val1=undefined??15 // 15
console.log(val1);

//terniary operator

//condition? true:false

const iceTeaPrice = 100
iceTeaPrice >=100? console.log("less than 100") : console.log("more than  100")