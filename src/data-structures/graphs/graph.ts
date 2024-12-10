interface IGraph {
  numberOfNodes: Number;
  adjacentList: Record<string, string[]>;
}

type vertex = string;

class Graph implements IGraph {
  numberOfNodes;
  adjacentList: IGraph["adjacentList"];

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node: vertex): void {
    this.adjacentList = { ...this.adjacentList, [node]: [] };
    this.numberOfNodes++;
  }

  addEdge(node1: vertex, node2: vertex): void {
    if (!this.adjacentList[node1].includes(node1)) this.adjacentList[node1].push(node2);
    if (!this.adjacentList[node2].includes(node2)) this.adjacentList[node2].push(node1);
  }

  // 0-->1 2
  // 1-->3 2 0
  showConnections() {
    for(let key of Object.keys(this.adjacentList)) {
      console.log(key + '-->' + this.adjacentList[key].join(" "));
    }
  }
}
