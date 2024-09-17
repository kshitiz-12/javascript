const name =  'Kshitiz'
const repoCount = 50

console.log(name+repoCount)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String ('  kshitiz-hc  ')

console.log(gameName[0]); //K
console.log(gameName.__proto__);
console.log(gameName.toUpperCase()); //KSHITIZ

const newString= gameName.substring(0,4)
console.log(newString);

console.log(gameName.trim()); // removes the spaces ..works on whitespace character..!

//
