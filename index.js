class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

//Binary search trees support 3 fundamental operations: insert, remove, and find. 

//Binary search trees tend to be recursive in nature.

//Each tree then can be composed of many subtrees. Each node in a tree is the root of a subtree beginning at that node. Nesting trees in this manner can be achieved using recursion.

//definition of recursion, it generally involves solving a problem in terms of similar subproblems and a base case.

