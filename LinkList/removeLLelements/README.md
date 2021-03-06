# Remove Linked List Elements

## Problem
Remove all elements from a linked list of integers that have value __val__.

## Visual
![](removeLLElement.png)

## Algorthism
* Make a function that take an input of a linked list and a value.
* Check input is a linked list
* While at the head 
	* If the val of the head is the same as the values.
    * go to the next node.
* Define current as head.
* While current and current.next.
	* if current.next value is the the same as the given value.
		* Define current.next as current.next.next.
	* Else current is current.next
* Return head

## Pseudocode
```
START removeElement <-- FUNCTION(INPUT<-- head, val)
	IF !head
		OUTPUT <-- RETURN head
	END IF
	WHILE head
		IF head.val === val
			head <-- head.next
		END IF
		ELSE 
			break
		END ELSE
	END WHILE
	curr <-- head
	WHILE curr AND curr.next
		IF curr.next.val === val
			curr.next <-- curr.next.next
		END IF
		ELSE
			curr <-- curr.next
		END ELSE
	END WHILE
	OUTPUT <-- head
END
```
## Code
Click the "[Link](removeLLelements.js)" to view the code.

<hr>

[ ⏎ Back to Linked List index ](../README.md) 

[〈 Previous: Remove Duplicates from Sorted Linked List](../removeDuplicates/README.md) | [Next: Reverse Linked List〉](../reverseLL/README.md)
