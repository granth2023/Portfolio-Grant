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
        

//     function findNeedle(haystack, needle){
//         if (needle =""){
//             return 0;
//         }
//         for(let i =0; i < haystack.length - needle.length; i++){
//             if (haystack.substring(i, i + needle.length) === needle){
//                 return i;
//             }
//             return -1;
//     }
// }
    
    // function lengtthofLastWord(s) {
    //     s = s.trim();

    //     const lastIndex = s.lastIndexOf(' ');

    //     return s.length - 1 - lastIndex;
    
    // }


    // function addOne (digits){
    //     let carry = 1;
    //     let n = digits.length;

    //     for (let i = n-1; i > 0; i--){
    //         let sum = digits[i] + carry;
    //         digits[i] = sum % 10;
    //         carry = Math.floor(sum / 10)
        
    //     }
    //     if(carry){
    //         digits.unshift(carry);
    //     }
    //     return digits
    // }







//  function findMaxProfit (prices){
//     if (!prices.length){ return 0; }

//     let maxProfit = 0
//     let minPrice = prices[0];

//     for (let price of prices) {
//     maxProfit = math.max( maxprofit, price - minPrice);
//     minPrice = math.min( minPrice, price)
//     }
//     return maxProfit; 
// }







// function uniqueCharacter (s){
//     freqMap = {};

//     for (let char of s){
//         if (freqMap[char]){
//             freqMap[char]++;
//         } else{
//             freqMap[char]=1;
//         }
//     }
//     for (let i = 0; i < s.length; i++){
//         if (freqMap[s[i]] === 1){
//             return i;
//         }
//     }
//     return -1;
// }


// function climbStairs(n){
//     if (n <= 2) return n;

//     let onePrevious = 1;
//     let twoPrevious = 2;
//     let current = 0;

//     for (let i = 3; i < n; i++) {
//         current = onePrevious + twoPrevious;
//         twoPrevious = onePrevious; 
//         onePrevious = Current;
//     }
//     return current;
// }



// function maxProfit(prices){
//     if(!prices.length){return 0;}

//     let maxProfit = 0;
//     let minPrice =prices[0];

//     for ( let price of prices){
//         maxProfit = math.max(maxProfit, price - minPrice);
//         minPrice = math.floor(minPrice, price)
//     }

//     return maxProfit;
// }


// function uniqueCharacter(s){ 
//     freqMap = {};

//     for (let char of s){
//         if (freqMap[char]){
//             freqMap[char]++;
//         } else {
//             freqMap[char]=1;
//         }

//         for ( let i = 0; i < s.length; i++){
//             if (freqMap[s[i] === 1]){
//                 return i;
//             }
//             return -1;
//         }
//     }
// }



// function climbStairs(n){
//     if(n <= 2) {return n;}

//     let onePrevious = 1;
//     let twoPrevious =2;
//     let current;

//     for ( let i =3; i < n; i++){
//         current = onePrevious + twoPrevious;
//         twoPrevious = onePrevious;
//         onePrevious = current;
//     }
//     return current;
// }

// function moveZeroes(nums) {
//     let pointer = 0; 

//     for ( let i = 0; i < nums.length; i++){
//         if (nums[i] !== 0){
//             nums[pointer] = nums[i]
//         }

//         if (i !== pointer){
//             nums[i] = 0;
//         }
//         pointer++;
//     }
// }


// function validPar(s){
   
//     let stack = [];
//     let mapping ={
//         ")": "(",
//         "}": "{",
//         "]": "[",
//     };
//         for ( let char of s){
//             if (mapping[char]){
//                 let topElement = stack.pop() || "#";
            
//                 if (mapping[char] !== topElement){
//                     return false;
//                 }
//             } else {
//                 stack.push(char);
//             }
//             return true;
//         }
//     }

// function validCycle (list){
//     let pos = 0;

//     for ( let i = 0; i < list.length; i++){
//         pos++; 
//     }
//     if (pos-1 >= list.length || pos - 1 < 0){
//         return false;
//     } else {
//         return true;
//     }



// }


class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x){
        this.stack1.push(x);

    }

    pop() {
        if (this.stack2.length === 0){
            while (this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
            }
            return this.stack2.pop();
        }

    peek(){
        if (this.stack2.length === 0) { 
            while (this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
            return this.stack2[this.stack2.length -1]; 
        
    }

    empty () {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}


function intersection(nums1, nums2){
    let freqMap = {};
    let result = [];

    for ( let num of nums1) {
        if (freqMap[num]){
            freqMap[num]++;
        }
        else {
            freqMap[num] = 1;
        }
        }

    for ( let num of nums2){
        if (freqMap[num] && freqMap[num] > 0){
            result.push(num);
            freqMap[num]--;
        }

       
    }
    return result;
}

function reverseList(head){
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null){
        next = curr.next; 
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;   
}


function reverseString(s){
    let left = 0; 
    let right = s.length -1;

    arr = s.split('');

    while (left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join('');
}


function isSymmertric(root) {
    function isMirror(tree1,tree2){
    if (tree1 === null && tree2 === null) return true;
    if (tree1 === null || tree2 === null) return false;

    return ( tree1.val === tree2.val) && isSymmertric(tree1.left, tree2.right) && isSymmertric(tree1.right, tree2.left);
} 
if(!root) return true;

return isMirror(root.left, root.right)
}

class ParkingSystem {
    constructor(big, medium, small){
        this.spots = [0, big, medium, small]
    }

     addCar(carType){
        if (this.spots[carType] > 0){
            this.spots[carType]--;
            return true;
        } else {
            return false;
        }
    }
    }
