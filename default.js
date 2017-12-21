function howareyou(mood){
    if(! mood){
        mood = 'happy';
    }
    console.log(mood);
}
howareyou();

function howareyou1(mood='happy'){
    console.log(mood);
}
howareyou1();

// default with destructure
// หลักการ คือ เมื่อเกิด error underfined ตัวโปรแกรมจะมองหาค่า default
let [x,y] = [1,2];
console.log(x, y);

let [x1=2,y1=3] = [1];
console.log(x1, y1);

let [x2=2,y2=3] = [];
console.log(x2, y2);

console.log('\n');
const {age: x3=3, name: y3} = {name:'luna'};
console.log(x3, y3);

const {age: x4=3, name: y4='Nana'} = {};
console.log(x4, y4);

const [{ prop: x5=3}] = [{prop: 20}];
console.log(x5);

const [{ prop: x6=3}] = [{prop:'undefined'}];
console.log(x6);

const [{ prop: x7=7}] = [{}];
console.log(x7);

// default ค่าภายใน object, กับ default ตัว object
const [{ prop: x8=8}={}] = [];
console.log(x8);

console.log('\n');
function createUser(person) {
    const name = person.name || 'nana';
    const age = person.age || 2;

    return `${name} (age: ${age})`;
}
console.log(createUser({age:10, name:'Lucy'}));
console.log(createUser({}));

console.log('\n');
function createUser1({age=2, name='nana'}) {
    return `${name} (age: ${age})`;
}
console.log(createUser1({age:10, name:'Lucy'}));
console.log(createUser1({}));

console.log('\n');
function createUser2({age=2, name='nana'}={}) {
    return `${name} (age: ${age})`;
}
console.log(createUser2());


// function use parameter=object, array
console.log('\n');
function profilePage(
    {favColor}={favColor:'pink'},
    [name, age] = ['Bunny', 24]
){
    console.log(
        `Name = ${name}, age = ${age}, color = ${favColor}!`
    );
}

profilePage({favColo:'blue'}, ['Ed', 30]);
profilePage();


console.log('\n');
function profilePage1(
    {favColor}={favColor:'pink'},
    [name, age] = ['Bunny', 24]
){
    console.log(
        `Name = ${name}, age = ${age}, color = ${favColor}!`
    );
}
profilePage1({},[]);

function profilePage2(
    {favColor='pink'}={},
    [name='Bunny', age=24] = []
){
    console.log(
        `Name = ${name}, age = ${age}, color = ${favColor}!`
    );
}
profilePage2({},[]);
