var greet = function(name, message){
    return message+name;
}
console.log(greet('surutn','Hello world!'));


var arrowGreet = (name, message)=>{
    return message + name;
}
console.log(arrowGreet('surutn','Hello world!'));


var arrowGreet2 = (name, message)=>message + name;
console.log(arrowGreet2('surutn','Hello world!'));


var arrowGreet3 = message=>message;
console.log(arrowGreet3('Hello world!'));

var arrowGreet4 = x=>x*x;
console.log(arrowGreet4(10));


// object 
var person = {
    // properties 
    name:'Luna',

    // method
    // handler คือ รับค่าเป็น function
    handleMessage:function(message, handler){
        handler(message);// function ที่ส่งเข้ามาต้องมีโครงสร้างเหมือนกัน
    },

    // method
    // ทำการเรียกใช้ method handleMessage โดยส่ง parameter
    // message: string
    // handler: function ซึ่งต้องอยู่ในรูป function(message)  
    greet: function(){
        var _this = this;
        this.handleMessage('Hi, ', function(message){
            console.warn(message+_this.name);
        })
    },

    // ถ้าใช้ arrow function จะสามารถรับ this ได้เลยโดยไม่ต้องสร้างตัวแปลมารับ
    greet2: function(){
        var _this = this;
        this.handleMessage('Hi, ', (message) =>console.warn(message+_this.name));
    },

    // ถ้าใช้ arrow function จะสามารถรับ this ได้เลยโดยไม่ต้องสร้างตัวแปลมารับ
    greet3: function(){
        this.handleMessage('Hi, ', (message) =>console.warn(message+this.name));
    }
};

person.greet();
person.greet2();
person.greet3();

// error underfined เพราะ method ไม่มี return
//console.log(person.greet());

