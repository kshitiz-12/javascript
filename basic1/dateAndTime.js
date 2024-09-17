let myDate = new Date()
    console.log(myDate.toString()); // Thu Sep 12 2024 23:46:45 GMT+0530 (India Standard Time)
    console.log(myDate.toDateString()); //Thu Sep 12 2024
    console.log(myDate.toJSON()); //2024-09-12T18:16:45.576Z
    console.log(myDate.toLocaleString()); //12/9/2024, 11:46:45 pm

    console.log(typeof  myDate); // object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let myCreatedDatee = new Date("2023-01-23")
console.log(myCreatedDatee.toDateString())

let myTimeStamp =  Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
// Date.now() ...it qill give the exact date


console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default',{  
    weekday:"narrow"
}) // locale string m jsa mn waisa output laa skte hai