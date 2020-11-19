// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        let arr = this.children.filter(node => node.data !== data);
        this.children = arr;
    }

}

class Tree {

    constructor() {
        this.root = null;
    }

    // Add children to end of array
    traverseBF(fn) {

        let nodesArray = [this.root];

        while (nodesArray.length) {
            let node = nodesArray.shift();
            nodesArray.push(...node.children);
            fn(node);
        }

    }

    // Add children to beginning of array
    traverseDF(fn) {

        let nodesArray = [this.root];

        while (nodesArray.length) {
            let node = nodesArray.shift();
            nodesArray.unshift(...node.children);
            fn(node);
        }

    }

}

module.exports = { Tree, Node };
