// const tinderUser = new Object() // its a singleton object
//const tinderUser ={} its a non singleton object

const  tinderUser ={}

tinderUser.id = "234a"
tinderUser.name = "John"
tinderUser.age = 25

console.log(tinderUser);

const regularuser ={
    email:"dhf@gmail.com",
    fullname :{
        userfullname : {
            firstname: "kshitiz",
            lastname:"vishwakarma"
        }

    }
}

console.log(regularuser.fullname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3: "c" , 4:"d"}

const obj3 = Object.assign({},obj1,obj2) // {}is target and rest is source its a good practice to use {}  as target to avoid mutation of original object


console.log(obj3);

const obj4 = {...obj1,...obj2}  // spread operator is used to create a new object from existing object ..always use this

const users = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Jane",
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // value array m aega 
console.log(Object.values(tinderUser)); // value array m aega

console.log(Object.entries(tinderUser)); // value array m aega

console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    duration: "2 hours",
    price: 5000
}

// course.duration  = "3 hours" // this is direct way to change value of property

const{duration : time} = course //its a wayof de structuring  object


console.log(time);

const navbar = ({company}) => {

}// destructuring
navbar(company="kshitiz")

// {
//     name : "kshitiz",
//     coursename: "js in hindi",
//     duration: "2 hours",

// } its and Api in the form of  object

// [
//     {},
//     {},
//     {},
// ] ........its an api in the form of array!
