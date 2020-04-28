setTimeout(() => console.log("1"), 0);
new Promise(resolve => resolve()) .then(_ => console.log("2"));
console.log("3");
new Promise(resolve => resolve()) .then(_ => console.log("4"));
setTimeout(() => console.log("5"), 0);
setTimeout(() => console.log("6"), 0);
new Promise(resolve => resolve()) .then(_ => console.log("7"));
console.log("8");

//3
// 8
// 2
// 4
// 7
// 1
// 5
// 6
