var numbers = [1, 2, 3, 4, 5];
var strings = ["a", "b", "c", "d"];
var booleans = [true, false];
numbers.push(4);
numbers[2];
// Argument of type 'string' is not assignable to parameter of type 'number'. numbers.push("hello");
var objects = {
    1: "hello",
    2: "world",
    3: "this is me"
};
console.log(objects[1]);
// annot redeclare block-scoped variable 'objects'.
// let objects = {
//     name : "eddie",
//     age : 30,
//     experience: "typescript"
// }
var new_objects = {
    name: "eddie",
    age: 30,
    experience: "typescript"
};
// Type 'void' cannot be used as an index type. console.log(objects[name]);
new_objects["name"] = "edward";
console.log(objects["name"]);
var fruits = ['Apple', 'Orange', 'Banana'];
