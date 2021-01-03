# N-ary Tree Postorder Traversal
## Problem 
Given an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value.

## Visual
![post order](postOrder.png
)
## Algorthism
* Check if their is a root.
  * If not return an empty array.
* Define an empty to push item into.
* Make a function that traverse through the tree by having the input of a node.
  * If a node child
    * For each of the node child traverse
  * Push node value into the array
* Call the function with the root as it input
* Return the array
## Pseudocode
```
START 
postorder <-- FUNCTION(INPUT<-- root)
  IF (!root)
    RETURN []
  END IF
  order <-- []
  traverse <-- FUNTION(INPUT<--node) 
    IF(node.children)
     node.children.forEach((child)=> tranverse(child))
    END IF
    order.push(node.value)
  traverse(root)
  OUTPUT RETURN order
END
```

## Code
Click [here]([postorder].js) to view code.

<hr>

[ ⏎ Back to Trees index ](../README.md) 

[〈 Previous: Maximum Depth of Binary Tree](../maxDepth/README.md) | [Next: N-ary Tree Preorder Traversal〉](../preOrder/README.md)

