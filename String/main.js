// string

// index, length
console.log(`hello, ABC`);
// khởi tạo chuỗi
console.log(`xin chào bạn
    tôi là nguyễn văn a`); // dùng dấu `` để giữ nguyên form

let n = "dat";
let l = n.length;
console.log(n[2]);
console.log(`chiều dài của chuỗi là: ${l}`);

/*
// kiểm tra nhập liệu
let mess = prompt("Nhập vào một chuỗi: ");
if (mess.length <= 140) {
  alert(`Bạn đã nhập ${mess.length} ký tự`);
} else {
  alert(`Bạn đã nhập quá ${mess.length - 140}`);
}
*/

// slice, substring
// name.slice(beginIndex, endIndex);  trích lọc chuỗi con từ chuỗi ban đầu, cắt từ beginIndex -> endIndex - 1
// name.substring(startIndex, endIndex);  trích lọc chuỗi con từ chuỗi ban đầu, cắt từ startIndex -> endIndex - 1
// nếu endIndex ở cả hai method trên không nhập thì cắt đến cuối chuỗi

let s = "tôi xin chào bạn Trương Thành Đạt";
let Slice = s.slice(0, 16); // cắt từ index 0 - 15
let Substring = s.substring(0, 16);
console.log(Slice);
console.log(Substring);

/*
// chỉ cho phép nhập tối đa 20 ký tự, nếu quá tự cắt đi phần thừa
let input = prompt("Nhập vào chuỗi: ");
if (input.length <= 20) {
  alert(`Bạn đã nhập ${input.length} ký tự`);
} else {
  alert(`Bạn đã nhập quá ${input.length - 20} ký tự`);
  let phanChuan = input.slice(0, 20);
  let phanThua = input.slice(20, input.length + 1);
  console.log(`Phần chuẩn sau xử lý là: ${phanChuan}`);
  console.log(`Phần thừa là: ${phanThua}`);
}
*/

/*
so sánh substring và slice
- substring: nhận vào 2 parameters là start và end. Nếu end < start, chúng sẽ đảo ngược - tự động hiểu số nhỏ hơn là vị trí start
- slice: cũng nhận vào 2 parameters là start và end. Nếu end < start, chuỗi sẽ được xem là rỗng.
*/
let s1 = "0123456789";
console.log("Sử dụng substring");
console.log(s1.substring(1, 5)); // 1234
console.log(s1.substring(5, 1)); // 1234

console.log("Sử dụng slice");
console.log(s1.slice(1, 5));
console.log(s1.slice(5, 1)); // rỗng

/*
xử lý số âm
- substring: sẽ chuyển đổi số âm thành 0 và nếu end < start sau kki chuyển số âm thì nó sẽ đảo ngược chúng.
- slice: cho phép sử dụng số âm để đếm từ cuối chuỗi. Số âm sẽ được hiểu là đếm từ cuối chuỗi về phía trước
*/
let s2 = "0123456789";
console.log("Sử dụng substring với đối số âm");
console.log(s2.substring(-3, -1)); // chuyển số âm thành 0 -> substring (0, 0) -> chuỗi rỗng

console.log(s2.substring(4, -6)); // chuyển số âm thành 0 -> substring (4, 0) -> đảo lại s2.substring(0, 4)

console.log("Sử dụng slice với đối số âm");
console.log(s2.slice(-3, -1)); // cắt từ -3 -> -2 (đếm từ đằng sau lên, bắt đầu từ 0, -1, -2,...)

// trim - trimEnd - trimStart
let t1 = "          0123456789              ";
console.log(t1);
console.log(t1.trim());
console.log(t1.trimEnd());
console.log(t1.trimStart());

// concat - charAt - toUpperCase - toLowerCase
// let newString = s1.concat(s2, s3,...sn): nối các chuỗi s2, s3,...sn vào chuỗi s1
// toUpperCase: viết hoa
// toLowerCase: viết thường
// charAt(index): trả về chuỗi nằm ở vị trí index được truyền vào
let h1 = "xin chào bạn";
let h2 = " Trương Thành Đạt";
console.log(h1.concat(h2)); // nối chuỗi h2 vào h1
console.log(h1.toUpperCase());
console.log(h2.toLowerCase());
console.log(h1.charAt(4));

// replace(oldValue, newValue), repeat(count)
// let newString = replace(oldValue, newValue): thay thế giá trị (oldValue) đầu tiên được tìm thấy trong chuỗi bằng giá trị mới (newValue)
// string.repeat(count): lặp chuỗi count lần với count là số lần lặp lại của chuỗi
let r = "hello world";
console.log(r.replace(r, "Hello World"));
console.log(r.repeat(3));

let r2 = "học, học nữa, học mãi";
console.log(r2.replace("học", "ngủ")); // nó chỉ thay thế từ "học" đầu tiên được tìm thấy
console.log(r2.replace(/học/g, "ngủ")); // nó thay thế toàn bộ chữ "học" thành chữ "ngủ" trong câu
// dấu gạch chéo để biểu diễn biểu thức chính quy, là chuỗi cần tìm và thay thế
// g: cờ global. Khi sử dụng cờ này js sẽ tìm kiếm trên toàn bộ chuỗi

// indexOf, lastIndexOf, includes
// indexOf(searchValue, fromIndex): tìm kiếm (searchValue) xuất hiện lần đầu trong chuỗi. Nếu tồn tại trả về vị trí index, không tồn tại trả về -1
// lastIndexOf(searchValue, endIndex): tìm kiếm (searchValue) xuất hiện lần cuối trong chuỗi. Nếu tồn tại trả về vị trí index, không tồn tại trả về -1
// includes(searchValue, fromIndex): kiểm tra chuỗi con
console.log("indexOf");
let i1 = "abcxcyz";
console.log(i1.indexOf("c"));
console.log(i1.indexOf("c", 3));
console.log(i1.indexOf("h")); // not found

console.log("lastIndexOf");
let i2 = "abcxyzchk";
console.log(i2.lastIndexOf("ch"));
console.log(i2.lastIndexOf("c", 6));
console.log(i2.lastIndexOf("c", 1)); // not found

console.log("includes");
let i3 = "abcxyz";
console.log(i3.includes("c"));
console.log(i3.includes("h")); // not exist
console.log(i3.includes("c", 1));

// startsWith(searchValue, startIndex): kiểm tra chuỗi gốc có bắt đầu bằng searchValue không? Đúng trả về true, sai trả về false
// endsWith(searchValue, endIndex): kiểm tra chuỗi gốc có kết thúc bằng searchValue không? Đúng trả về true, sai trả về false
console.log("startWith");
let i4 = "abcxyz";
console.log(i4.startsWith("ab"));
console.log(i4.startsWith("bc", 1));

let i5 = "12345";
console.log(i5.endsWith("5"));
console.log(i5.endsWith("3", 3));

// kiểm tra đuôi .mp3
let ex = "music.mp3";
if (ex.endsWith(".mp3")) {
  console.log("Tệp tin là file âm thanh");
} else {
  console.log("Tệp tin không là file âm thanh");
}

// split(separator, limit): tách chuỗi trả về mảng
let f = "toán, văn, anh";
console.log(f.split(","));
console.log(f.split(",", 2)); // giới hạn 2 phần tử

let j = "abcf";
console.log(j.split(""));

// kiểm tra có bao nhiêu ký tự thường, ký tự in hoa, số, space
/*
let inPut = prompt("Nhập vào một chuỗi: ");
let lowerCase = 0;
let upperCase = 0;
let num = 0;
let space = 0;

for (let i = 0; i < inPut.length; i++) {
  let c = inPut[i];
  if (c >= "a" && c <= "z") {
    lowerCase++;
  } else if (c >= "A" && c <= "Z") {
    upperCase++;
  } else if (c >= "0" && c <= "9") {
    num++;
  } else {
    space++;
  }
}
console.log(`Có ${lowerCase} ký tự thường`);
console.log(`Có ${upperCase} ký tự hoa`);
console.log(`Có ${num} ký tự số`);
console.log(`Có ${space} dấu cách`);

*/

// kiểm tra tính hợp lệ của mật khẩu

// create function check password valid
let checkPasswordValid = (pass) => {
  if (pass.length < 6) {
    return false;
  }

  let isLowerCase = false;
  let isUpperCase = false;
  let isNumber = false;

  for (let i = 0; i < pass.length; i++) {
    let char = pass[i];
    if (char >= "a" && char <= "z") {
      isLowerCase = true;
    } else if (char >= "A" && char <= "Z") {
      isUpperCase = true;
    } else if (char >= "0" && char <= "9") {
      isNumber = true;
    }
  }
  return isLowerCase && isUpperCase && isNumber;
};

// set password
let setPassword = () => {
  let password = prompt("Tạo mật khẩu: ");

  if (checkPasswordValid(password)) {
    alert(`Tạo mật khẩu thành công. Mật khẩu là: ${password}`);
    return password;
  } else {
    alert(`Mật khẩu không hợp lệ
    1. Có ít nhất 6 ký tự
    2. Có ít nhất 1 số
    3. Có ít nhất 1 ký tự viết hoa
    4. Có ít nhất 1 ký tự viết thường`);
    setPassword();
  }
};

let createPS = setPassword();

// check số lần nhập mk
let countLogin = 0;
while (true) {
  let inputPS = prompt("Nhập mật khẩu: ");
  if (inputPS === createPS) {
    alert("Đăng nhập thành công");
  } else {
    countLogin++;
    if (countLogin < 5) {
      alert(`Nhập sai password, số lần thử: ${countLogin}`);
    } else {
      alert("Quá 5 lần đăng nhập, khóa tài khoản");
      break;
    }
  }
}
