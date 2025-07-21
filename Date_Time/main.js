console.log(`Time right now is: ${new Date().toLocaleTimeString()}`);
console.log(`Date right now is: ${new Date().toLocaleDateString()}`);

let currentDate = new Date();
console.log(currentDate);
console.log(typeof currentDate); // result: object

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // +1 to get the correct month because months are 0-indexed
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(`Current year: ${year}`);
console.log(`Current month: ${month}`);
console.log(`Current day: ${day}`);
console.log(`Current hours: ${hours}`);
console.log(`Current minutes: ${minutes}`);
console.log(`Current seconds: ${seconds}`);

// Timestamp là một đại diện cụ thể cho một điểm cụ thể trong thời gian, tính bằng millisecond từ mốc 0. Mốc thời gian 0: 00:00:00 ngày 1 tháng 1 năm 1970 UTC.
// xuất thời gian tại mốc 0
const timestamp1 = new Date(0);
console.log(timestamp1);

// sử dụng getTime() để lấy timestamp hiện tại
const currentTimestamp = new Date().getTime();

// timestamp tính bằng millisecond (nghĩa là đếm từ mốc 0 đến thời điểm hiện tại với đơn vị là millisecond)
console.log(`Current timestamp: ${currentTimestamp}`);

// set ngày tháng theo ý muốn
// cách 1: new Date(year, month, day, hours, minutes, seconds)
const myDate1 = new Date(2025, 11, 12, 2, 30, 0);
console.log(myDate1);
console.log(`Cách 1: ${myDate1.toLocaleDateString()}`);

// Cách 2: new Date('YYYY-MM-DDTHH:mm:ss')
const myDate2 = new Date("2025-12-12T02:30:00");
console.log(`Cách 2: ${myDate2}`);

/*
"2025-12-12" là ngày 12 tháng 12 năm 2025.
"T" là ký hiệu phân tách giữa ngày và giờ trong định dạng ISO 8601.
"02:30:00" là giờ 2 giờ 30 phút 0 giây
*/

// Cách 3: sử dụng setFullYear, setMonth, setDate
let myDate3 = new Date();
myDate3.setFullYear(2025);
myDate3.setMonth(1); // tháng 2 (tháng 1 trong JS là tháng 0)
myDate3.setDate(15); // ngày 15
console.log(`Cách 3: ${myDate3}`);
console.log(`Cách 3: ${myDate3.toLocaleDateString()}`);  // định dạng bằng phương thức toLocaleDateString()

// định dạng date time tự code
console.log(`ngày ${myDate3.getDate()} / tháng ${myDate3.getMonth( + 1)} / năm ${myDate3.getFullYear()}`);

// thêm số 0 đề xuất ngày tháng dạng 01, 02, 03...
let date1 = myDate3.getDate() < 10 ? "0" : "";
let month1 = myDate3.getMonth() + 1 < 10 ? "0" : "";
console.log(`ngày ${date1}${myDate3.getDate()} / tháng ${month1}${myDate3.getMonth() + 1} / năm ${myDate3.getFullYear()}`);


// setTimeout được sử dụng để thực hiện một hàm sau một khoảng thời gian nhất định
let sum = (a, b)=>{
    console.log(`Tổng của ${a} và ${b} là: ${a + b}`);
}
setTimeout(sum, 2000, 5, 10); // sau 2 giây sẽ thực hiện hàm sum với tham số là 5 và 10
console.log("Hàm tổng sẽ được thực hiện sau 2 giây.");
console.log("Hàm tích sẽ được thực hiện sau 3 giây.");
// truyền trực tiếp function vào setTimeout
setTimeout((a, b) => {
    console.log(`Tích của ${a} và ${b} là: ${a * b}`);
}, 3000, 5, 10); // sau 3 giây sẽ thực hiện hàm này


// setTimeout: hủy thực hiện hàm
// khi bạn sử dụng setTimeout để tạo một delay trong việc thực thi một hàm, setTimeout sẽ trả về một ID của timeout
// --> Gán ID của timeout vào một biến để tham chiếu đến nó và hủy bỏ thực hiện hàm nếu cần

// step 1: gán setTimeout vào một biến để lưu giá trị
let timeoutID = setTimeout(() => {
    console.log("Hàm này sẽ không được thực hiện vì đã bị hủy.");
}, 4000);

// step 2: dùng clearTimeout để hủy thực hiện hàm
clearTimeout(timeoutID);


// setInterval được sử dụng để giúp thực hiện một function lặp đi lặp lại sau một khoảng thời gian nhất định
/*
setInterval((a,b) => {
    console.log(`Tích của ${a} và ${b} là: ${a * b}`);
}, 1000, 5, 10); // sau mỗi 3 giây sẽ thực hiện hàm này với tham số là 5 và 10
*/


/*
setInterval(() => {
    console.log(`Thời gian hiện tại là: ${new Date().toLocaleTimeString()}`);
}, 2000); // sau mỗi 2 giây sẽ in ra thời gian hiện tại
*/

/*
let count = 0;
setInterval(() => {
    count++;
    console.log(`Đã trôi qua ${count} giây.`);
}, 1000);
*/


// hủy lặp: intervalID là một giá trị duy nhất được tả về bởi hàm setInterval
// --> Gán intervalID vào một biến để tham chiếu đến nó và hủy lặp nếu cần
let count = 0;
let countIntervalID = setInterval(() => {
    count++;
    console.log(`Đã trôi qua ${count} giây.`);
    if (count === 6) {
        clearInterval(countIntervalID); // hủy lặp sau 6 giây
        console.log("Đã dừng lặp sau 6 giây.");
    }
}, 1000);