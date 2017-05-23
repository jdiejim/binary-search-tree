class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.isPlaced = false;
  }

  push(node) {
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;

    while (!this.isPlaced) {
      if (current.data >= node.data) {
        if (!current.left) {
          current.setLeft(node);
          this.isPlaced = true;
        } else {
          current = current.left;
        }
      }

      if (current.data < node.data) {
        if (!current.right) {
          current.setRight(node);
          this.isPlaced = true;
        } else {
          current = current.right;
        }
      }
    }
    this.isPlaced = false;
  }
}

module.exports = BinaryTree;
