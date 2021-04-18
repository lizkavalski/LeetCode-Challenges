# Binary Search

## Problem
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

## Visual

![](binarySerch.png)

## Algorthism
* Make a function that has accapt an array and a target value.,
* Define a variable (low) as zero.,
* Define a variable(high) as length of array minus 1.,
* While low is less than or equal to high.,
  * Deifne varibale(middle) as low plus high divide by 2. - Using Math.floor to make sure numbers are whole numbers,
  * If array index is less than target value. - redifine low as middle plus one,
  *If else  index is more than target value. - redifine low as middle minus one,
  * else return middle,
* return -1 

## Pseudocode
```
START search <-- FUNCTION(INPUT<-- array, target)
  low <-- 0
  high <-- array.length -1
  WHILE low LESS THAN OR EQUAL high
    middle <-- Math.Floor((low + high)/2)
    IF array[middle] LESS THAN target
      low <-- middle + 1
    ELSE IF array[middle] MORE THAN target
      high <-- middle - 1
    ELSE OUTPUT return mid
  OUTPUT -1
END
```
## Code
 Click the the [Link](binarySearch.js) to view the the code. 

<hr>

[⏎ Back to Array index ](../README.md) 

[Next: Check if N and it Double Exist 〉](../checkIfExist/README.md)