# Range Sum of BST
## Problem
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

## Visual
![](RangeSum.png)
## Algorthism
* Make a  function that take in a root and two numbers( L, and R)
  * *__Note__*: L is the low number and R is the highest number
* Set a counter
* If the root  is equal to null,
  * Returns the counter
* If the L is greater then the root value.
  * Add the value to counter which calls the function again, but insted of just the root it root of the left
* If the root value is greater/equal to the left *__and__* less then/equal to the of the rigth
  * Add to the counter of root.val.
* If root.val is less then the right it
  * Add to the counter and calls the funtion again from the root of the right.
* Return the counter
## Pseudocode
```
START rangeSumBST <-- FUNCTION(INPUT<-- root, L<-- NUMBER, R <-- NUMBER)
  sum <-- 0
  IF root === NULL
    RETURN sum
  END IF
  IF root.val > L
   sum += rangeSumBST(root.left, L,R)
  END IF
  IF root.val <= R AND root.val >= L
    sun += root.val
  END IF
  IF root.val < R
    sum += rangeSumBST(root.right,L,R)
  END IF
  RETURN OUTput<--sum
END
```


## Code
Click ["here"](rangeSum.js) to view code.

<hr>

[ ⏎ Back to Trees index ](../README.md) 

[〈 Previous: Path Sum](../pathSum/README.md) | [Next: Search in a Binary Search Tree 〉](../searchTree/README.md)
