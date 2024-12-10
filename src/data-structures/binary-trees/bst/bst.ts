interface ITreeNode<V> {
  left: ITreeNode<V> | null;
  right: ITreeNode<V> | null;
  value: V;
}

class TreeNode<V> implements ITreeNode<V> {
  left = null;
  right = null;
  value: V;

  constructor(value: V) {
    this.value = value;
  }
}

interface IBinaryTree<V> {
  root: ITreeNode<V> | null;
}

class BinarySearchTree<V> implements IBinaryTree<V> {
  root: ITreeNode<V> | null = null;

  public insert(value: V): BinarySearchTree<V> {
    const newNode = new TreeNode<V>(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      this.insertHelper(this.root, newNode);
    }
    return this;
  }

  // insert without recursion
  public insertWithoutRecursion(value: V): BinarySearchTree<V> {
    const newNode = new TreeNode<V>(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  private insertHelper(node: ITreeNode<V>, newNode: ITreeNode<V>): void {
    if (newNode.value > node.value) {
      if (node.left === null) node.left = newNode;
      else this.insertHelper(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertHelper(node.right, newNode);
    }
  }

  public lookup(value: V): V | null {
    if (!this.root) return null;
    return this.lookupHelper(this.root, value);
  }

  private lookupHelper(node: ITreeNode<V> | null, value: V): V | null {
    if (!node) return null;
    if (value < node.value) this.lookupHelper(node.left, value);
    if (value > node.value) this.lookupHelper(node.right, value);
    return node.value;
  }

  public lookupWithoutRecursion(value: V): boolean {
    if (!this.root) return false;
    let currentNode: ITreeNode<V> | null = this.root;
    while (currentNode) {
      if (value === currentNode.value) return true;
      if (value < currentNode.value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return false;
  }

  public remove(value: V): BinarySearchTree<V> {
    return this;
  }
}

export { BinarySearchTree };
