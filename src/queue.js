const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    let nodeItem = new ListNode(value);
    if (this.start === null) {
      this.start = nodeItem;
      this.end = nodeItem;
    } else {
      this.end.next = nodeItem;
      this.end = nodeItem;
    }

    return this.length += 1;
  }

  dequeue() {
    let removedNode = this.start;
    this.start = this.start.next;
    this.length -= 1;

    return removedNode.value;
  }
}

module.exports = {
  Queue
};
