const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(value) {
    let newNode = new Node(value);
    if (this._root === null) { return this._root = newNode };

    let current = this._root;

    while (current) {
      if (value === current.data) return undefined;
      if (value < current.data) {
        if (!current.left) {
          return current.left = newNode;
        }
        current = current.left;
      } else {
        if (!current.right) {
          return current.right = newNode;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    if (!this._root) return false;

    let current = this._root;

    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return data === current.data;
      }
    }
    if (!current) return false;
  }

  find(data) {
    if (!this._root) return null;

    let current = this._root;

    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else if (data === current.data) {
        return current;
      }
    }
    if (!current) return null;
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(currentNode, data) {
      if (!currentNode) { return null; }

      if (data < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, data);
        return currentNode;
      } else if (data > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, data);
        return currentNode;
      } else if (data === currentNode.data) {
          if (!currentNode.left && !currentNode.right) {
            return null;
          } else if (!currentNode.left) {
            currentNode = currentNode.right;
            return currentNode;
          } else if (!currentNode.right) {
            currentNode = currentNode.left;
            return currentNode;
          } else {
              let maxLeft = currentNode.left;

              while (maxLeft.right) {
                maxLeft = maxLeft.right;
              }

              currentNode.data = maxLeft.data;
              currentNode.left = removeNode(currentNode.left, maxLeft.data);

              return currentNode;
            } 
        }
    }
  }

  min() {
    if (!this._root) {
      return;
    }

    let currentNode = this._root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this._root) {
      return;
    }

    let currentNode = this._root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};