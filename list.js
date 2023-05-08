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
    //let headCopy = head;
    while (head.nextNode !== null) {
      head = head.nextNode;
    }
    head.nextNode = newNode;
  };

  const prepend = (value) => {
    let newNode = nodeFactory(value);
    newNode.nextNode = head;
    head = newNode;
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

  return { head, nextNode, toString, append, prepend, size };
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

//linkedList.append(7);

console.log(linkedList.size());

linkedList.toString();
