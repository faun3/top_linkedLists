const linkedListFactory = () => {
  let head = nodeFactory(null);

  const toString = () => {
    let start = head;
    while (start.nextNode !== null) {
      process.stdout.write(`( ${start.value} ) -> `);
      start = start.nextNode;
    }
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
    return len;
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

  return { head, nextNode, toString, append, prepend, size, fetchHead, tail };
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

console.log(linkedList.tail());
