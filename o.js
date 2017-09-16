function doSth(fn) {
    for(let i = 0; i < 10; i++) {
        fn(i);
    }
}

const func = function(x) {
    console.log(x);
};

doSth(func);
