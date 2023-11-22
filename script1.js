let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

// Convert JSON objects to strings
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

// Compare the strings
if (str1 === str2) {
  console.log("The objects are equal.");
} else {
  console.log("The objects are not equal.");
}
