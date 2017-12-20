// name จะเป็น object เดียวกัน
var name ='Luna';
if(true){
    var name ="Ken";
}
console.log(name);

// name1 จะกลายเป็น object คนละตัว เมื่ออยู่ใน function
var name1 ='Luna';
function a() {
    var name1="Ken";
}
console.log(name1);

// ปัญหากรณีใช้ var เพราะมันมอง var เหมือนตัวแปร global
// ทำให้ ค่า i ถูกเปลี่ยนเป็นค่าสุดท้าย นั้นคือ 10
var stack=[];
for(var i=0;i<10;i++){
    stack.push(function(){
        console.warn(i);
    });
}

// สั่งนำค่าทั้งหมดใน array ออกมา
// ผลลัพท์ คือ เลข 10 เท่านั้น
stack.forEach(function(f){
    f();// function อยู่ใน array
})

// เปลี่ยนเป็น let
var stack=[];
for(let i=0;i<10;i++){
    stack.push(function(){
        console.warn(i);
    });
}

// สั่งนำค่าทั้งหมดใน array ออกมา
// ผลลัพท์ คือ เลข 0 1 2 3 4 5 6 7 8 9 เท่านั้น
stack.forEach(function(f){
    f();
})



// ทดสอบความเข้าใจ
console.log("\n-");
var x = 0;
for(var y=1;y<5;y++){
    x=x+1;
    console.log(y);
}

console.log("\n-");
console.log(y);
console.log(x);