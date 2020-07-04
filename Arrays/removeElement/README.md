## Remove Element
### Problem
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

__*Note*__:<br>
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

### Visual

### Algrothism
* Make a function that take in an array and a value
* Make  a for loop
  * If the index value of the array equal the value
    use array.splice
     * *.splice(): is a javasrcipt built-in that allows changes to the contents of an array by removing or replacing existing elements and/or adding new elements in.*
  * Else incerment
Return the leanth of the array
### Psudocode
```
START FUNTION(INPUT <-- array, val)
  FOR i <-- 0 to the length of array
    IF array[i] === value
      array.splice(i,1)
    ELSE
      INCERMENT i
    END IF
    END FOR
  OUTPUT <-- length of array
END FUNCTION
```
### Code
Click the the "[Link](removeElement.js)" to view the the code. 