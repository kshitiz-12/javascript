// for of

//["","",""]
//[{},{},{}]

const arr  = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}
 const greet="hello world"
 for (const num of greet) {
    console.log(num);
    
 }
 // maps
 const map = new Map()
 map.set('IN', "INDIA")
 map.set("BR ", "BIHAR")
 map.set('JH ', "JHARKHAND")
 map.set('KA' , "KARNATAKA")
console.log(map)

for (const [key,value] of map) {//square bracket se destructure kiya so that we can print key and value separately
    console.log(key,':-',value);
    
}
//.......objects are not iterable  so we need to convert them into array or map to iterate over them

// const myObj ={
//     "Game1":"NFS",
//     "GAme2":"spiderman"
// }
// for (const [key,value] of myObj) {
//     console.log(key,":"  ,value);

// } 

//for in loop can be used for object

const myObj ={
    js:"javascript",
    cpp:"c++",
    python:"python"
}
for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`)
}

const lang = ["js","py","java","c++"]
for (const key in lang) {
    console.log(lang[key]);
   
}
