const array = [1,2];
const a = array[0];
const b = array[1];
console.log(a,b);

const [a1,b1] = array;
console.log(a1,b1);

const person = {
    first:'Jane',
    last:'Doe', 
    email:'jane@doe.com',
    birthday:{
        day:20,
        month:'Jan',
        year:1990
    }
}
const f = person.first;
const l = person.last;
console.log(f,l);

const {first: f1, last: l2} = person;
console.log(f1,l2);

const oneToFive = [1,2,3,4,5];
const [a2,b2] = oneToFive;
console.log(a2,b2);

const [a3,b3,,d3] = oneToFive;
console.log(a3,b3,d3);

const [,,,e4] = oneToFive;
console.log(e4);

const {first: f2, email:e5}= person;
console.log(f2, e5);

const {first, email}= person;
console.log(first, email);


const [a4, b4, ...rest] = oneToFive;
console.log(rest);

const {a5, ...rest1} = {a5: '1', b5:'2', c5:'3'};
console.log(rest1);

// Return object
function createUser(){
    return {name: 'Luna', age: 2};
}
const {name, age}= createUser();
console.log(name +' '+age);
