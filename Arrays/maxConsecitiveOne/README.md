# Max Consecutive Ones

## Problem
Given a binary array, find the maximum number of consecutive 1s in this array.

## Visual
<p align="center">
<img src="MaxCon.jpg"  width="350" >
</p>

## Algorthism
* Make a funtion that take in an binary array
* Set the max to zero
* Set current to zero
* Make a for loop
  * If index value of array
    * Increment current
    * If current is greater then max
      * max is current
    * Else current is zero
* Return the max

## Pseudocode
````
START indMaxConsecutive <-- FUNCTION(INPUT<-- array)
  max <-- 0
  current <-- 0
  FOR i <--0 to length of the array
    IF array[i] THEN 
      INCREMENT current
      IF current > max THEN 
        max <-- current
      END IF
    ELSE current <-- 0
    END IF
  END FOR
  RETURN max
END FUNCTION
````
## Code
Click the the "[Link](maxConsecitiveOne.js)" to view the the code. 
<hr>

[⏎ Back to Array index ](../README.md) 

[〈 Previous: Merge Sorted Array](../marge/README.md) | [Next: Move Zeros〉](../moveZeros/README.md)