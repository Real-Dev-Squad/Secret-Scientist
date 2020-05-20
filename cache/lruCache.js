class Node {
	constructor(key, value, prev = null, next = null) {
		this.key = key;
		this.value = value;
		this.prev = prev;
		this.next = next;
	}
}

class LRU {
	constructor(limit = 10) {
		this.size = 0;
		this.limit = limit;
		this.cache = {};
		this.head = null;
		this.tail = null;
	}
	write(key, value) {
		this.ensureLimit();
		let newNode;
		if (this.size === 0) {
			newNode = new Node(key, value);
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode = new Node(key, value, null, this.head);
			newNode.next = this.head;
			this.head = newNode;
		}
		this.cache[key] = newNode;
		this.size++;
	}
	remove(key) {
		const node = this.cache[key];
		if (node.prev === null) {
			this.head = node.next;
		} else {
			node.prev.next = node.next;
		}
		if (node.next === null) {
			this.tail = node.prev;
		} else {
			node.next.prev = node.prev;
		}
		delete this.cache[key];
		this.size--;
	}
	read(key) {
		if (this.cache[key]) {
			const value = this.cache[key].value;
			this.remove(key);
			this.write(key, value, null, this.head);
			return value;
		}
	}
	ensureLimit() {
		if (this.size === this.limit) {
			this.remove(this.tail.key);
		}
	}
}

// const myLru = new LRU(3);
// myLru.write('a', 123);
// myLru.write('b', 456);
// myLru.write('c', 789);

// myLru.read('b');
// myLru.write('d', 555);

export const LRU_CACHE = (limit) => new LRU(limit);

// console.log(myLru, 'myLru');
