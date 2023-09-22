//leet code question no = 02


//******way one*******

// var twoSum = function(nums, target) {
//     const numMap = new Map();

//     for (let i = 0; i < nums.length; i++){
//         const comp = target - nums[i];

//         if (numMap.has(comp)) {
//       // If found, return the indices of the two numbers
//       return [numMap.get(comp), i];
//     }

//     // If the comp is not in the Map, store the current number and its index
//     numMap.set(nums[i], i);
//   }

//   // If no solution is found, return an empty array or handle it as needed
//   return [];
    
// };



//*******way two *****/
function twoSum(nums, target) {
    const numToIndex = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (complement in numToIndex) {
        return [numToIndex[complement], i];
      }
  
      numToIndex[nums[i]] = i;
    }
  
    // No solution found
    return [];
  }

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3));


