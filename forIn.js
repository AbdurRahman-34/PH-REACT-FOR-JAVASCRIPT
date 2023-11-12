// loop for in loop

const object = { a: 1, b: 2, c: 3 };
console.log(object["a"]);

for (const property in object) {
  console.log(property);
  console.log(object);
  //   console.log(`${property}: ${object[property]}`);
}