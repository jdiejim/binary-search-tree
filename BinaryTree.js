class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  push(node) {
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    let isPlaced = false;

    while (!isPlaced) {
      if (current.data >= node.data) {
        if (!current.left) {
          current.setLeft(node);
          isPlaced = true;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.setRight(node);
          this.isPlaced = true;
        } else {
          current = current.right;
        }
      }

    }
  }
}

module.exports = BinaryTree;
