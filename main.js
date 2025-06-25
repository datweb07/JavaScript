/*
alert("Hello world");
prompt("Input: "); // Cho phép nhập dữ liệu (biến mất, không được lưu trữ)
*/
// Khai báo biến
var x;
var diem;

// Khởi tạo biến
x = "Nguyen Van A";
const y = "Nguyen Van B";
diem = 10;
console.log("Điểm toán của bạn là: " + diem);

// Thay đổi giá trị
diem = 9;
console.log("Điểm toán của bạn là: " + diem);

/*
// hiển thị tên người dùng
let name = prompt("Nhập tên của bạn: ");
console.log(`Tên của bạn là: ${name}`);
console.log("Chào mừng đến website của tôi");
*/

let myString = "hello";
var myNumber = 12.3;
let checked = false;
var mark;
var myNull = null;
let bigNum = 123422222222222222222222222222222222222n;
let symbol = Symbol("hello");

console.log(bigNum);
console.log(myString);
console.log(typeof myString); // Kiểm tra kiểu dữ liệu
console.log(typeof myNumber);
console.log(typeof checked);
console.log(typeof mark); // result: undefined
console.log(typeof myNull);
console.log(typeof bigNum);
console.log(typeof symbol);

// Giá trị an toàn tối đa/tối thiểu của số nguyên
console.log(`Số nguyên an toàn tối đa: ${Number.MAX_SAFE_INTEGER}`);
console.log(`Số nguyên an toàn tối thiểu: ${Number.MIN_SAFE_INTEGER}`);

// Xuất dữ liệu với biến
let a = 100;
let b = 10;
console.log(`Căn bậc hai của ${a} = ${Math.sqrt(a)}`);
console.log(`Căn bậc hai của %s = %s`, a, Math.sqrt(a));
console.log("Căn bậc hai của " + a + " = " + Math.sqrt(a));
console.log("Căn bậc hai của", a, "=", Math.sqrt(a));

let i, j;
i = 5;
j = 6;
console.log(`${i} nhân với ${j} bằng ${i * j}`);

let m = 50;
let n = 5;
console.log(`Tổng của ${m} và ${n} = ${m + n}`);
console.log(`Hiệu của ${m} và ${n} = ${m - n}`);
console.log(`Tích của ${m} và ${n} = ${m * n}`);
console.log(`Thương của ${m} và ${n} = ${m / n}`);
console.log(`Chia lấy dư của ${m} và ${n} = ${m % n}`);
