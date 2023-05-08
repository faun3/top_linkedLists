const linkedListFactory = () => {
  let head = nodeFactory(null);

  const toString = () => {
    let start = head;
    while (start.nextNode !== null) {
      process.stdout.write(`( ${start.value} ) -> `);
      start = start.nextNode;
    }
    process.stdout.write(`( ${start.value} ) -> `);
    process.stdout.write(`null`);
    console.log();
  };

  const append = (value) => {
    let newNode = nodeFactory(value);
    if (head.value === null) {
      head = newNode;
    } else {
      let start = head;
      while (start.nextNode !== null) {
        start = start.nextNode;
      }
      start.nextNode = newNode;
    }
  };

  const prepend = (value) => {
    let newNode = nodeFactory(value);
    if (head.value === null) {
      head.value = newNode.value;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
  };

  const size = () => {
    let start = head;
    let len = 0;
    while (start.nextNode !== null) {
      len++;
      start = start.nextNode;
    }
    return len + 1;
  };

  const fetchHead = () => {
    return head;
  };

  const tail = () => {
    let start = head;
    while (start.nextNode !== null) {
      start = start.nextNode;
    }
    return start;
  };

  const pop = () => {
    let start = head;
    while (start.nextNode.nextNode !== null) {
      start = start.nextNode;
    }
    let copy = start.nextNode;
    start.nextNode = null;
    return copy;
  };

  const contains = (check) => {
    let start = head;
    while (start.nextNode !== null) {
      if (start.value === check) return true;
      start = start.nextNode;
    }
    if (start.value === check) return true;
    else return false;
  };

  const find = (check) => {
    let index = 0;
    let start = head;
    while (start.nextNode !== null) {
      if (start.value === check) return index;
      index++;
      start = start.nextNode;
    }
    if (start.value === check) return index;
    else return null;
  };

  const insertAt = (val, index) => {
    if (index === 0) prepend(val);
    else if (index >= size) append(val);
    else {
      let counter = 1;
      let start = head;
      while (start.nextNode !== null && counter < index) {
        start = start.nextNode;
        counter++;
      }
      let newNode = nodeFactory(val);
      newNode.nextNode = start.nextNode;
      start.nextNode = newNode;
    }
  };

  return {
    toString,
    append,
    prepend,
    size,
    fetchHead,
    tail,
    pop,
    contains,
    find,
    insertAt,
  };
};

const nodeFactory = (contains) => {
  value = null;
  nextNode = null;
  if (contains !== null) {
    value = contains;
  }
  return { value, nextNode };
};

let linkedList = linkedListFactory();

linkedList.prepend(3);
linkedList.prepend(5);
linkedList.append(7);
linkedList.append(9);

linkedList.toString();
console.log(linkedList.size());

linkedList.insertAt(10, 2);

linkedList.toString();
