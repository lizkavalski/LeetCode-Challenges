## Valid Monutain Array
### Problem
Given an array A of integers, return true if and only if it is a valid mountain array.</br>
__*Note:*__</br>
Recall that A is a mountain array if and only if:
* A.length >= 3
* There exists some i with 0 < i < A.length - 1 such that:
  * A[0] < A[1] < ... A[i-1] < A[i]
  * A[i] > A[i+1] > ... > A[A.length - 1]

### Visual
<p align="center">
<!-- <img src=".jpg"  width="350" > -->
</p>

### Algorthism 
* Make a function
* Check the length of the array
* Set the direction to one
* Set the previous to the begining of the array
* Make a for loop
  * set a current to the value of the array index
  * If the current is greater then the previous
    * also if the direction is not 1 
      * retrun false
      * set previous to current and continue going through the array
  * If current is less the previous 
    * also if the value of i equal 1 
     * Return false
     * set the direction to 0
     * set previous to current and continue going through the array
  * Else return false
* retrun true or false if dirction is zreo
    
### Psudocode
```
START FUNCTION (INPUT<-- array)\
  IF length of array <= 2 <-- RETURN false
  direction <-- 1
  previous <-- array[0]

  FOR i<-- 1 to the length of array 
    current <-- array at [i]
    IF current > previous
      IF direction !== 1 <-- RETURN false
      previous <-- current
      contiune goting through array
    ELSE IF current < previous
      IF i === 1  <-- RETURN false
      direction <-- 0
      previous <-- current
    ELSE
      RETURN false
    END IF
  END FOR LOOP
  OUTPUT <-- IF direction === 0 return if ture || false
END FUNCTION
```
### Code 
Click the the "[Link](vaildMountainArray.js)" to view the the code. 