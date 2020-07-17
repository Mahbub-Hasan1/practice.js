var a = 4;
var b = 5;

var temp = a;
a = b;
b = temp;
// console.log("after ata a=", a, "ata b =", b);

var p = 5;
var q = 7;
[p, q] = [q, p];
console.log("after ata p=", p, "ata q=", q);