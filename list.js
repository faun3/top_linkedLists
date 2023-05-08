const linkedListFactory = () => {
  let head = nodeFactory(null);

  const toString = () => {
    start = head;
    while (start.nextNode !== null) {
      process.stdout.write(`( ${start.value} ) -> `);
      start = start.nextNode;
    }
    process.stdout.write(`null`);
    console.log();
  };

  const append = (value) => {
    let newNode = nodeFactory(value);
    let headCopy = head;
    if (head.value === null) {
      head = newNode;
    } else {
      while (head.nextNode !== null) {
        head = head.nextNode;
      }
      head.nextNode = newNode;
    }
  };

  const prepend = (value) => {
    let newNode = nodeFactory(value);
    newNode.nextNode = head;
    head = newNode;
  };

  return { head, nextNode, toString, append, prepend };
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
linkedList.toString();
