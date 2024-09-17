const myArr = [0,1,2,3,4]
const myHeroes = ["shaktiman","jack"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods

myArr.push(6) // inserts value to an array
console.log(myArr);
myArr.pop() //removes value from array

myArr.unshift(9) // adds value in the front of array
myArr.shift()  // removes value from the front of array

console.log(myArr.includes(9));  // checks if value is in array
console.log(myArr.indexOf(3));   // returns index of value in array

const newArr = myArr.join() // binds and convert the value into string

console.log(myArr);
console.log(typeof newArr); 

//slice, splice

console.log("a",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log(myn2);

//



