type NodeValue<V> = V;

type NodeNext<V> = INode<V> | null;

interface INode<V> {
  value: NodeValue<V>;
  next: INode<V> | null;
  prev: INode<V> | null;
}

interface ILinkedList<V> {
  head: INode<V>;
  tail: INode<V>;
  length: number;
  append(value: V): void;
  prepend(value: V): DoublyLinkedList<V>;
  insert(index: number, value: V): NodeValue<V>[];
  lookup(index: number): INode<V>;
  remove(index: number): NodeValue<V>[];
}

class DoublyLinkedList<V> implements ILinkedList<V> {
  head: INode<V>;
  tail: INode<V>;
  length: number;

  constructor(value: V) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: V): DoublyLinkedList<V> {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: V): DoublyLinkedList<V> {
    const newNode = new Node(value);

    this.head.prev = newNode;
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

    const followerNode = leaderNode.next!;
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    newNode.next = followerNode;
    followerNode.prev = newNode;
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
    const leaderNode = this.lookup(index - 1);

    const removingNode = leaderNode.next!;
    leaderNode.next = removingNode.next;

    const followerNode = removingNode.next!;
    followerNode.prev = removingNode.prev;

    this.length--;
    return this.print();
  }
}

class Node<V> implements INode<V> {
  value: V;
  next: INode<V> | null;
  prev: INode<V> | null;

  constructor(value: V) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export { DoublyLinkedList, Node };
