## Squares of a Sorted Array
### Problem
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

### Visual
<p align="center">
<!-- <img src=".jpg"  width="350" > -->
</p>

### Algrothism
*  Make a funcation that take an array
* Make an empty array
* Make a for loop 
  * push the value of index times the same index value into the empty array
* Then return the empty array and sort 
### Psudocode
```
START FUNCTION(INPUT <-- array)
  result <-- []
  FOR i<-- 0 to the length of the array
    push(array[i]*array[i]) into result
  END FOR
  OUTPUT <-- result.sort(non-decreasing order)
END FUNCTION
```
### Code 
Click the the "[Link](sortedSquares.js)" to view the the code. 