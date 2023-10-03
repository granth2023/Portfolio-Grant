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
//        var mergeTwoLists = function(l1, l2) {
//         let dummy = new ListNode();
//         let current = dummy; 
        

//         while (l1 !== null && l2 !== null) {
//             if (l1.val < l2.val) {
//                 current.next = l1; 
//                 l1 = l1.next; 
//             } else {
//                 current.next = l2; 
//                 l2 = l2.next; 
//             }
//             current = current.next; 
//         }

//         if (l1 !== null) {
//             current.next =l1;
//         } else  {
//             current.next = l2; 

//         }

//         return dummy.next
//     }
    //     //

    // function listNode(val, next){
    //     this.val =  (val === undefined ? 0 : val)
    //     this.next = ( next === undefined ? 0 : next)
    // }
    //     function mergeLists(l1,l2) {
    //         let dummy = new listNode();
    //         let current = dummy 

    //         while (l1 !==null && l2 !==null) {

    //             if (l1.val < l2.val) {
    //                 current.next = l1; 
    //                 l1 = li.next;
    //             } else {
    //                 current.next = l2; 
    //                 l2 = l2.next; 
    //             }

    //         if ( l1 = null){
    //             current.next = l1;
                
    //         } else { 
    //             current.next = l2;
    //         }

    //         return dummy.next


    // function listNode(val, next) {
    //     this.val = (val === undefined ? 0: val);
    //     this.next = (next === undefined ? 0: next);
    // }

    // function mergeLists(l1, l2) {
    //     let dummy = new listNode();
    //     let current = dummy 

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

    //     if (l1 === null){
    //         current.next = l1
    //     } else {
    //         current.next = l2
    //     }
    //     return dummy.next



    // }



    // function removeDuplicates(nums){
    //     if (nums === undefined || nums.length === 0) return 0;

    //     let i = 0; 

    //     for (let j = 1; j < nums.length; j++) {
    //         if (nums[j] !== nums[i]) {
    //             i++; 
    //             nums[i] = nums[j]; 
    //         }
    //     }

    //     return i + 1;


    // }


    // function removeDuplicates(nums){
    //     if (nums === undefined || nums.length === 0) return 0;
    // }

    // let i = 0;
    // for(let j = 1; j < nums.length; j++){
    //     if (nums[j] !== nums[i]){
    //         i++;
    //         nums[i] = nums[j];
    //     }
    //     return i + 1;
    // }


    // function targetFind(nums, target){
    //     for (let i = 0; i < nums.length; i++){
    //         if ( nums[i] === target || nums[i]> target){
    //             return i;
    //         }  
    //     }
    //             return nums.length; 
    //         }
        

    function findNeedle(haystack, needle){
        if (needle =""){
            return 0;
        }
        for(let i =0; i < haystack.length - needle.length; i++){
            if (haystack.substring(i, i + needle.length) === needle){
                return i;
            }
            return -1;
    }
}
    