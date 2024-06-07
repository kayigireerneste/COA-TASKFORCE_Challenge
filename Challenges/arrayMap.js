//function to return true or false if argument array contain sub-array that is equel to 
//the argument target or doesn't contain sub-array resppectively
function hasContiguousSubarrayWithSum(array, target) {

    //this is the outer loop to iterate through each element of array
    for (let start = 0; start < array.length; start++) {

        let currentSum = 0;

        //this is the inner loop to calculate sum for each sub-array of an array
        for (let end = start; end < array.length; end++) {

            currentSum += array[end];

            //here is to check if there is an sub-array that is equal to target the
            // we return true if there isn't return false
            if (currentSum === target) {
                return true;
            }
        }
    }
    return false;
}

 //testing our function
// Example usage:
let array = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasContiguousSubarrayWithSum(array, target)); // Output: true


let array1 = [0, 7, 9, 5, 8, 4];
let targete = 18;
console.log(hasContiguousSubarrayWithSum(array1, targete)); //output: false