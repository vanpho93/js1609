function inSoChiaHetCho2() {
    for(let i = 0; i <= 100; i++) {
        if (i % 2 === 0) console.log(i);
    }
}

function inSoChia3Du1() {
    for(let i = 0; i <= 100; i++) {
        if (i % 3 === 1) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 0; i <= 100; i++) {
        if (Math.sqrt(i) % 1 === 0) console.log(i);
    }
}

function inSo(fn) {
    for(let i = 0; i <= 100; i++) {
        if (fn(i)) console.log(i);
    }
}

//arrow function

inSo(i => {
    return i % 2 === 0
});

// inSo(i => Math.sqrt(i) % 1 === 0);

// inSo(i => i % 3 === 1);

// // Math.sqrt()
// const doubleX = x => 2 * x; // function(x) { return 2 * x }
// console.log(doubleX(100));
