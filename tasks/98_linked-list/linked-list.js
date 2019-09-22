/**
 * LinkedList - module, that implements linked list behaviour.
 * Return API that contains such methods and properties:
 * push()
 * pop()
 * iterate()
 * removeItem()
 * insertAfter()
 * amount - amount of nodes in the list
 * head - referrence to head of the list
 * tail - referrence to tail of the list
 * @return {Object} API
 */
export function LinkedList() {
  const api = {
    push: push,
    pop: pop,
    removeItem: removeItem,
    iterate: iterate,
    insertAfter: insertAfter,
    amount: 0,
    head: null,
    tail: null,
  };
  let head = null;
  let tail = null;
  let amount = 0;
  /**
   * insertAfterNode - service function, that inserts
   * creates new node with passed value and inserts
   * it after passed node
   * @param {Object} node
   * @param {*} value
   */
  function insertAfterNode(node, value) {
    node.next = {
      value: value,
      next: node.next,
      prev: node,
    };
    if (node.next.next === null) {
      tail = node.next;
    }
    amount++;
    updateAPI();
  }
  /**
   * removeNode - service function, that
   * removes passed node from the list
   * @param {Object} node
   */
  function removeNode(node) {
    if (!node.prev) {
      head = node.next;
      if (!head) {
        tail = null;
      } else {
        head.prev = null;
      }
    } else {
      node.prev.next = node.next;
      if (node === tail) {
        tail = node.prev;
      }
    }
    amount--;
    updateAPI();
  }
  /**
   * find - service function, that return
   * node with passed value or null if it is absent
   * @param {*} value
   * @return {Object}
   */
  function find(value) {
    let currNode = head;
    while (currNode !== null && currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }
  /**
   * updateAPI - service function, that updates api object
   * with relevant data
   */
  function updateAPI() {
    api.amount = amount;
    api.head = head;
    api.tail = tail;
  }
  /**
   * push - add new node with passed value
   * in the end of the list
   * @param {*} value
   */
  function push(value) {
    if (!tail) {
      head = {
        value: value,
        next: null,
        prev: null,
      };
      tail = head;
      amount++;
      updateAPI();
    } else {
      insertAfterNode(tail, value);
    }
  }
  /**
   * pop - removes tail element form the list
   * if it has a tail and return true,
   * otherwise return false
   * @return {boolean}
   */
  function pop() {
    if (!tail) {
      return false;
    }
    removeNode(tail);
    return true;
  }
  /**
   * iterate - iterates through each node of the list
   * and applies callback function to them
   * @param {function} fun
   */
  function iterate(fun) {
    let currNode = head;
    while (currNode !== null) {
      fun(currNode);
      currNode = currNode.next;
    }
  }
  /**
   * removeItem - removes node with passed value form the list
   * if such node exists return true, otherwise return false
   * @param {*} value
   * @return {boolean}
   */
  function removeItem(value) {
    const removedNode = find(value);
    if (!removedNode) {
      return false;
    }
    removeNode(removedNode);
    return true;
  }
  /**
   * insertAfter - creates a new node with passed value(2nd argument)
   * after node with another passed value(1nd argument), if such node
   * exists, and return true. Otherwise return false.
   * @param {*} target
   * @param {*} insertable
   * @return {boolean}
   */
  function insertAfter(target, insertable) {
    const insertNode = find(target);
    if (!insertNode) {
      return false;
    }
    insertAfterNode(insertNode, insertable);
    return true;
  }
  return api;
}
