// join, comcat, push, pop, shift, unshift, splice, slice
const array = [1,2,3];
console.log(array);
// join คือ เอามารวมกัน โดยคั้นด็วย parameter ที่ส่งเข้าไป
console.log(array.join());
console.log(array.join(','));
console.log(array.join('-'));
console.log(array.join('+'));
console.log('\n');

// comcat คือ การรวมค่าของ array 2 object เข้าด้วยกัน
const fourToSix = [4,5,6];
const oneTo6 = array.concat(fourToSix);
console.log(oneTo6);
console.log(array);

console.log('\n');
const oneTo7 = oneTo6.concat([7]);
console.log(oneTo7);

// push คือ การเพิ่มค่าใน (เพิ่มต่อท้าย)
console.log('\n');
const mutate =['red','green'];
const count = mutate.push('blue');
console.log(mutate);
console.log(count);

// pop คือ การเอาค่าสุดท้ายออกจาก array (ค่าที่เข้าไปสุดท้าย)
console.log('\n');
const pop = mutate.pop();
console.log(mutate);
console.log(pop);

// shift คือ การเอาค่าแรกออกจาก array (ค่าที่เข้าไปก่อน/ตัวแรก/index=0)
console.log('\n');
const shift = mutate.shift();
console.log(mutate);
console.log(shift);

// unshift คือ การเอาใส่ลงในค่าแรกของ array (ค่าที่เข้าไปก่อน/ตัวแรก/index=0)
console.log('\n');
const unshift = mutate.unshift('red');
console.log(mutate);
console.log(unshift);


// splice คือ คำสั่งแยก array ออกจาก array เดิม (กำหนดตำแหน่งที่จะเริ่มแยกได้)
console.log('\n');
const mutate1 = ['red','green','0','1','blue'];
const spliced = mutate1.splice(3);// index=0
console.log(mutate1);
console.log(spliced);

console.log('\n');
const mutate2 = ['red','green','0','1','blue'];
const spliced1 = mutate2.splice(1,2);// กำหนดจุดที่จะแยกข้อมูลออกมา เริ่มต้น-สิ้นสุด
console.log(mutate2);
console.log(spliced1);

console.log('\n');
const mutate3 = ['red','green','0','1','blue'];
const spliced2 = mutate3.splice(1, 2, 'white');// เแยก และเพิ่ม array ในตำแหน่งที่กำหนด
console.log(mutate3);
console.log(spliced2);

console.log('\n');
const mutate4 = ['red','green','0','1','blue'];
const spliced3 = mutate4.splice(1, 2, 'white', 'blue');// เแยก และเพิ่ม array ในตำแหน่งที่กำหนด
console.log(mutate4);
console.log(spliced3);


// slice



