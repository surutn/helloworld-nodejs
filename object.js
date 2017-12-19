const color = 'red';
const age =2;
function bark() {
    console.log('hong');
}

const dog = {color:color, age: age, bark: bark}
dog.bark();

// ถ้าชื่อ properties ตรงกับตัวแปรของเรา จะสามารถย่อได้ดังข้างล่างนี้
const dog1 = {color, age, bark}
dog1.bark();

//ES6 สามารถเติม function ได้ดังตัวอย่าง bark()
const dog2 = {
    color, 
    age, 
    bark() {
        console.log('hong2');
    }
}
dog2.bark();

//ES5 ต้องใส่รูปแบบให้เต็มรูปแบบ
const dog3 = {
    color, 
    age, 
    bark: function () {
        console.log('hong3');
    }
}
dog3.bark();

const doBark = 'bark';
const dog4 = {
    color, 
    age, 
    [doBark]: function () {
        console.log('hong4');
    }
}
dog4.bark();


const doBark1 = 'ba'+'rk';
const dog5 = {
    color, 
    age, 
    [doBark1]: function () {
        console.log('hong5');
    }
}
dog5.bark();