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

/*
// Ép kiểu dữ liệu
let numA = prompt("nhập một số: ");
console.log(typeof numA);
let numB = 2;
console.log(typeof numB);
// cộng a và b
let res = numA + numB;
console.log(`${numA} + ${numB} = ${res}`); // result là một chuỗi (nối chuỗi), và chỉ thể hiện thông qua phép cộng
console.log(typeof res);

// Các phép tính khác Js sẽ cố gắng chuyển thành kiểu number trước khi thực hiện tính toán, nếu không chuyển được thì kết quả sẽ là NaN - not a number
console.log(`${numA} - ${numB} = ${numA - numB}`);
console.log(`${numA} * ${numB} = ${numA * numB}`);
console.log(`${numA} / ${numB} = ${numA / numB}`);
console.log(`${numA} % ${numB} = ${numA % numB}`);
*/

/*
// ép kiểu dữ liệu nhập vào
let numC = parseInt(prompt("Nhập vào một số C: "));
let numD = parseFloat(prompt("Nhập vào một số D: "));
let numE = Number(prompt("Nhập vào một số E: "));
console.log(numC);
console.log(numD);
console.log(numE);
console.log(typeof numC);
console.log(typeof numD);
console.log(typeof numE);
*/

// Gán giá trị
let h = 10;
let k = 2;
console.log((h += k));
console.log((h -= k));
console.log((h *= k));
console.log((h /= k));
console.log((h %= k));

// Toán tử tăng/giảm
let o = 2;
let p = 3;
console.log(o++); // In o = 2 rồi mới tăng o lên 1, trả về giá trị cũ o = 2 (giá trị thật là o = 3)
console.log(++o); // Tăng o lên 1 đơn vị (o = 4) rồi mới trả về giá trị mới o = 4

// Biểu thức phức tạp
// Độ ưu tiên (prefix -> các phép toán còn lại -> gán giá trị cho biến ở bên trái dấu bằng -> tính postfix)
let _a = 2;
let _b = 3;
let _c = _a++ - ++_a + _b-- + ++_b + 2;
console.log(
  `Giá trị của biểu thức ${_a++} - ${++_a} + ${_b--} + ${++_b} + 2 = ${_c}`
);

/*
// Tính chu vi, diện tích hình tròn
let banKinhR = parseFloat(prompt("Nhập vào bán kính r: "));
let chuViHT = 2 * Math.PI * banKinhR;
let dienTichHT = Math.PI * Math.pow(banKinhR, 2);
console.log(
  `Hình tròn bán kính = ${banKinhR} có chu vi = ${chuViHT} và diện tích = ${dienTichHT}`
);



// Tính chu vi, diện tích hình chữ nhật
let chieuDai = parseInt(prompt("Nhập vào chiều dài: "));
let chieuRong = parseInt(prompt("Nhập vào chiều rộng: "));
let chuVi = (chieuDai + chieuRong) * 2;
let dienTich = chieuDai * chieuRong;
console.log(
  `Chu vi của hình chữ nhật có chiều dài ${chieuDai} và chiều rộng ${chieuRong} là ${chuVi}`
);
console.log(
  `Diện tích của hình chữ nhật có chiều dài ${chieuDai} và chiều rộng ${chieuRong} là ${dienTich}`
);



// Tính điểm trung bình
// Dùng toFixed(2) để làm tròn 2 chữ số sau dấu phẩy
let toan = parseFloat(prompt("Nhập điểm toán: "));
let van = parseFloat(prompt("Nhập điểm văn: "));
let anh = parseFloat(prompt("Nhập điểm anh: "));
let diemTB = (toan + van + anh) / 3;
console.log(
  `Điểm trung bình của 3 môn: toán = ${toan}, văn = ${van}, anh = ${anh} là ${diemTB.toFixed(
    2
  )}`
);
*/

// So sánh
// "==": không quan tâm đến kiểu dữ liệu, tức là có thể so sánh string vs number
// "===": quan tâm đến kiểu dữ liệu, và không thể so sánh string vs number, return false
// "!==" quan tâm đến kiểu dữ liệu
let numOne = 1;
let numTwo = 3;
let numThree = "3";

console.log(numOne === numTwo);

// hàm isNan, Number
// kiểu Number sẽ ép sang kiểu số, nếu không ép được sẽ return về NaN (not a number)
let l = "abc";
console.log(Number(l)); // result: NaN

let isNum = 33;
let notNum = "abc";
console.log(isNaN(isNum)); // dùng hàm Number cố chuyển sang kiểu số, nếu không chuyển được thì là hàm "không phải là số", nhưng vì đây là số nên return về false
console.log(isNaN(notNum)); // dùng hàm Number cố chuyển sang kiểu số, nhưng abc là string (not a number) nên return true

// hàm random
let random = Math.random();
console.log(`Số ngẫu nhiên từ 0 đến sát 1 là ${random}`);

// random lớn hơn 1
let random2 = Math.random() * 10;
console.log(`Số ngẫu nhiên từ 1 đến sát 10 là ${random2}`);

// random số nguyên
let random3 = parseInt(Math.random() * 10);
console.log(`Số ngẫu nhiên (số nguyên) từ 1 đến sát 10 là ${random3}`);
