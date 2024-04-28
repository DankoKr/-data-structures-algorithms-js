class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // To check if the other methods work
  printListNodeValues() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      this.append(newNode);
    }

    const leaderNode = this.traverseToIndex(index - 1);
    const referencedNode = leaderNode.next;

    newNode.next = referencedNode;
    leaderNode.next = newNode;
    this.length++;
    this.printListNodeValues();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index >= this.length - 1) {
      // Remove tail
      const previousNode = this.traverseToIndex(this.length - 2);
      previousNode.next = null;
      this.tail = previousNode;
      this.length--;
      return;
    }

    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    leaderNode.next = unwantedNode.next;

    this.length--;
    this.printListNodeValues();
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head; // Points to the current node
    this.tail = this.head; // Update the tail to point to the previous head
    let second = first.next; // Points to the next node

    while (second) {
      let temp = second.next; // Store the reference to the next node
      second.next = first; // Reverse the pointer of the second node to point to the first
      first = second; // Move the first pointer to the next node
      second = temp; // Move the second pointer to the next node
    }

    // Adjust the head and tail pointers
    this.head.next = null; // The original head becomes the new tail, so its next should be null
    this.head = first; // The original tail becomes the new head

    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 9);
myLinkedList.remove(4);
myLinkedList.printListNodeValues();
myLinkedList.reverse();
myLinkedList.printListNodeValues();
