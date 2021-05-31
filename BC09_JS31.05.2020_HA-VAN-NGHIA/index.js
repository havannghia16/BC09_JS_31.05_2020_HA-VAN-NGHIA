// 1. In bảng số từ 1 đến 100 thỏa các điều kiện:
function printNumber() {
  var a = "";
  for (var i = 1; i <= 100; i++) {
    if (i % 10 === 1) {
      a += "\n";
    }
    a += i + " ";
  }
  console.log(a);
}
printNumber();

// 2. Viết function nhận vào tham số là một mảng số nguyên,tìm và in ra các số nguyên tố trong mảng
// function (number = [1, 2, 3, 4, 5, 6, 7]) {
//   for (var i = 0; i < a.length; i++) {
//     if (if number[i] % 2 === 0)

//   }
// }

// 3.Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
function tinhS(n) {
  var sum = 0;
  for (var i = 2; i <= n; i++) {
    sum += i;
  }
  console.log(sum + 2 * n);
}
tinhS(10);

// 4.Viết function nhận vào tham số n, tính số lượng ước số của n. Vd: n = 8 => Ước số của 8 là : 8,4,2,1
function timUocSo(n) {
  UocSo = "";
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      UocSo += i + ", ";
    }
  }
  console.log("Ước số của", n, "là :", UocSo);
}
timUocSo(10);

// 5.Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn phím.Vd :1234 => 4321 (Gợi y: duyệt chuỗi giống như duyệt mảng)

function timSoDaoNguoc(n) {
  var soDaoNguoc = "";
  for (var i = n.length - 1; i >= 0; i--) {
    soDaoNguoc += n[i];
  }
  console.log("Vậy số đảo ngược của", n, "cần tìm là:", soDaoNguoc);
}
timSoDaoNguoc("123456");

// 6.Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤100
var sum = 0;
var x = 0;
while (sum + x <= 100) {
  x++;
  sum += x;
}
console.log("vậy x nguyên dương lớn nhất mà ta cần tìm là:", x);

// 7. Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó. Vd: n = 3

function inBangCuuChuong(n) {
  console.log("bảng cửu chương:", n);
  var multi = 0;

  for (var i = 0; i <= 10; i++) {
    multi = n * i;

    console.log(n, "x", i, "=", multi);
  }
}
inBangCuuChuong(5);

// 8.Viết hàm chia bài cho 4 người chơi
//  Cho 4 mảng, đại diện cho 4 người chơi
//  var players = [ [], [], [], [] ];
//  Và 1 mảng bài: var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
// "AS", "7H", "9K", "10D"]
// Yêu cầu viết code để chia cho mỗi player 3 lá theo luật, chia lần lượt mỗi
// người 1 lá

// 9. viết chương trình nhập vào m là tổng số chó và gà, n là tổng số
// chân, yêu cầu tìm

function timGaVaCho() {
  for (var ga = 1; ga <= 36; ga++) {
    for (var cho = 1; cho <= 36; cho++) {
      if (ga + cho === 36 && 2 * ga + 4 * cho === 100) {
        console.log("số gà là:", ga, "và số chó là:", cho);
      }
    }
  }
}
timGaVaCho();

// 10. tính góc lệch của kim phút và kim giờ
// phân tích
// . Nhập vào số giờ và số phút => góc lệch giữa kim giờ và kim phút. Vd 6:10
//  gọi m là số phút và h là số giờ
// - 60 phút thì kim phút quay được 360độ
//   => 1 phút = 6độ
// - 12h thì kim giờ quay được 360độ
//   => 1 giờ = 30độ
//   => 1 phút = 0.5độ

//   Góc tạo bởi kim giờ và kim phút = 360độ - |góc kim phút - góc kim giờ|
//   = 360độ - |(m*6độ - 0.5độ*(h*60 + m))|

function tinhGocLech(h, m) {
  alpha = 360 - Math.abs(m * 6 - 0.5 * (h * 60 + m));
  console.log(alpha);
}
tinhGocLech(2, 20);
