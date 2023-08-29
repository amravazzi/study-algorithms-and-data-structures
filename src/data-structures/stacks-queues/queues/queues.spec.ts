import { Queue, Node } from "./queues";

describe("Queues", () => {
  it("should initialize an empty stack", () => {
    const queue = new Queue<number>();

    expect(queue.length).toBe(0);
    expect(queue.first).toBe(null);
    expect(queue.last).toBe(null);
  });

  it("should enqueue values to the queue", () => {
    const queue = new Queue<string>();
    const value1 = "google";
    const value2 = "facebook";
    const value3 = "amazon";
    const value4 = "apple";

    queue.enqueue(value1);
    queue.enqueue(value2);
    queue.enqueue(value3);
    queue.enqueue(value4);

    expect(queue.length).toBe(4);
    expect(queue.first!.value).toEqual(value4);
    expect(queue.last).toEqual({ value: value1, next: null });
  });

  it("should dequeue values from the queue", () => {
    const queue = new Queue<string>();
    const value1 = "google";
    const value2 = "facebook";
    const value3 = "amazon";
    const value4 = "apple";

    queue.enqueue(value1);
    queue.enqueue(value2);
    queue.enqueue(value3);
    queue.enqueue(value4);
    queue.dequeue();

    expect(queue.length).toBe(3);
    expect(queue.first!.value).toEqual(value3);
    expect(queue.last).toEqual({ value: value1, next: null });
  });

  it("should check if the queue is empty", () => {
    const queue = new Queue<string>();
    const value = "google";
    queue.enqueue(value);
    queue.dequeue();

    expect(queue.length).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it("should check if the queue is not empty", () => {
    const queue = new Queue<string>();
    const value = "google";
    queue.enqueue(value);

    expect(queue.length).toBe(1);
    expect(queue.isEmpty()).toBe(false);
  });
});

describe("queues' node", () => {
  it("should initialize an empty Node from given value", () => {
    const value = 10;
    const queue_node = new Node<number>(value);

    expect(queue_node).toEqual({ value, next: null });
  });
});
