# TypeScript


TypeScript: #typescript
TypeScript Introduction: #typescript-introduction
Installation: #installation
Types: #types
Functions: #functions
Arrays and Objects: #arrays-and-objects

## TypeScript introudction
TTypeScript is a programming language that can be used as an alternative to JavaScript (superset). It allows us to use strict types and supports modern features such as arrow functions, let, const, as well as additional functionality including generics, interfaces, and tuples. TypeScript compiles down to JavaScript so that browsers can understand it. The extra step of compilation should not put you off from using TypeScript as it comes with a variety of useful features.

Strict types mean that when a variable is declared in TypeScript, it must be of a specific type. In contrast, JavaScript uses dynamic types where variables can change their type at any point, which can lead to more errors. TypeScript also offers additional features such as let, const, and destructuring that are not supported by all browsers. These features can be used in TypeScript and compiled down into JavaScript.

It is recommended to have prior knowledge of JavaScript arrow functions, the DOM, and classes before using TypeScript.



## installation 

To install TypeScript, you will need to have Node.js installed for npm. Once Node.js is installed, go through the installation wizard and download VSCode. Then, run the command npm install -g typescript to install TypeScript globally on your computer.

Remember that browsers do not understand TypeScript, and it is simply a language that makes development cleaner and easier. When deploying your code, it must be compiled down into regular JavaScript.

Make sure to familiarize yourself with the setup of TypeScript to effectively use this programming language.



To create an index.html, sandbox.js, and style.css, use the following code snippets:

index.html:


```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TypeScript Sandbox</title>
</head>
<body>
  <h1>TypeScript Sandbox</h1>

  <form>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname">
  </form>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.5.4/typescript.min.js"></script>
  <script src="sandbox.ts"></script>
</body>
</html>

```

sandbox.js:


```ts


const variable = "hello world";
console.log(variable);

const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input){
    console.log(input);
});

```

we will now have to manually recompile it by saying :
#### tsc xxx.js

To automatically compile the TypeScript file (sandbox.ts) every time a change is made, run the following command in the terminal:


#### tsc xxx.js -w
This will automatically recompile the TypeScript file every time it is saved.




## Types 

Fundamentally, TypeScript differs from JavaScript in that TypeScript enforces strict types while JavaScript does not. In other words, if a type is defined in TypeScript, it cannot be changed later.

```ts
let character = "hello";
let age = 10;
let isGood = false;


// character = 20; error TS2322: Type 'number' is not assignable to type 'string'.
```





## Functions 
in typescript, we use arrow functions or regular functions which does not matter 

```TS

const circle = (diameter) => {
    return diameter * Math.PI;
}


console.log(circle(10));
```

if we look inside js, 
```js

var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(10));
```

in typescript, we can define the type that this must be when we pass something into it

```ts
const circle = (diameter: number) => {
    return diameter * Math.PI;
}
// console.log(circle("hello")); it does not allow me to do this
// Argument of type 'string' is not assignable to parameter of type 'number'.

```


## arrays and objects 

### arrays 

In TypeScript, arrays are a type of object that can store multiple values of the same type, such as numbers, strings, or booleans. Once declared, you can add or remove elements to an array using methods like push or pop, or access specific elements using square bracket notation and the element's index.

For example, in the code snippet provided, numbers is an array that contains five numbers. We use the push method to add the number 4 to the end of the array, but attempting to add a string using numbers.push("hello") will result in a type error, as TypeScript is designed to prevent us from adding values of the wrong type to an array.

We can also access a specific element in the array by using its index, like numbers[2] to get the third element. In this case, the value 3 would be returned.


```ts
let numbers = [1,2,3,4,5];
let strings = ["a","b", "c", "d"];
let booleans = [true,false];


numbers.push(4);
// Argument of type 'string' is not assignable to parameter of type 'number'. numbers.push("hello");

let last_element = numbers.pop();
console.log(last_element);
numbers[2];
```



```ts
let objects = {
    1 : "hello",
    2 : "world",
    3 : "this is me"
}

console.log(objects[1]);

// annot redeclare block-scoped variable 'objects'.
// let objects = {
//     name : "eddie",
//     age : 30,
//     experience: "typescript"
// }

let new_objects = {
    name : "eddie",
    age : 30,
    experience: "typescript"
}
new_objects["name"] = "edward"; // it changes once we have defined this as a certain type 
// Type 'void' cannot be used as an index type. console.log(objects[name]);
console.log(objects["name"]);

```



## explicit types 
In TypeScript, the utilization of variables rather than constant values is a common practice. The language offers the ability to automatically deduce the types of these variables based on the values provided. However, in cases where a variable is declared without an assigned value, its type cannot be inferred, potentially leading to issues with type safety in the future.

To mitigate this problem, one can explicitly assign a type to the variable to ensure that it is only assigned values of that type in the future. For instance, if we wish to declare a variable without an initial value, we can specify that it can only be assigned a string type in subsequent usage.


```TS
let character : string;
let numberValue: number;
let booleanValue : boolean;
// explicit types 

// we cannot do booleanValue = "";


// let arraysValue : string[];
// we have not yet declared that string array   arraysValue.push("hello");

let arraysValue : string[] = [];
arraysValue.push("hello");
// this works 
```


### union types of array 
Suppose I aim to generate an array that contains a combination of various data types. In that case, I can implement a union type by utilizing the pipe symbol. By enclosing the types with this symbol, I can indicate that the array elements can consist of any of the specified types.


```TS

let unionArray: (string | number | boolean)[] = [];
arraysValue.push("hello");
arraysValue.push(1);
```

The provided TypeScript code attempts to declare and initialize a union array, unionArray, which is expected to hold elements of any of the specified types: string, number, or boolean.
Additionally, the provided code attempts to push a string value of "hello" and a number value of 1 to the arraysValue variable, but this will result in a type error because these values do not match any of the specified types in the union array. To ensure type safety, all elements pushed to the array must conform to one of the specified types in the union array.

This example highlights the importance of correctly declaring and initializing union array types in TypeScript and using them to ensure type safety when manipulating arrays with multiple possible data types.


### union types of a variabel 
When utilizing a union type in a non-array context, parentheses are not required. However, in situations where the union type is used before an array, the use of parentheses is necessary.


```TS

let unionVariable: string|number|boolean;
unionVariable = true;
unionVariable = 1;
unionVariable = "hi";
```
The provided TypeScript code showcases the implementation of a union type variable, unionVariable, that can hold values of one of the specified types: string, number, or boolean.

The code then assigns a boolean value of true to the variable, followed by a number value of 1, and lastly, a string value of "hi". Since the unionVariable is declared with a union type of string|number|boolean, it is capable of holding any of these three types of values.

This example illustrates how to use a union type variable in TypeScript to enable the assignment of multiple types of values to a single variable. The ability to store different data types in one variable can improve code readability and flexibility, but it is important to ensure that the data types in the union type make sense and align with the use case.


### variable as an object

To explicitly declare a variable as an object, one can use the syntax let variable: object;. This statement denotes that the variable is of the object type, indicating that it can contain key-value pairs of any data type.





```TS
let objectVariable : object;
objectVariable  = {name : "Eddie", age : 100};


// or we can say 
let objectVariable : {
    name : string,
    age : number,
    trueOrFalse: boolean;
}

```

The provided TypeScript code demonstrates how to declare and assign values to an object variable explicitly. The first block of code declares an object variable, objectVariable, with an undefined type by using the object type. The code then assigns values to the variable using an object literal that includes two properties: name and age.

Alternatively, the second block of code declares the same object variable, objectVariable, with a defined type. In this case, the object is defined as containing three properties: name, which must be of type string; age, which must be of type number; and trueOrFalse, which must be of type boolean.

Both examples illustrate how to declare and initialize an object variable in TypeScript, either with or without a defined type, and set specific property types to ensure type safety during runtime.




## Dynamic(any) type 

we use any type in types script to say that this variable would be any type in the future would be boolean, number or string at any point in time it could change too 


```TS
let numberVariable : any = 100;
numberVariable = "hello";
```
