const score = 400

const balance = new Number (100) //Type will be number only..
console.log(balance);

console.log(balance.toString());
console.log(typeof balance);

console.log(balance.toFixed(3)); //decimal points aega 100.000

const otherNumber = 239.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++ MATHS +++++++++++++++++++++

console.log(Math) // ye apne aap m ek object hai jiske andr bht saara property hai.!
console.log(Math.abs(-4));// abs is absolute value
console.log(Math.ceil(4.7)); //ceil is ceil vale(agr 0.1 v exceed kiya to next value m jump krega)
console.log(Math.floor(4.7)); //floor is floor vale (agr 0.9 v jyada raha to 4 hi aega)
console.log(Math.max(4, 5, 6, 7, 8,)) // will get the maximum value..!!

console.log(Math.random());//iski value hmesha 0 or 1 k beech aegi

console.log((Math.random()*10)+1); // multiply 10 and +1 krte hai so that 0.0 jaisa case avoid ho sake and value more than 1 ae

const min = 10
const max = 20

//Math.random()*(max-min + 1)+min |formula to get  random number between min and max|

console.log(Math.floor(Math.random()*(max-min+1)+min))
