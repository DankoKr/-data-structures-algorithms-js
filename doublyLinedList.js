class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
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
    const referencedNode = leaderNode.next; // The index Node we want to change

    leaderNode.next = newNode;
    newNode.previous = leaderNode;
    newNode.next = referencedNode;
    referencedNode.previous = newNode;
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
      const nodeBeforeTail = this.tail.previous;
      nodeBeforeTail.next = null;
      this.tail = nodeBeforeTail;
      this.length--;
      return;
    }

    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    const unwantedNodeNext = unwantedNode.next;
    leaderNode.next = unwantedNodeNext;
    unwantedNodeNext.previous = leaderNode;

    this.length--;
    this.printListNodeValues();
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 9);
myDoublyLinkedList.remove(4);
