// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// Note that you can utilise some methods within other ones.
    // For instance, you could use insertAt inside of insertFirst.
// It would be a good idea in an interview setting to ask the interviewer what methods they'll be asking you to implement.
    // For instance, if they ask you to create an insertFirst function, you could ask them if they'll want you to create any other insert methods.
    // Then, you could start creating efficient functions immediately.

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

    size() {
        let size = 0;
        let currentNode = this.head;
        while (currentNode) {
            size++;
            currentNode = currentNode.next;
        }
        return size;
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        // return this.head;
        return this.getAt(0);
    }

    getLast() {

        // if (!this.head) {
        //     return null;
        // }

        // let currentNode = this.head;

        // while (currentNode) {
        //     if (currentNode.next === null) {
        //         return currentNode;
        //     }
        //     currentNode = currentNode.next;
        // }

        return this.getAt(this.size() - 1);

    }

    getAt(index) {

        let currentNode = this.head;
        let counter = 0;
        
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }

            counter++;
            currentNode = currentNode.next

        }

        return null;

    }

    insertFirst(data) {
        // this.head = new Node(data, this.head)
        this.insertAt(data, 0);
    }

    insertLast(data) {

        if (this.head) {
            let lastNode = this.getLast();
            lastNode.next = new Node(data);
        } else {
            this.head = new Node(data);
        }

    }

    insertAt(data, index) {

        if (!this.head) {
            this.head = new Node(data);
            return;
        }
    
        if (index === 0) {
        this.head = new Node(data, this.head);
        return;
        }
    
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;

    }

    removeFirst() {

        // if (!this.head) {
        //     return;
        // }

        // this.head = this.head.next;

        return this.removeAt(0);
    }

    removeLast() {
        
        // if (!this.head) {
        //     return;
        // }

        // if (!this.head.next) {
        //     this.head = null;
        //     return;
        // }

        // let previousNode = null;
        // let currentNode = this.head;

        // while (currentNode.next) {
        //     previousNode = currentNode;
        //     currentNode = currentNode.next;
        // }

        // previousNode.next = null;

        return this.removeAt(this.size() - 1);

    }

    removeAt(index) {

        if (!this.head) {
            return;
        }

        if (this.head && index === 0) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getAt(index - 1);
        let currentNode = this.getAt(index);
        
        if (previousNode.next) previousNode.next = currentNode.next;

    }

    forEach(callBack) {
        let node = this.head;
        let counter = 0;
        while (node) {
          callBack(node, counter);
          node = node.next;
          counter++;
        }
    }

    // Defines a generator function with a key of Symbol.iterator().
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

}

module.exports = { Node, LinkedList };
