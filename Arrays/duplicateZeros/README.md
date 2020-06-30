## Duplicate Zeros

### Problem 
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

__*Note*__ :<br> That elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

### Visual

### Algorthism
* Make a function that accepts an array as an input
* Make a for loop
* If the index value is zero
  * define the length of the array as length of array minus one
  * use .splice 
    * *.splice(): is a javasrcipt built-in that allows changes to the contents of an array by removing or replacing existing elements and/or adding new elements in.*
  * increments i
* return the array.

### Psudocode
````
START FUNCTION(INPUT <-- array)
  FOR i<-- 0 i to the length of array
    IF array[i] === 0
      array.length <-- array.length - 1
      array.slice(i,0,0)
      i++
    END IF
  END FOR
END FUNCTION
````
### Code 
 Click the the "[Link](duplicateZeros.js)" to view the the code. 