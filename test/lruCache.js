'use strict'

/*** 
LRU implementation using MAP and LinkedList 
MAP = key -> Node (LinkedList) pair
LinkedList = (value, Links)
*/

// <----------------------------------------------NODE----------------------------------------------------------->

class Node {
 constructor(key, value) {
  this.key = key
  this.value = value;
  this.previous = null;
  this.next = null;
 }
}

// <----------------------------------------Doubly-Linked-List---------------------------------------------------->

class DoublyLinkedList {
 constructor() {
  this.length = 0;
  this.head = null;
  this.tail = null;
 }

 insert(key, value) {                     // Inserts at the beginning
  const node = new Node(key, value);
  if (!this.head) {
   this.head = node;
   this.tail = node
  } else {
   node.next = this.head;
   this.head.previous = node;
   this.head = node;
  }
  this.length++;
  return node;
 }


 remove() {                              // Removes from the end
  if (!this.head) return null;
  let temp = this.tail;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   this.tail = this.tail.previous;
   this.tail.next = null;
   temp.previous = null;
  }
  this.length--;
  return temp;
 }

 update(node) {                          // Moves Recently used node to beginning
  let temp = node;

  if (temp == this.head) return true;
  if (temp == this.tail) {

   temp.next = this.head;
   this.tail = temp.previous;
   temp.previous = null;
   this.head.previous = temp;
   this.head = temp;

  }
  else {

   let before = temp.previous;
   let after = temp.next;

   before.next = after;
   after.previous = before;

   temp.next = this.head;
   this.head.previous = temp;
   temp.previous = null;
   this.head = temp;
  }

  return true;
 }

 print() {
  let node = this.head
  if (!this.head) return null;
  while (node.next != null) {
   console.log(node.value);
   node = node.next;
  }
  return true;
 }

}

// <------------------------------------------LRU-CATCH-------------------------------------------------------->

class LRUCatch {
 constructor(capacity) {
  this.maxCapacity = capacity;
  this.capacity = 0;
  this.cache = new Map();						              // Key --> value pair
  this.ddl = new DoublyLinkedList();         // (previousNode<----(key, value)--->nextNode)
 }

 put(key, val) {
  if (!(this.capacity < this.maxCapacity)) {
   const key = (this.ddl.remove()).key;
   this.cache.delete(key);
   this.capacity--;
  }
  this.cache.set(key, this.ddl.insert(key, val))
  this.capacity++;
  return (key, val);
 }

 get(key) {
  if (this.cache.has(key)) {
   const node = this.cache.get(key);
   this.ddl.update(node)
   return node.value;
  }
  return false;
 }

 clearCache() {
  this.cache.clear();
  this.ddl = new DoublyLinkedList();
  this.capacity = 0;
  return true;
 }

}
module.exports = { LRUCatch };