class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    this.length++;

    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
      return;
    }

    const previousTopNode = this.top;
    this.top = newNode;
    this.top.next = previousTopNode;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.length === 1) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
  }

  isEmpty() {
    return this.top === null;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack);
console.log(myStack.peek());
myStack.pop();
console.log(myStack);
