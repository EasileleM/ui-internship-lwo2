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
  function push(value) {
    elements[size++] = value;
    isEmpty = false;
    updateAPIProps();
  }
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
