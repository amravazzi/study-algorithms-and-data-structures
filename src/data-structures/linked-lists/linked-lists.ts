type NodeValue<V> = V;

type NodeNext<V> = INode<V> | null;

interface INode<V> {
  value: NodeValue<V>;
  next: INode<V> | null;
}

interface ILinkedList<V> {
  head: INode<V>;
  tail: INode<V>;
  length: number;
  append(value: V): void;
  prepend(value: V): LinkedList<V>;
  insert(index: number, value: V): NodeValue<V>[];
  lookup(index: number): INode<V>;
  remove(index: number): NodeValue<V>[];
}

class LinkedList<V> implements ILinkedList<V> {
  head: INode<V>;
  tail: INode<V>;
  length: number;

  constructor(value: V) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: V): LinkedList<V> {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: V): LinkedList<V> {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  print(): NodeValue<V>[] {
    let currNode: NodeNext<V> = this.head;
    let arr: NodeValue<V>[] = [];

    while (currNode) {
      arr = [...arr, currNode.value];
      currNode = currNode.next;
    }

    return arr;
  }

  //
  insert(index: number, value: V): NodeValue<V>[] {
    if (index === 0) {
      this.prepend(value);
      return this.print();
    }

    if (index >= this.length) {
      this.append(value);
      return this.print();
    }

    const newNode = new Node(value);
    let leaderNode = this.lookup(index - 1);

    const holdingPointer = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this.print();
  }

  lookup(index: number): INode<V> {
    let currNode: NodeNext<V> = this.head;
    if (index <= 0) return currNode;

    let counter = 0;
    while (counter !== index && currNode.next) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  remove(index: number): NodeValue<V>[] {
    let leaderNode = this.lookup(index - 1);
    let removingNode = leaderNode.next!;
    leaderNode.next = removingNode.next;
    this.length--;
    return this.print();
  }
}

class Node<V> implements INode<V> {
  value: V;
  next: INode<V> | null;

  constructor(value: V) {
    this.value = value;
    this.next = null;
  }
}

export { LinkedList, Node };
