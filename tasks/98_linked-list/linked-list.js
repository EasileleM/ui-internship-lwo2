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
  function remove(node) {
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
  function find(value) {
    let currNode = head;
    while (currNode !== null && currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }
  function updateAPI() {
    api.amount = amount;
    api.head = head;
    api.tail = tail;
  }
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
  function pop() {
    if (!tail) {
      return false;
    }
    remove(tail);
    return true;
  }
  function iterate(fun) {
    let currNode = head;
    while (currNode !== null) {
      fun(currNode);
      currNode = currNode.next;
    }
  }
  function removeItem(value) {
    const removedNode = find(value);
    if (!removedNode) {
      return false;
    }
    remove(removedNode);
    return true;
  }
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
