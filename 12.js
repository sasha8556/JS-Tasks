class Shape {
    constructor(background, size) {
        this.background = background;
        this.size = size;

    }
}



class Square extends Shape {
    constructor(background, size) {
        super(background, size)
    }
    draw() {
        console.log('Красный квадрат');
    }
}

class Circle extends Shape {
    constructor(background, size) {
        super(background, size)
    }
    draw() {
        console.log('Зеленый круг');
    }
}

class Rectangle extends Shape {
    constructor(background, size, size2) {
        super(background, size);
        this.size2 = size2;

    }
    draw() {
        console.log('Синий треугольник');
    }
}




const square1 = new Square('red', 50);
square1.draw();

const circle1 = new Circle('green', 150);
circle1.draw();

const rectangle1 = new Rectangle('blue', 250, 100);
rectangle1.draw();