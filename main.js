//  console.log("hello cybersoft");
// console.log("Do Phu Tan")

// Variable (biến)
// Data type : (kiểu dữ liệu)
//--string : Chuỗi
//--number
//--boolean : lý luận ( true false)
//--undefined
//--null
//
//

var username = "hello cybersoft";
console.log("Username : " + username);
var address = "112 cao thang";
console.log("dia chi :" + address);
var numberStudents = 40;
console.log("si so lop : " + numberStudents);

var isLogin = true;

var firstName;
console.log(firstName);

// các loại toán tử
//
//
//
// +
var num1 = 10;
var num2 = "5";
var num12 = num1 + num2;
console.log("Tổng: " + num12);

// -
var num3 = 10;
var num4 = 5;
var num34 = num3 - num4;
console.log("hiệu: " + num34);

// *
var num5 = 10;
var num6 = 2;
var num56 = num5 * num6;
console.log("tích: " + num56);

// / (chia)
var num7 = 10;
var num8 = 2;
var num78 = num7 / num8;
console.log("thương:" + num78);

// %
var num9 = 10;
var num10 = 2;
var num910 = num9 % num10;
console.log("dư: " + num910);

//  ++: tăng 1 đơn vị
var count = 0;
//count = count + 1; // count++
//console.log (count);

var newcount = count++;
console.log("newcount: " + newcount);

// ++ count : tăng xong rồi mới gán cho biến newcount
// count ++ : gán cho biến newcount rồi mới + nên kết quả sẽ khác

// phép gán
// += -= *= /= %=
var sum = 0;
sum += 5; //sum =sum + 5;
console.log("sum: " + sum);

// hằng số (ES6)
// const
// không thể gán biến mới, muốn thay đổi phải sửa tại biến const

//
const PI = 3.14;
console.log(PI);

// mô hình 3 khối
// -đầu vào :
var canh1 = 3;
var canh2 = 4;

//
// -Xử lý :
// bình phương 2 cạnh góc vuông
canh1 *= canh1;
canh2 *= canh2;
// tổng bình phuong 2 cạnh góc vuông
tongBinhPhuong = canh1 + canh2;
// căn bật 2 tong Binh phương
var canhhuyen = Math.sqrt(tongBinhPhuong);

var result = "cạnh huyền là : " + canhhuyen;

// Đầu ra :  xuất ra kết quả
//
console.log(result);

// bài 2
// tinh tổng 3 kí số
// phần 1: 586
var n = 586;
// xử lý
// tách lấy số nguyên phần trăm
var hundred = Math.floor(n / 100);
console.log("ky số 1 : " + hundred);
//  tách lấy số phần chục
var ten = Math.floor((n % 100) / 10);
console.log("ký số 2 : " + ten);
//  tách lấy số phần đơn vị
var unit = n % 10;
console.log("ký số 3 : " + unit);

var sum = hundred + ten + unit;
console.log("sum : " + sum);

// phần 2 : 219
var n = 219;
// xử lý
// tách lấy số nguyên phần trăm
var hundred = Math.floor(n / 100);
console.log("ky số 1 : " + hundred);
//  tách lấy số phần chục
var ten = Math.floor((n % 100) / 10);
console.log("ký số 2 : " + ten);
//  tách lấy số phần đơn vị
var unit = n % 10;
console.log("ký số 3 : " + unit);

var sum = hundred + ten + unit;
console.log("sum : " + sum);

// BTVN
// bài 1: tính số tiền lương
var salaryday = 100000;
// số ngày làm việc
var day = 26;
// lương nhận được
salary = salaryday * day;
console.log("lương : " + salary);

// bài 2: giá trị trung bình

var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;

//lấy số nguyên ngẫu nhiên
n1 = Math.floor(Math.random() * 10);
n2 = Math.floor(Math.random() * 10);
n3 = Math.floor(Math.random() * 10);
n4 = Math.floor(Math.random() * 10);
n5 = Math.floor(Math.random() * 10);

console.log("n1: " + n1);
console.log("n2: " + n2);
console.log("n3: " + n3);
console.log("n4: " + n4);
console.log("n5: " + n5);

// tổng của 5 số ngẫu nhiên
ntb = n1 + n2 + n3 + n4 + n5;

// trung bình
random = ntb / 5;
console.log("trung bình số : " + random);

// bài 3
// giá USD
var usd = 6;
var vnd = 23000;
//chuyển đổi usd > vnd
giatri = usd * vnd;
// nhận được
console.log("vnd: " + giatri);

// bài 4
var dai = 20;
var rong = 30;

// diện tích
dientich = dai * rong;
// chu vi
chuvi = (dai + rong) * 2;

console.log("diện tích : " + dientich);
console.log("chu vi  : " + chuvi);

//bài 5
// tính tổng 2 ký số
// vd 1: 75
var n1 = 75;
// tách ký số hàng chục
var ten = Math.floor(n1 / 10);
// console.log(ten);
// tách ký số hàng đơn vị
var unit = n1 % 10;
// console.log(unit);
// tính tổng ký số
var kyso = ten + unit;
console.log("ký số  vd1 :" + kyso);

// vd 2 : 90
var n2 = 90;
// tách ký số hàng chục
var ten = Math.floor(n2 / 10);
// console.log(ten);
// tách ký số hàng đơn vị
var unit = n2 % 10;
// console.log(unit);
// tính tổng ký số
var kyso = ten + unit;
console.log("ký số  vd2 :" + kyso);
