// function reverse(x) {
//     const min = Math.pow(-2, 31);
//     const max = Math.pow(2, 31) - 1;
    
//     let reversedString = x.toString().split('').reverse().join('');
//     let reversedInteger = parseInt(reversedString);
    
//     if (x < 0) {
//         reversedInteger *= -1;
//     }
    
//     if (reversedInteger < min || reversedInteger > max) {
//         return 0;
//     } else {
//         return reversedInteger;
//     }
// }



// function isPalindrome(x) {
//     if (x < 0 || (x % 10 === 0 && x !== 0)) {
//         return false;
//     }

//     let revertedNumber = 0;

//     while (x > revertedNumber) {
//         revertedNumber = revertedNumber * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }

//     return x === revertedNumber || x === Math.floor(revertedNumber / 10);
// }