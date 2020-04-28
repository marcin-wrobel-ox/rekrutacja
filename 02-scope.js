foo();

function foo() {
    console.log('Output 1', a);
    var a = 1;

    if(true) {
        const a = 2;
    }
    console.log('Output 2', a);
}

console.log('Output 3', a);


// scope
