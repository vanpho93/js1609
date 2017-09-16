// for(let i = 0; i <= 10; i += 2) console.log(i);

// let i = 0;
// while (i <= 10) console.log(i += 2); // i = i + 2

/*

// 1 dong code

i = 1; j = 5;
i = 2; j = 4
i = 3; j = 3

i + j = 6
j = 6 - i

    *
   **
  ***
 ****
*****

*/

for(let i = 1; i <= 5; i++) {
    let str = '';
    for(let j = 1; j <= 5; j++) {
        str +=  (j >= 6 - i) ? '*' : ' ';
    }
    console.log(str);
}

// for(let s = '*'; s.length <= 5; s += '*') console.log(s);
