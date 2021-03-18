class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //if tree is empty insert key is the root
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    /* 
    if tree exist. start at root. Compare it to insert key. If new key is less than node key, then new key lives at left side.
    */
   else if (key < this.key) {

    //if no left node
    if(this.left == null) {
      this.left = new BinarySearchTree(key, value, this)
    }
    // if node has child
     else {
       this.left.insert(key, value);
     }
   }

   //same thing but fir right side
   else {
     if (this.right == null) {
       this.right = new BinarySearchTree(key, value, this)
     }
     else {
       this.right.insert(key, value)
     }
   }
  }

  find(key) {
    // if item found is at root
    if (this.key == key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error')
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      /* If the node only has a left child, 
      then you replace the node with its left child */
      else if (this.left) {
        this._replaceWith(this.left);
      }
      /* And similarly if the node only has a right child 
      then you replace it with its right child */
      else if (this.right) {
        this._replaceWith(this.right);
      }
      /* If the node has no children then
      simply remove it and any references to it 
      by calling "this._replaceWith(null)" */
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  };


}//end of class

function main() {
  const num = new BinarySearchTree;
  const char = new BinarySearchTree;

  num.insert(3);
  num.insert(1);
  num.insert(4);
  num.insert(6);
  num.insert(9);
  num.insert(2);
  num.insert(5);
  num.insert(7);
  console.log(num);

  char.insert('E');
  char.insert('S');
  char.insert('A');
  char.insert('Y');
  char.insert('Q');
  char.insert('U');
  char.insert('E');
  char.insert('S');
  char.insert('T');
  char.insert('I');
  char.insert('O');
  char.insert('N');
  console.log(char);
}

main();

//==================================================
// #4 What does this program do?
// This function will add all node values of given tree recursively.
function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}


//==================================================
// #5 Height of a BST
function heightBST(tree) {
  let left = 0;
  let right = 0;

  if(!tree) {
    return 0;
  } else {
    left = heightBST(tree.left);
    right = heightBST(tree.right);

    if(left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
};

//==================================================
// #6 Is it a BST?
function IsitBST(tree) {
  if(tree.left) {
    if(tree.left.key < tree.key) {
      return IsitBST(tree.left)
    } else {
      return false;
    }
  };

  if(tree.right) {
    if(tree.right.key > tree.key) {
      return IsitBST(tree.right)
    } else {
      return false;
    }
  };
  return true;

}; 

//==================================================
// #7 3rd largest node
function thirdNode(tree) {
  let curr = tree;

  while(curr.right !== null) {
    curr = curr.right;
  }

  let parent = curr.parent;
  if(curr.left !== null && parent.left !== null) {
    return parent.key;
  }

  if(parent.left !== null) {
    let newNode = parent.left;

    while(newNode.right !== null) {
      newNode = newNode.right;
    }
    return newNode;
  }

};

//==================================================
// #8 Balanced BST
function balaced(tree) {
  let left = heightBST(tree.left);
  //console.log('left' + left);
  let right = heightBST(tree.right);
  //console.log('right' + right);

  if(Math.abs(right - left) < 1) {
    //console.log(true)
    return true;
  } else if(Math.abs(right - left) >= 1) {
    //console.log(false)
    return false;
  }

};
//==================================================
// #9 Are they the same BSTs?
const arr1 = [3, 5, 4, 6, 1, 0, 2];
const arr2 = [3, 1, 5, 2, 4, 6, 0];

const arr3 = [4, 5, 1, 0, 9, 7, 3];
const arr4 = [0, 7, 3, 6, 2, 9, 8];

function sameBST(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }

  let array1 = arr1.sort(function(a, b) {return a-b});
  let array2 = arr2.sort(function(a, b) {return a-b});

  for(let i=0; i<array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};

//console.log(sameBST(arr1, arr2));
//console.log(sameBST(arr3, arr4));