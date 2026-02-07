const mysym =Symbol("key1")

const jsUser = {  
   [mysym] :"key1",
    name : "lakhan",
    class: "Bca",
    Location: "sirsa"
}
// console.log(jsUser.class);

// console.log(jsUser["class"]);
// console.log(jsUser[mysym]);
// Object.freeze(jsUser )

jsUser.Location ="haryana"
// console.log(jsUser.Location);
jsUser.greeting = function () {
    console.log(`Hello jsUser, ${this.name}`);
}

// console.log(jsUser.greeting());

const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "dammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const obj1={
     1 : "a",
     2 : "b"
}

const obj2 ={
    3: "a",
    4:"b"
}

// const obj3 = Object.assign({},obj1,obj2)
const obj3= {...obj1 , ...obj2}
// console.log(obj3);

const user = [
    {
        id:"5555"

    },
    {
        gmail: "lakhan@gmail.com"
    }
]

// console.log(user[1].gmail);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const course = {
    courseName : "Mern",
    id : "1234",
    courseInstructor : "Lakhan"
}

const {courseInstructor : name} = course
console.log(name);
