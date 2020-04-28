const a = [];
a.push = function (item) {
    console.log('Pushed item', item);

};
a.push(1);
a.push(2);
a.push(3);

console.log(a.length === 3)

//how to make it work

// return Array.prototype.push.call(a, item);
