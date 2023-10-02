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

// Linked Lists 


// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }
    //    var mergeTwoLists = function(l1, l2) {
    //     let dummy = new ListNode();
    //     let current = dummy; 

    //     while (l1 !== null && l2 !== null) {
    //         if (l1.val < l2.val) {
    //             current.next = l1; 
    //             l1 = l1.next; 
    //         } else {
    //             current.next = l2; 
    //             l2 = l2.next; 
    //         }
    //         current = current.next; 
    //     }

    //     if (l1 !== null) {
    //         current.next =l1;
    //     } else  {
    //         current.next = l2; 

    //     }

    //     return dummy.next
    //     //