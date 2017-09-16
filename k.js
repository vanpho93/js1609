function getLog() {
    return console.log;
}

// getLog()(100);

function addWithX(x) {
    return function(y) {
        console.log(x + y);
    }
} // function(y) { console.log(10 + y) }

let addWith10 = addWithX(10);

addWith10(5);

