/**
 * Stack - module that implements stack behaviour.
 * Return API that contains such methods and properties:
 * pop() - pop method
 * push() - push method
 * isEmpty - false if stack is empty, true otherwise
 * size - amount of elements in stack
 * last - value of last pushed element
 * @return {Object} API
 */
export function Stack() {
  const elements = {};
  let size = 0;
  let isEmpty = true;
  const api = {
    pop: pop,
    push: push,
    isEmpty: true,
    size: 0,
    last: undefined,
  };
  /**
   * push - pushes passed value in the end of the stack
   * @param {*} value
   */
  function push(value) {
    elements[size++] = value;
    isEmpty = false;
    updateAPIProps();
  }
  /**
   * pop - removes last element from the stack
   * if it is not empty and return removed value.
   * Otherwise return undefined.
   * @return {*}
   */
  function pop() {
    if (size === 0) {
      return;
    }
    if (size === 1) {
      api.isEmpty = true;
    }
    const value = elements[--size];
    delete elements[size];
    updateAPIProps();
    return value;
  }
  /**
   * service function, that updates
   * API with relevant data
   */
  function updateAPIProps() {
    api.isEmpty = isEmpty;
    api.size = size;
    api.last = {
      value: elements[size - 1],
      prev: {
        value: elements[size - 2],
      },
    };
  }
  return api;
}
