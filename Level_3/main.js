// function
function abc(a, b) {
  console.log(a + b);
}

// gọi hàm
abc(3, 4);

// function declaration (khai báo tường minh)
function tenFunction() {
  // thân hàm
  // return something
}

function tong(a, b) {
  return a - b;
}

let j = tong(4, 5);
console.log(j);

// function expression (không có tên hàm, phải gắn vào một biến)
let ten_bien = function (parameters) {
  // thân hàm
  // return something
};

let tich = function (a, b) {
  return a * b;
};

let res = tich(3, 2);
console.log(res);

// arrow function
let multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(3, 4));

// function calling other function
let plus = (a, b) => a + b;
let multiply = (x, y) => x * y;
let congNhan = (num1, num2, num3) => {
  // gọi hàm plus
  let sum = plus(num1, num2);

  // gọi hàm multiply
  let product = multiply(sum, num3);

  return product;
};
console.log(congNhan(2, 3, 4));

// tính n!
let giaiThuaFor = (n) => {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
};

let giaiThuaWhile = (n) => {
  let gt = 1;
  let i = 1;

  while (i <= n) {
    gt *= i;
    i++;
  }
  return gt;
};
console.log(`5! tính bằng for: ${giaiThuaFor(5)}`);
console.log(`5! tính bằng while: ${giaiThuaWhile(5)}`);

// Scope:
/*
global scope: phạm vi toàn cục, truy xuất được ở mọi nơi (biến toàn cục)
function scope: phạm vi của hàm (biến trong hàm)
block scope: phạm vi của khối (biến trong khối)
*/

// global scope
let a = 1;
console.log(a); // truy xuất được biến a

function ex1() {
  // có thể truy xuất biến global trong function
  console.log(a);
  // thử với phạm vi block scope
  if (a % 2 == 0) {
    console.log(`${a} là số chẵn`);
  } else {
    console.log(`${a} là số lẻ`);
  }
}

// gọi hàm
ex1();

// function scope
function ex2() {
  let b = 2;
  // biến b có thể truy xuất được từ bên trong hàm
  console.log(b);
  // truy xuất được bên trong block
  if (b % 2 === 0) {
    console.log(`${b} là số chẵn`);
  } else {
    console.log(`${b} là số lẻ`);
  }
}

// block scope
let n = 3;
if (n === 3) {
  let m = 1;
  console.log(m);
  if (m % 2 == 0) {
    console.log(`${m} là số chẵn`);
  } else {
    console.log(`${m} là số lẻ`);
  }
}

// hoisting là cơ chế trong JavaScript mà biến và hàm được "đưa lên" (hoist)
// đầu phạm vi (scope) của chúng trước khi mã được thực thi.

/*
Nói đơn giản: JavaScript di chuyển khai báo biến và hàm lên đầu phạm vi 
(function scope hoặc global scope) trước khi chạy code.
Tuy nhiên, chỉ có phần “khai báo” được hoist, không phải phần “gán giá trị”.
*/

// var: được nâng cao (hoist) - có thể được sử dụng trước khi nó được khai báo
// let, const: Cũng được nâng cao - tuy nhiên biến sẽ nằm trong vùng temporal dead zone và không thể sử dụng trước khi nó được khai báo

console.log(c);
// undefined, c được đẩy lên khai báo ở đầu tập lệnh
// chú ý chỉ đẩy khai báo chứ không đẩy giá trị
var c = 1;
// nếu đổi thành let hoặc const sẽ báo lỗi

// var có phạm vi là function scope: nếu một biến được khai báo bằng var,
// phạm vi của nó sẽ là phạm vi của hàm -> biến sẽ được đẩy lên đầu phạm vi function scope
function exFunctionScope() {
  if (true) {
    var f = 2; // trình biên dịch sẽ hiểu var f được đưa lên đầu phạm vi của function và trở thành function scope
    console.log(f); // có thể truy cập f từ bên trong if block
  }
  console.log(f); // có thể truy cập f từ bên ngoài if block
}
exFunctionScope();

// let, const: có phạm vi block
function exBlockScope() {
  if (true) {
    let b = 1;
    console.log(b); // có thể truy cập trong cùng phạm vi
  }
  // console.log(b); // không thể truy cập từ bên ngoài if block, gây lỗi
}
exBlockScope();

// re-declaration (khai báo lại)
// var: có thể khai báo lại một biến sử dụng var mà không gây ra lỗi
// let: không thể khai báo lại một biến sử dụng let trong cùng một phạm vi
var toan = 2;
var toan = 4;
// let van = 2;  // bị lỗi cannot redeclare block-scope variable
// let van = 4;

// hoisting in function
// function declaration: được hoist toàn phần và được dùng trước khi khởi tạo
hoistedFunction(); // cho phép gọi hàm trước khi function được defined
function hoistedFunction() {
  console.log("hello");
}

// function expression/arrow function: chỉ được hoist biến và không được sử dụng trước khi khởi tạo
// nonHoistedFunction();    // bị lỗi
let nonHoistedFunction = function () {
  console.log("hello");
};

// arrowFunction();      // bị lỗi
let arrowFunction = () => {
  console.log("hello");
};

// recursive
// tính n!
var giaiThua = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
};
console.log(giaiThua(3));

// dãy fibonacci
var fibonacci = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
console.log(fibonacci(9));
