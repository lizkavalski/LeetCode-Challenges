# Check if N and it Double Exist

## Problem 
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

__*Note*__:<br>
More formally check if there exists two indices i and j such that :

* i != j
* 0 <= i, j < arr.length
* arr[i] == 2 * arr[j]

## Visual
<p align="center">
<img src="Ifexist.jpg"  width="270" >
</p>

## Algorthism

* Create a function that take an array as an input
* Do a loop that goes the length of the arr.
* Do a second loop, which:
  * if the index of the frist loop is:
     * multiply by  2 or, divide by 2
        * equal the index of the second loop return true
  * if not return false

## Pseudocode
  ````
  START checkIfExist <-- FUNCTION(INPUT<-- array)
    FOR i<-- 0 to length of array
      FOR j <-- to length of array
        IF array[i] * 2 === array[j] || array[i] / 2 === array[j]
          RETURN OUTPUT <--true
      END FOR
    END FOR
    RETURN OUTPUT<--false
  END
  ````
## Code 
 Click the the "[Link](checkIfExist.js)" to view the the code. 

 <hr>

[⏎ Back to Array index ](../README.md) 

[〈 Previous: Binary Search](../binarySearch/README.md) | [Next: Contains Duplicates 〉](../containsDuplicates/README.md)