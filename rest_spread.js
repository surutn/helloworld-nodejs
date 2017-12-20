// spread
const arr = [4,5,6];
const append = [1,2,3];
console.log(append);

const append1 = [1,2,3,arr];
console.log(append1);

const append2 = [1,2,3,...arr];
console.log(append2);

const arr1 = ['a','b','c'];
const arr2 = ['d','e','f'];
arr1.push(arr2);
console.log(arr1);

const arr3 = ['a','b','c'];
const arr4 = ['d','e','f'];
arr3.push(...arr4);
console.log(arr3);

// copy like arr.slice()
const arr5 = [1,2,3];
const copy = arr5.slice();
console.log(copy);
copy.push(4);
console.log(copy);

const arr6 = [1,2,3];
const copy1 = [...arr6];
console.log(copy1);
copy1.push(4);
console.log(copy1);

// spread into arguments
function add(x,y,z){
    return x+y+z;
}

const sum = add(1,2,3);
console.log(sum);

const numbers = [1,2,3];
const sum1 = add(...numbers);
console.log(sum1);


// rest params
function howManyArgs(...args){
    console.log(args.length);
}

howManyArgs();
howManyArgs(4);
howManyArgs(4,5,6,8,4,5);

// rest params
function multiplier(multiplier, ...args){
    console.log(args);
    return args.map(e=>multiplier*e);
}

const result = multiplier(2, 100, 200, 300);
console.log(result);

