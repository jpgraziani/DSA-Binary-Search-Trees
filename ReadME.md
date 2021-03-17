## Binary Search Tree

#### Notes:
```binary search tree
Binary search trees support 3 fundamental operations: insert, remove, and find.
```

```binary search tree
Binary search trees tend to be recursive in nature.
```

```binary search tree
Binary search trees tend to be recursive in nature.
```

```binary search tree
Each tree then can be composed of many subtrees. Each node in a tree is the root of a subtree beginning at that node. Nesting trees in this manner can be achieved using recursion.
```

```binary search tree
Definition of recursion, it generally involves solving a problem in terms of similar subproblems and a base case.
```

```binary search tree
Essentially with insertion, you have to iterate to the height of the tree. In the average case, nodes are inserted equally on the left and right branches. This produces what is known as a balanced tree. Because each row in a balanced tree contains 2 times as many nodes as the row before, the width grows exponentially with the number of nodes. This means that conversely, the height must grow logarithmically with the number of nodes. So the average case is O(log(n)).
```

```binary search tree
The worst case in a binary search tree occurs when the tree takes its worst possible shape: the tree skews either left or right. A picture of what a skewed tree looks like is shown below. If you look at it closely, you'll notice that a skewed binary search tree is basically a linked list. Therefore, you will need to iterate through each of those nodes in order to get to the bottom of the tree to insert something. This makes the time complexity O(n).

An example of the best case would be inserting the root only, which would be O(1).
```

```binary search tree
The average time complexity of finding something in a BST would require traversing the height of a balanced tree and would be O(log(n)). Just like insert, the worst case for finding something in a BST will occur when the tree is skewed left or right and you are searching for the node at the bottom where everything is inserted to 1 side, so it is O(n). The best case is that the node you are trying to find is the root node, which would be O(1)
```

```binary search tree
For removal from a tree, you can use similar logic to insertion and retrieval to show that the best case is O(1), the average case is O(log(n)), and the worst case is O(n).
```