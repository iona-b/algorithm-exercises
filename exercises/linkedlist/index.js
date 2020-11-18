// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let size = 0;
        let currentNode = this.head;
        while (currentNode) {
            size++;
            currentNode = currentNode.next;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.next === null) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

}

module.exports = { Node, LinkedList };
