// // function reverse(x) {
// //     const min = Math.pow(-2, 31);
// //     const max = Math.pow(2, 31) - 1;
    
// //     let reversedString = x.toString().split('').reverse().join('');
// //     let reversedInteger = parseInt(reversedString);
    
// //     if (x < 0) {
// //         reversedInteger *= -1;
// //     }
    
// //     if (reversedInteger < min || reversedInteger > max) {
// //         return 0;
// //     } else {
// //         return reversedInteger;
// //     }
// // }



// // function isPalindrome(x) {
// //     if (x < 0 || (x % 10 === 0 && x !== 0)) {
// //         return false;
// //     }

// //     let revertedNumber = 0;

// //     while (x > revertedNumber) {
// //         revertedNumber = revertedNumber * 10 + x % 10;
// //         x = Math.floor(x / 10);
// //     }

// //     return x === revertedNumber || x === Math.floor(revertedNumber / 10);
// // }

// // Linked Lists 


// // function ListNode(val, next) {
// //     this.val = (val === undefined ? 0 : val);
// //     this.next = (next === undefined ? null : next);
// // }
// //        var mergeTwoLists = function(l1, l2) {
// //         let dummy = new ListNode();
// //         let current = dummy; 
        

// //         while (l1 !== null && l2 !== null) {
// //             if (l1.val < l2.val) {
// //                 current.next = l1; 
// //                 l1 = l1.next; 
// //             } else {
// //                 current.next = l2; 
// //                 l2 = l2.next; 
// //             }
// //             current = current.next; 
// //         }

// //         if (l1 !== null) {
// //             current.next =l1;
// //         } else  {
// //             current.next = l2; 

// //         }

// //         return dummy.next
// //     }
//     //     //

//     // function listNode(val, next){
//     //     this.val =  (val === undefined ? 0 : val)
//     //     this.next = ( next === undefined ? 0 : next)
//     // }
//     //     function mergeLists(l1,l2) {
//     //         let dummy = new listNode();
//     //         let current = dummy 

//     //         while (l1 !==null && l2 !==null) {

//     //             if (l1.val < l2.val) {
//     //                 current.next = l1; 
//     //                 l1 = li.next;
//     //             } else {
//     //                 current.next = l2; 
//     //                 l2 = l2.next; 
//     //             }

//     //         if ( l1 = null){
//     //             current.next = l1;
                
//     //         } else { 
//     //             current.next = l2;
//     //         }

//     //         return dummy.next


//     // function listNode(val, next) {
//     //     this.val = (val === undefined ? 0: val);
//     //     this.next = (next === undefined ? 0: next);
//     // }

//     // function mergeLists(l1, l2) {
//     //     let dummy = new listNode();
//     //     let current = dummy 

//     //     while (l1 !== null && l2 !== null) {
//     //         if (l1.val < l2.val) {
//     //             current.next = l1; 
//     //             l1 = l1.next; 
//     //         } else {
//     //             current.next = l2; 
//     //             l2 = l2.next; 
//     //         }
//     //         current = current.next; 
//     //     }

//     //     if (l1 === null){
//     //         current.next = l1
//     //     } else {
//     //         current.next = l2
//     //     }
//     //     return dummy.next



//     // }



//     // function removeDuplicates(nums){
//     //     if (nums === undefined || nums.length === 0) return 0;

//     //     let i = 0; 

//     //     for (let j = 1; j < nums.length; j++) {
//     //         if (nums[j] !== nums[i]) {
//     //             i++; 
//     //             nums[i] = nums[j]; 
//     //         }
//     //     }

//     //     return i + 1;


//     // }


//     // function removeDuplicates(nums){
//     //     if (nums === undefined || nums.length === 0) return 0;
//     // }

//     // let i = 0;
//     // for(let j = 1; j < nums.length; j++){
//     //     if (nums[j] !== nums[i]){
//     //         i++;
//     //         nums[i] = nums[j];
//     //     }
//     //     return i + 1;
//     // }


//     // function targetFind(nums, target){
//     //     for (let i = 0; i < nums.length; i++){
//     //         if ( nums[i] === target || nums[i]> target){
//     //             return i;
//     //         }  
//     //     }
//     //             return nums.length; 
//     //         }
        

// //     function findNeedle(haystack, needle){
// //         if (needle =""){
// //             return 0;
// //         }
// //         for(let i =0; i < haystack.length - needle.length; i++){
// //             if (haystack.substring(i, i + needle.length) === needle){
// //                 return i;
// //             }
// //             return -1;
// //     }
// // }
    
//     // function lengtthofLastWord(s) {
//     //     s = s.trim();

//     //     const lastIndex = s.lastIndexOf(' ');

//     //     return s.length - 1 - lastIndex;
    
//     // }


//     // function addOne (digits){
//     //     let carry = 1;
//     //     let n = digits.length;

//     //     for (let i = n-1; i > 0; i--){
//     //         let sum = digits[i] + carry;
//     //         digits[i] = sum % 10;
//     //         carry = Math.floor(sum / 10)
        
//     //     }
//     //     if(carry){
//     //         digits.unshift(carry);
//     //     }
//     //     return digits
//     // }







// //  function findMaxProfit (prices){
// //     if (!prices.length){ return 0; }

// //     let maxProfit = 0
// //     let minPrice = prices[0];

// //     for (let price of prices) {
// //     maxProfit = math.max( maxprofit, price - minPrice);
// //     minPrice = math.min( minPrice, price)
// //     }
// //     return maxProfit; 
// // }







// // function uniqueCharacter (s){
// //     freqMap = {};

// //     for (let char of s){
// //         if (freqMap[char]){
// //             freqMap[char]++;
// //         } else{
// //             freqMap[char]=1;
// //         }
// //     }
// //     for (let i = 0; i < s.length; i++){
// //         if (freqMap[s[i]] === 1){
// //             return i;
// //         }
// //     }
// //     return -1;
// // }


// // function climbStairs(n){
// //     if (n <= 2) return n;

// //     let onePrevious = 1;
// //     let twoPrevious = 2;
// //     let current = 0;

// //     for (let i = 3; i < n; i++) {
// //         current = onePrevious + twoPrevious;
// //         twoPrevious = onePrevious; 
// //         onePrevious = Current;
// //     }
// //     return current;
// // }



// // function maxProfit(prices){
// //     if(!prices.length){return 0;}

// //     let maxProfit = 0;
// //     let minPrice =prices[0];

// //     for ( let price of prices){
// //         maxProfit = math.max(maxProfit, price - minPrice);
// //         minPrice = math.floor(minPrice, price)
// //     }

// //     return maxProfit;
// // }


// // function uniqueCharacter(s){ 
// //     freqMap = {};

// //     for (let char of s){
// //         if (freqMap[char]){
// //             freqMap[char]++;
// //         } else {
// //             freqMap[char]=1;
// //         }

// //         for ( let i = 0; i < s.length; i++){
// //             if (freqMap[s[i] === 1]){
// //                 return i;
// //             }
// //             return -1;
// //         }
// //     }
// // }



// // function climbStairs(n){
// //     if(n <= 2) {return n;}

// //     let onePrevious = 1;
// //     let twoPrevious =2;
// //     let current;

// //     for ( let i =3; i < n; i++){
// //         current = onePrevious + twoPrevious;
// //         twoPrevious = onePrevious;
// //         onePrevious = current;
// //     }
// //     return current;
// // }

// // function moveZeroes(nums) {
// //     let pointer = 0; 

// //     for ( let i = 0; i < nums.length; i++){
// //         if (nums[i] !== 0){
// //             nums[pointer] = nums[i]
// //         }

// //         if (i !== pointer){
// //             nums[i] = 0;
// //         }
// //         pointer++;
// //     }
// // }


// // function validPar(s){
   
// //     let stack = [];
// //     let mapping ={
// //         ")": "(",
// //         "}": "{",
// //         "]": "[",
// //     };
// //         for ( let char of s){
// //             if (mapping[char]){
// //                 let topElement = stack.pop() || "#";
            
// //                 if (mapping[char] !== topElement){
// //                     return false;
// //                 }
// //             } else {
// //                 stack.push(char);
// //             }
// //             return true;
// //         }
// //     }

// // function validCycle (list){
// //     let pos = 0;

// //     for ( let i = 0; i < list.length; i++){
// //         pos++; 
// //     }
// //     if (pos-1 >= list.length || pos - 1 < 0){
// //         return false;
// //     } else {
// //         return true;
// //     }



// // }


// class MyQueue {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     push(x){
//         this.stack1.push(x);

//     }

//     pop() {
//         if (this.stack2.length === 0){
//             while (this.stack1.length > 0){
//                 this.stack2.push(this.stack1.pop());
//             }
//             }
//             return this.stack2.pop();
//         }

//     peek(){
//         if (this.stack2.length === 0) { 
//             while (this.stack1.length > 0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//             return this.stack2[this.stack2.length -1]; 
        
//     }

//     empty () {
//         return this.stack1.length === 0 && this.stack2.length === 0;
//     }
// }


// function intersection(nums1, nums2){
//     let freqMap = {};
//     let result = [];

//     for ( let num of nums1) {
//         if (freqMap[num]){
//             freqMap[num]++;
//         }
//         else {
//             freqMap[num] = 1;
//         }
//         }

//     for ( let num of nums2){
//         if (freqMap[num] && freqMap[num] > 0){
//             result.push(num);
//             freqMap[num]--;
//         }

       
//     }
//     return result;
// }

// function reverseList(head){
//     let prev = null;
//     let current = head;
//     let next = null;

//     while (current !== null){
//         next = curr.next; 
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     return prev;   
// }


// function reverseString(s){
//     let left = 0; 
//     let right = s.length -1;

//     arr = s.split('');

//     while (left < right){
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr.join('');
// }


// function isSymmertric(root) {
//     function isMirror(tree1,tree2){
//     if (tree1 === null && tree2 === null) return true;
//     if (tree1 === null || tree2 === null) return false;

//     return ( tree1.val === tree2.val) && isSymmertric(tree1.left, tree2.right) && isSymmertric(tree1.right, tree2.left);
// } 
// if(!root) return true;

// return isMirror(root.left, root.right)
// }

// //we have a location so we can do that a class. Let's construct a system, big medium small, we want to use it later this.spots comes in, wiht an array, a 0 big medium small 
// class ParkingSystem {
//     constructor(big, medium, small){
//         this.spots = [0, big, medium, small]
//     }

//      addCar(carType){
//         if (this.spots[carType] > 0){
//             this.spots[carType]--;
//             return true;
//         } else {
//             return false;
//         }
//     }
//     }






// // 1) Code a function named charCount that
// // accepts a string as its only argument and
// // returns an object with the count of each
// // character in the string.
// // 2) The returned object should have properties
// // // where the keys are a character in the
// // string and the value is how many times the
// // character appears in the string argument.
// // 3) Upper and lower case characters should be
// // counted separately.
// // 4) Space characters should be counted too.

// // For example:

// //    charCount("Hello there")

// //    would return an object like this -->
// //        { H: 1, e: 3, l: 2, o: 1, ' ': 1, t: 1, h: 1, r: 1 }

// ------------------------------------------*/

// // Write the function here....

// function charCount(s){

//     let freqMap = {};

//     for(let i = 0; i < s.length; i++) {
//         if ( freqMap[s[i]]){
//             freqMap[s[i]]++;
//         } else { 
//             freqMap[s[i]] = 1;

//             //conditional to differentiate between upper and lower case
//         }





//     return freqMap[i];  
// }
// }


// function reverseString(s){
//     let left = 0;
//     let right = s.length -1;

//     arr = s.split('');

//     while ( left < right){
//         [arr[left],arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr.join('');
// }


// function maxSubArray(nums){
//     if( nums.length === 0) return [0, -1, 0]; 

//     let allNegative = true;
//     let maxNegative = -Infinity;
//     let maxNegativeIndex = -1;

//     for ( let i = 0; i < nums.length; i++){
//         if ( nums[i] >= 0){
//             allNegative = false;
//             break;
        
//         }
//         if ( nums[i] > maxNegative){
//             maxNegative = nums[i];
//             maxNegativeIndex = i;
//         }

//     }
//     if (allNegative) return [maxNegative, maxNegativeIndex, maxNegative];
// }
//     let maxCurrent = 0;
//     let maxGlobal = 0;
//     currentStart = [0];
//     maxStarts = [0];
//     maxEnds = [0];

//     for (let i = 1; i < nums.length; i++){
//         if ( nums[i] > maxCurrent + nums[i]){
//             maxCurrent = nums[i];
//             currentStart = [i];
//         } else {
//             maxCurrent += nums[i];
//         } if ( maxCurrent > maxGlobal){
//             maxGlobal = maxCurrent;
//             maxStarts = currentStart;
//             maxEnds = i;
//         } if (maxCurrent === maxGlobal){
//             maxStarts.push(currentStart);
//             maxEnds.push(i);
//         }
//         let results = [];
//         for ( let i = 0; i < maxStarts.length; i++){
//             results.push(maxStarts[i], maxEnds[i], maxGlobal);
//         }
//     }


//     function maximumDepth(root){
//         if(!root) return 0 

//         let queue =[root]
//         let depth = 0;

//         while ( queue > 0){
//             let levelSize = queue.length;

//             for ( let i = 0; i < levelSize.length; i++){
//                 let currentNode = queue.shift();
//                 if (currentNode.left) queue.push(currentNode.left);
//                 if (currentNode.right) queue.push(currentNode.right);
//             }
//             depth++;
//         }
//         return depth;
//     }

// function merge(intervals){
//     if(!intervals.length) return [];

//     intervals.sort((a,b) => a[0] - b[0]);

//     const merged = intervals[0];

//     for ( let i = 1; i<intervals.length; i++){
//         let lastMerged = merged[merged.length -1];
//         let current = intervals[i];


//         if (lastMerged[1] >= current[0]){
//             lastMerged[1] = math.max(lastMerged[1], current[1]);
//         } else  {
//             merged.push(current);
//         }
//     }
//     return merged;
//     }



// function parkingSytem(carType) {
//     const slot = [0, 'big', 'medium', 'small'];
//     let parkingSpots = 1;

//     if (slot.includes(carType) && parkingSpots > 0) {
//         parkingSpots--;
//         return true;
//     }

//     return false;


//     function missingNumber(nums){
//         const n = nums.length; 
//         const expectedSum = (n * (n +1) / 2);
//         let sum = 0;

//         for ( let num of nums){
//             sum += num 
//         }

//         return expectedSum - sum;
//     }
// }

// function maxsubString(s){
//     let n = s.length;

//     let set = new Set();

//     let left = 0;
//     let right = 0;
//     let maxLength = 0;

//     while ( right < n){
//         if(!set.has(s[right])){
//             set.add(s[right]);
//             maxLength = math.max(maxLength, right - left + 1);
//             right++;
//         } else { 
//             set.delete(s[left]);
//             left++;
//         }

//     }
//         return maxLength;

// }


// function validateTree(nodes) {
//     let rootCount = 0;
//     const idSet = new Set();
//     const parentIdSet = new Set();

//     for (const node of nodes) {
//         // Check for unique IDs
//         if (idSet.has(node.id)) {
//             return false; // Duplicate node ID found
//         }
//         idSet.add(node.id);

//         // Check for root node
//         if (!node.parentId) {
//             rootCount++;
//         } else {
//             parentIdSet.add(node.parentId);
//         }
//     }

//     // There should be only one root
//     if (rootCount !== 1) {
//         return false;
//     }

//     // Check if every node (except the root) has exactly one parent
//     for (const id of idSet) {
//         if (id !== Array.from(parentIdSet).find(parentId => parentId === id) && id !== Array.from(nodes).find(node => !node.parentId).id) {
//             return false; // Node with no parent found or a node with multiple parents found
//         }
//     }

//     return true;
// }

// function shortestDistance( text, word1, word2 ) {
//     let words = text.split();
//     let wordMap = new Map ();
//     let minDistance = words.length;

//     words.Map((word, index)=> {
//         if (word === word1 || word === word2) {
//             wordMap.set(word, index);
//             if(wordMap.has(word1) && wordMap.has(word2)){
//                 minDistance = Math.min(minDistance, wordMap.get(word1) - wordMap.get(word2));
//             }
//         }
//     });

//     return (!wordMap.has(word1) || !wordMap.has(word2)) ? -1 : minDistance;



//     function missingNum(n){
//         const expectedSum = (n * (n + 1) / 2);
//         let sum = 0;

//         for ( let num of nums){
//             sum += num;
//         }

//         return expectedSum - sum;
//     }

//     function threesum(nums){
//         nums.sort((a,b) => a-b);
//         const result = [];

//         for( let i =0; i <nums.length -2; i++){ 
//             if( i> 0 && nums[i] === nums[i-1]) continue;

//             let left = i +1;
//             let right = nums.length -1;

//            while(left< right){
//                 const sum = nums[i] + nums[left] + nums[right];

//                 if(sum===0){
//                     result.push([nums[i], nums[left], nums[right]]); 

//                     while ( left < right && nums[left] === nums[left + 1]) left++;
//                     while
//                 }
//             }
//         }
//     }