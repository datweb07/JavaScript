/*
// if else
let dtb = Number(prompt("Nhập điểm: "));
if (dtb > 5.0) {
  console.log("Bạn đã đậu");
} else {
  console.log("Bạn đã tạch");
}
*/

// ternary operator
let number = 12;
let mess = number % 2 == 0 ? "12 chia hết cho 2" : "12 không chia hết cho 2";
console.log(mess);

// truthy and falsy values
let a = 123;
console.log(typeof a);
let b = String(a); // ép kiểu Number sang String
console.log(typeof b);

// 8 giá trị falsy khi chuyển đổi sang bool sẽ là false
// false, 0, 0n, "", null, undefined, NaN

//switch case
let numBer = 2;
switch (numBer % 2) {
  case 0:
    console.log("Số chẵn");
    break;
  case 1:
    console.log("Số lẻ");
    break;
  default:
    console.log("Không phải số");
}

/*
// check gpa
let gpa = Number(prompt("Nhập vào GPA của bạn: "));
switch (gpa) {
  case 3.2:
  case 3.4:
    console.log("SV giỏi");
    break;
  case 3.6:
  case 3.8:
    console.log("SV xuất sắc");
    break;
  default:
    console.log("GPA lỗi");
}
*/

// while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

/*
// kiểm tra số từ 1-99
let n = prompt("Nhập vào số nguyên n (từ 1 - 99): ");
console.log(n);

while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  console.log(n);
  n = Number(prompt("Nhập lại số nguyên từ 1 - 99: "));
}
alert("Bạn đã nhập số: " + n);
*/

// do while loop
let h = 1;
do {
  console.log(h);
  h++;
} while (h <= 5);

// while true loop
let k = 0;
while (true) {
  console.log(k);
  k++;
  if (k == 3) {
    break;
  }
}

// for loop
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// continue and break
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    // bỏ qua các số lẻ
    continue;
  } else {
    console.log(i);
  }
}

let m = 0;
while (m < 100) {
  m++;
  if (m == 4) {
    break;
  }
}
console.log("Giá trị cuối cùng của m là: " + m); // result m = 4

// Tính n!
let v = 2;
console.log(Number.isInteger(v)); // kiểm tra số nguyên

let n = Number(prompt("Nhập vào số nguyên 0 âm: "));
while (n % 1 !== 0 || n < 0) {
  n = Number(prompt("Nhập lại n (số nguyên và 0 âm): "));
}
let gt = 1;
for (let i = 1; i <= n; i++) {
  gt *= i;
}
console.log(gt);
