class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.elements = [];
    }
    
    front() {
        return this.head;
    }

    rear() {
        return this.tail;
    }

    size() {
        return this.elements.length;
    }

    enqueue(item) {
        if (this.size() >= 1) {
            this.elements.push(item);
            this.tail = item;
        } else {
            this.elements.push(item);
            this.head = item;
            this.tail = item;
        }
    }

    dequeue(item) {
        if (this.isEmpty()) {
            return false;
        } else if (this.size() > 1) {
            this.elements.shift(item);
            this.head = this.elements[0];
            return true;
        } else {
            this.elements.shift(item);
            this.head = null;
            this.tail = null;
            return true;
        }
    }

    isEmpty() {
        if (this.size() == 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Queue;