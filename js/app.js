let Circle = function (radius) {
    this.radius = radius;
    this.getRadius = function () {
        return this.radius;
    };
    this.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    this.getPara = function () {
        return this.radius * 2 * Math.PI;
    };
};

let demoCircle = new Circle();
let radius;

function createObj() {
    radius = inputSize(radius);
    if (radius !== undefined) {
        demoCircle = new Circle(radius);
        document.getElementById('object-ball').innerHTML = "Bán kính của hình tròn vừa tạo là: " + demoCircle.getRadius();
    } else {
        document.getElementById('object-ball').innerHTML = "";
    }
}

function calArea() {
    document.getElementById('result-area').innerHTML = "Diện tích của hình tròn vừa tạo là: " + demoCircle.getArea();
}

function calPara() {
    document.getElementById('result-para').innerHTML = "Chu vi của hình tròn vừa tạo là: " + demoCircle.getPara();
}

function inputSize(num1) {
    let size = [];
    while (num1 !== null) {
        num1 = prompt("Nhập vào kích thước.");
        if (isNaN(num1)) {
            alert("Giá trị nhập vào là kí tự. Vui lòng nhập lại giá trị số");
        } else if (num1 <= 0 && num1 !== null) {
            alert("Kích thước không có giá trị âm và 0. Vui lòng nhập lại")
        } else if (num1 === "") {
            alert("Trường không được để trống. Vui lòng nhập giá trị.");
        } else if (num1 !== null) {
            size.push(num1);
            alert("Đã ghi nhận giá trị");
            break;
        } else {
            alert("Bạn đã hủy việc nhập giá trị");
            break;
        }
    }
    return size;
}