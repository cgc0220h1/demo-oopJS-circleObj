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
function createObj() {
    let radius;
    for (;;) {
        radius = prompt("Nhập vào bán kính hình tròn");
        if (radius === "") {
            alert("Trường không được để trống. Vui lòng nhập giá trị.");
        } else {
            alert("Đường tròn đã được khởi tạo.");
            break;
        }
    }
    demoCircle = new Circle(radius);
    document.getElementById('object-ball').innerHTML = "Bán kính của hình tròn vừa tạo là: " + demoCircle.getRadius();
}

function calArea() {
    document.getElementById('result-area').innerHTML = "Diện tích của hình tròn vừa tạo là: " + demoCircle.getArea();
}

function calPara() {
    document.getElementById('result-para').innerHTML = "Chu vi của hình tròn vừa tạo là: " + demoCircle.getPara();
}