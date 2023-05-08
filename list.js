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
    if (head === null) {
      head = newNode;
    } else {
      while (head.nextNode !== null) {
        head = head.nextNode;
      }
      head.nextNode = newNode;
    }
  };

  return { head, nextNode, toString, append };
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
linkedList.append(3);
linkedList.toString();
