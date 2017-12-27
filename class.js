class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    greet(){
        console.log('Hi, my name is Lulu');
    }

    get color(){
        return this._color;
    }

    set color(c){
        this._color=c;
    }

    get dimension(){
        return `${this.width} x ${this.height}`;
    }

    static area(c){
        return c.width*c.height;
    }
}

class Square extends Rectangle{
    constructor(width){
        super(width, width);
    }
}

const r = new Rectangle(20, 10);
console.log(r.height);
console.log(r.width);
r.greet();
console.log(r.dimension);
console.log(Rectangle.area(r));


const s = new Square(10);
console.log(s.dimension);
console.log(Square.area(s));