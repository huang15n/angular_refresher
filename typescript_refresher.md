# TypeScript


TypeScript: #typescript
TypeScript Introduction: #typescript-introduction
Installation: #installation
Types: #types
Functions: #functions
Arrays and Objects: #arrays-and-objects


# references

The Net Ninja https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI
Traversy Media: https://www.youtube.com/watch?v=BCg4U1FzODs  TO DO
Dave Gray : https://www.youtube.com/watch?v=gieEQFIfgYc  TO DO 
Java Brains : https://www.youtube.com/watch?v=YPShu0H3RbM&list=PLqq-6Pq4lTTanfgsbnFzfWUhhAz3tIezU&index=1  skim through 
Grafikart.fr: https://www.youtube.com/watch?v=uOuulpBs8dQ&list=PLjwdMgw5TTLX1tQ1qDNHTsy_lrkCt4VW3&index=2



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

In TypeScript, the any type is used to indicate that a variable can have any type in the future. This means that it can be assigned a value of any type, such as boolean, number, or string, and can be changed to a different type at any point in time.

However, using the any type can lead to a loss of benefits that TypeScript provides, as it hides errors that could be caught during development and provides no hints about the expected type of a variable. Therefore, it is recommended to avoid using the any type unless necessary, such as in cases where the type of a variable is not known in advance or needs to be changed frequently.

For example, in the code snippet provided, the variable numberVariable is initially assigned a value of type number but can be reassigned to a value of type string or an object with different properties. This can lead to errors and make the code harder to debug.

Similarly, the arrayValue and objectValue variables are declared with the any type, which means that they can be assigned values of any type. While this may be useful in some cases, it can also lead to mistakes and make the code harder to maintain.

Therefore, it is recommended to declare the types of variables as specifically as possible to take full advantage of TypeScript's features and avoid potential errors.

```TS
let numberVariable : any = 100;
numberVariable = "hello";
numberVariable = {name: 'eddie', age : 1000, right: true};

```

Using the any type in TypeScript allows for variables to be assigned values of different types, which can cause the loss of benefits provided by TypeScript and bring it closer to JavaScript. By using any, developers are not provided with error messages or hints about expected types, which can lead to mistakes and make debugging more difficult. While there are rare cases where using any may be necessary, it is advisable to use it with caution and declare types as specifically as possible to take full advantage of TypeScript's features. Similarly, setting an array to any allows for pushing values of any type, which can result in mistakes if types are not declared more specifically, such as string.

```TS

let arrayValue : any[] = [];

let objectValue = {
    numberValue: any,
    stringValue: any
}


```



## Better workflow and tsconfig 
We are currently working with TypeScript, which compiles into JavaScript when we run it. As our project becomes more complex and we have multiple TypeScript and JavaScript files, it is essential to keep them organized. We can achieve this by separating them into different folders, such as a folder for source files where we write TypeScript and a folder for files that will be deployed to a web server. We can create a public file for HTML, CSS, and JavaScript files, and a source folder for TypeScript files that we do not need to deploy.

This structure makes it easier to maintain our project. However, when we try to compile it, we may encounter errors. To map the files correctly, we can use ts --init, which initializes the TypeScript configuration. There are several JSON attributes, but we need to pay attention to the rootDir and outDir attributes. rootDir is set to .src, and we need to ensure that our files are in the correct folders.

If we encounter an error such as "No inputs were found," it means that TypeScript could not find any input files to compile based on the specified include and exclude paths in our tsconfig.json file. We should check that our project structure and file paths are correct, and ensure that any files we want to compile are included in the include paths.

Another error we may encounter is "Only 'amd' and 'system' modules are supported alongside --outFile." This error occurs when the module value and the outFile value in our tsconfig.json file are incompatible. When using the outFile option, only the amd and system module formats are supported. We can either change the module value to "amd" or "system" or remove the outFile option and let TypeScript generate individual JavaScript files for each input file.

Finally, to ensure that we eliminate the error of files being outside of the src folder, we can add "skipLibCheck": true and "include": ["src"] to our tsconfig.json file. This tells the TypeScript compiler to only include files inside the src folder.



## Function Basics 

### let functionName : Function;
 
This is a TypeScript syntax for declaring a variable functionName of type Function. It is worth noting that Function is a built-in type in TypeScript, and it represents a function.
 note the Function type is in the capital unlike number, string, boolean or anything else where we did not use capitals 


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
  <script src="sandbox.js"></script>
</body>
</html>


```


This is a JavaScript syntax for defining a function expression that will print "hello world" to the console. The => syntax is used to define an arrow function. In this case, functionName is a variable that stores the arrow function expression.


```TS

let functionName = () => {
    console.log("hello world");
}

let functionName : Function;


```
This is a TypeScript syntax for declaring a variable functionVariable of type Function. This is similar to the first example, but here the variable is not initialized with a function expression.



```TS
let functionVariable : Function;

functionVariable = () => {
    console.log("hello this is my Function type");
}




functionVariable();


```
This is a JavaScript syntax for defining an arrow function expression that will print "hello this is my Function type" to the console. The functionVariable variable is now initialized with the arrow function expression. Then the function is called by functionVariable();.
This is a TypeScript syntax for declaring a variable functionVariableWithDifferentParameterTypes of type Function. This is similar to the second example, but here the variable has a different name.




if we have parameters and types, we can not pass through values that contrasts the original types 

```ts


let functionVariableWithDifferentParameterTypes: Function;


functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number) => {
console.log((`${firstArgument} and ${secondArgument}`);
}



functionVariableWithDifferentParameterTypes(1,2);


```

It is defining an arrow function expression that takes two required parameters of type number and one optional parameter of type string or number. The ? symbol makes the last parameter optional. In this example, the function prints only the required parameters to the console. This is because the optional parameter is not provided when calling the function with functionVariableWithDifferentParameterTypes(1, 2);.


### ? optional parameters 
what if I want to pass in optional parameters, notice when I do that the error goes away. when we do not pass through the optional argument, the value becomes undefined 

```ts

let functionVariableWithDifferentParameterTypes: Function;

/*
functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number, optionalArgument: string| number) => {
console.log((`${firstArgument} and ${secondArgument}`);
}
*/
functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number, optionalArgument?: string| number) => {
  console.log(`${firstArgument} and ${secondArgument}`); // added closing parenthesis here
}

functionVariableWithDifferentParameterTypes(1,2);

```

### default value 

if we do not pass a optional argument, we can define a default value 

```ts

let functionVariableWithDifferentParameterTypes: Function;

 
// functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number, optionalArgument?: string| number = "100") => {
// console.log((`${firstArgument} and ${secondArgument}`);
// }


functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number, optionalArgument: string| number = "100") => {
console.log((`${firstArgument} and ${secondArgument}`);
}

functionVariableWithDifferentParameterTypes(1,2);

/*


The syntax of defining the default value for an optional argument is incorrect. Instead of optionalArgument?: string| number = "100", it should be optionalArgument: string| number = "100". The ? sign indicates that the argument is optional, so there's no need to provide a default value.

The function expects three arguments, but you're only passing two arguments when calling it. The last argument optionalArgument is optional, but you still need to provide a value for the second argument secondArgument.
*/

```
This is a JavaScript syntax for defining an arrow function expression that takes two required parameters of type number and one optional parameter of type string or number with a default value of "100". In this example, the function prints only the required parameters to the console. This is because the optional parameter is not provided when calling the function with functionVariableWithDifferentParameterTypes(1, 2);.



##### note: when we use a default value, we do not use this default parameters 

## return 

TypeScript can infer the type of a function's return value based on the value that the function returns.



```TS

let functionVariableWithDifferentParameterTypes: Function;

/*
functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number, optionalArgument: string| number) => {
console.log((`${firstArgument} and ${secondArgument}`);
}
*/
functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number, optionalArgument?: string| number) => {
  // return firstArgument + secondArgument + optionalArgument; TS1128: Declaration or statement expected.
  return firstArgument + secondArgument;
}


let result = functionVariableWithDifferentParameterTypes(1,2);

console.log(`the result is  ${result}`);
```

Although it's possible to specify a return type for a function, it's not necessary since TypeScript can automatically infer the return type based on the value returned. However, if we want to communicate to other developers the expected return type of a function, we may choose to explicitly specify the return type for clarity and ease of understanding.




```ts
let functionVariableWithDifferentParameterTypes: Function;

 
functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number, optionalArgument?: string| number) : number => {
  // return firstArgument + secondArgument + optionalArgument; TS1128: Declaration or statement expected.
  return firstArgument + secondArgument;
}


let result = functionVariableWithDifferentParameterTypes(1,2);

console.log(`the result is  ${result}`);
```


If we don't provide a return value in TypeScript, the language will return the "void" value, which explicitly signifies a complete absence of any value, as opposed to undefined which indicates that a value was not passed through. It's important to note that void and undefined are separate concepts in TypeScript. However, if this explanation seems unclear, it's not necessary to dwell on it too much for now.




that sounds foggy, do not get bogged down too much with that now 





```ts
let functionVariableWithDifferentParameterTypes: Function;

functionVariableWithDifferentParameterTypes = (firstArgument: number, secondArgument: number, optionalArgument?: string| number) : void : number => {
 
}


let result = functionVariableWithDifferentParameterTypes(1,2);

console.log(`the result is  ${result}`);
```




## Type Alias 

At times, specifying the type of a function's parameter can be complex and lengthy. Moreover, the same complicated types might be used in multiple functions, resulting in redundancy. To overcome this issue, we can define our own type aliases for these complex types once and use them multiple times in different functions, thus making our code more concise and readable. This approach provides us with the flexibility to handle a wide range of complicated types without the burden of repeatedly defining them


Type alias, on the other hand, is a way to create a new name for a type, allowing you to reuse complex types or simplify long types. For example, type Age = number | string creates a new type alias Age that represents either a number or a string. Type aliases can also be used to define complex types, such as object types or function types. Type aliases do not introduce new types into the system and are purely a way of providing a convenient name for an existing type.

long winded 

#### type newName : number | string

```ts

type stringAndNumber = string | number;

let functionName = (parameter1: stringAndNumber, parameter2: stringAndNumber, parameter3 : stringAndNumber): void =>{
    
})



type objectWithNames = {
    name: string,
    id: number
}

let functionName2 = (parameter1: objectWithNames): void =>{
    console.log(parameter1);
    
};

functionName2({name:"eddie", id : 1234});
```

This TypeScript code defines two functions that demonstrate the use of type annotations in TypeScript.

The first function is declared with a type alias stringAndNumber, which is defined as a union of string and number types. This means that the function's parameters parameter1, parameter2, and parameter3 can accept values of either string or number types. The function itself doesn't have a body, as it's only used to demonstrate the syntax of defining a function with typed parameters.

The second function is declared with a type alias objectWithNames, which defines an object with two properties: name, which is a string, and id, which is a number. The function has one parameter parameter1, which is of type objectWithNames. The function body logs the parameter to the console.

Finally, the functionName2 function is called with an object literal that contains two properties name and id. The object literal is passed as an argument to the function, and the function logs the object to the console.



## function signatures 


we can go one step further, the function signature basically defines the general structure of a function what arguments it takes and what type it return 


```TS

(): void => {

}


function functionName(parameter1: number, parameter2: string): void {
    console.log(`${parameter1} and ${parameter2}`);
}



```



##### It should be noted that the type definition let definition : (parameter: type, parameter: type) => void does not utilize equal signs as it only specifies the parameter types and return type of a function, without defining its concrete implementation. The actual function implementation is defined using the equals sign.

```TS
let definition : (a: number, b : number) => void;


definition = (num1: number, num2 : number) =>{
    console.log(`${num1 + num2}`)
}

definition(1,2);

```

In the provided TypeScript code, a function type definition is first declared with let definition : (a: number, b : number) => void. This definition specifies that definition is a function that takes two parameters, both of type number, and returns nothing.

Next, an implementation is assigned to definition using the equals sign. The implementation is a function that takes in two parameters num1 and num2, both of type number, and logs the sum of the two numbers to the console using template literals.

Finally, the function is called with definition(1,2), passing in the numbers 1 and 2 as arguments. The function then logs the sum of these two numbers, which is 3, to the console.

In summary, the provided code declares a function type, defines its implementation, and calls it with specific arguments.


example utimately with a return value
```TS
let definition : (a: number, b : number) => number;


definition = (num1: number, num2 : number) =>{
  
    return num1 + num2;
}

let result = definition(1,2);
console.log(`the result is ${result}`);

```


signature with multiple parameter types 

```TS

let definition : (a: number | string, b : number | string) => void;


definition = (y: number | string, x : number | string) =>{
  
    console.log(`the result is ${x} + ${y}`);
}

definition(1,2);
 
```



signature with an object 


```TS

/*

let definition : (obj: {a: string|number, b : string|number}) => void;


definition = (obj : {x:string|number, y:string|number}) =>{
  
    console.log(`the result is ${obj.x} + ${obj.y}`);
}

definition({a:1, b:2});


 There are a few issues with  this code:

In the definition of the definition function, the parameter names (x and y) don't match the types defined in the function signature (a and b).

In the call to the definition function, you're passing an object with properties a and b, but the function signature expects properties x and y.
*/


let definition : (xxx: {x: string|number, y: string|number}) => void;


definition = (obj : {x:string|number, y:string|number}) =>{
  
    console.log(`the result is ${obj.x} + ${obj.y}`);
}

definition({x:1, y:2});
 


```


In the code example provided, the function signature defines a parameter named xxx that is an object with two properties, x and y, both of which can be either strings or numbers. However, in the function implementation, the parameter is named obj instead of xxx.

This code still works correctly because the labels inside the object (x and y) are consistent with the function signature, even though the parameter name is different. This means that the definition function can be called with an object that has properties named x and y, regardless of the parameter name used in the function signature.

It's important to note that the property labels (x and y) are what's important in the function signature, not the parameter name. This means that the signature for the object can be different (i.e. using a different parameter name), but as long as the labels inside the object are consistent with the function signature, the code will work correctly.








## Type Casting 
just like regular JS we can use DOM to interact with the DOM to query elements of data HTML react to events 




## DOM

when working with DOM in TypeScript, we can still use the same query methods and event listeners etc as javascript. 
but there are a few key differences to be aware of 




#### null error
This error occurs because the document.querySelector method may not always find an anchor tag on the page that matches the selector, in which case it would return null. If null is returned, attempting to access the href property of null would result in a runtime error, hence TypeScript flags it as a potential problem.


```TS
const link = document.querySelector('a');

console.log(link.href);


/*
src/app.ts:3:13 - error TS18047: 'link' is possibly 'null'.

3 console.log(link.href);

*/

```


To fix this error, one way is to explicitly check if link is not null before accessing its properties. For example, we could modify the code as follows:

```TS

const link = document.querySelector('a');

if(link){
    
console.log(link.href);
}else{
    console.log("link does not have attribute");
}

```


An interesting feature of TypeScript is its automatic inclusion of special types for every DOM element. This means that when we use special variables to represent DOM elements, such as anchor variables, TypeScript is aware of all the different properties and types associated with these elements. This enables TypeScript to provide accurate and helpful type-checking and code suggestions based on the specific properties and methods of the element being used. In other words, TypeScript understands the properties and methods of DOM elements and uses this information to enhance the development experience by providing more accurate and specific feedback.




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
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </form>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.5.4/typescript.min.js"></script>
  <script src="app.js"></script>
</body>
</html>

```



### DOM 

##### let xxx = document.querySelector("#id") as HTMLFormElement
##### let xxx = document.querySelector(".class") as FormElement
##### xxx.addEventListener('submit', (e: Event) => { e.preventDefault(); })


```TS

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const cars = document.querySelector("#cars") as HTMLFormElement;
const fname = document.querySelector("#fname") as HTMLFormElement;
const lname = document.querySelector("#lname") as HTMLFormElement;


form.addEventListener('submit', (e : Event) => {
    e.preventDefault();
    console.log(
        cars.value,
        fname.value,
        lname.value
    );

})

```

he above code is written in TypeScript and is used to manipulate the DOM (Document Object Model). The querySelector method is used to select specific HTML elements by their class or ID, and then the addEventListener method is used to add an event listener to the selected form element.

The console.log method is used to print the child elements of the selected form element.

In the event listener, preventDefault method is called to stop the default action of submitting the form. Then, the value property is used to access the values entered by the user in the input fields and these values are logged to the console.

To manipulate the DOM in TypeScript, you can use the same methods that are used in JavaScript such as querySelector, addEventListener, appendChild, removeChild, innerHTML, classList etc.

For example, to change the text of an HTML element, you can use the textContent property or the innerHTML property.

To add or remove a class from an element, you can use the classList property and its methods add, remove, and toggle.

To create new HTML elements, you can use the createElement method and to add them to the DOM, you can use the appendChild method.

In TypeScript, you may need to explicitly cast the selected elements to their corresponding HTML element types using the as keyword. For example, querySelector returns an Element type, but if you know the element is an HTMLInputElement, you can cast it as such using as HTMLInputElement.




## Classes 

In TypeScript, a class is a programming construct that serves as a template for creating objects. It facilitates the organization of objects and the specification of their properties and types.

To create a new class, it is necessary to provide a constructor method, which enables the initialization of the class's properties and the passing of different values to its objects. This ensures that each object instantiated from the class conforms to the specified structure and has the appropriate attributes.

when we create a new object from a class, we use the new keyword followed by the class name and any necessary parameters in parentheses. This process is known as instantiation. The constructor of the class is then called and receives these parameters as arguments. Inside the constructor, the values of these parameters are assigned to the corresponding properties of the object being created. Therefore, the new keyword, along with the constructor, allows us to create an instance of a class with specific values for its properties. We can then refer to this new object using a variable of the class type that we define, which is created using the const keyword.

```TS
class NewClass{
    name: string;
    age: number;
    gender: string;

   constructor(n: string, a : number, g : string){
    this.name = n;
    this.age = a;
    this.gender = g;
   }


   format(){
    return `${this.name} ${this.age}  ${this.gender} `;
   }

}


const object1 = new NewClass("Eddie", 19, "Male");
const object2 = new NewClass("Julia",15 ,"Female");

console.log(object1.format());
console.log(object2.format());





```


The above code defines a class called NewClass that has three properties: name, age, and gender. The class also has a constructor that takes three parameters: n, a, and g, which correspond to the name, age, and gender properties, respectively.

Inside the constructor, the this keyword refers to the current instance of the class, and the property values are assigned using the values passed as parameters.

The class also has a method called format() that returns a string that contains the name, age, and gender properties of the current instance of the class.

After defining the NewClass, two instances of the class are created using the new keyword with different values passed as arguments. These instances are stored in the variables object1 and object2.

Finally, the format() method is called on each object using the dot notation and the results are logged to the console using console.log(). The output will be two lines, each containing the formatted string for each of the two objects created.



#### let objectsArray : ClassName[] = [];

It is possible to add objects of a specific class to an array, and this guarantees that all the objects in the array are of the same type. When cycling through the array, we can be certain that all the objects contained in it will adhere to the same type as the class of the array. Furthermore, when an object is created from this class, all of its attributes are public by default, allowing us to access them freely without any restrictions.



```TS



const object1 = new NewClass("Eddie", 19, "Male");
const object2 = new NewClass("Julia",15 ,"Female");

/*
const objects =  NewClass[] = [];

src/app.ts:23:27 - error TS1011: An element access expression should take an argument.

23 const objects =  NewClass[] = [];
*/

let objects : NewClass[] = [];
objects.push(object1);
objects.push(object2);

for(let x of objects){
    console.log(x.format());
} 
```


### for each loop

In TypeScript, forEach is a method that can be called on an array object to iterate over each element of the array and execute a function for each element.
One important thing to note is that the forEach method does not return a new array. It simply iterates over each element of the array and executes the callback function for each element. If you need to create a new array based on the values of the original array, you may want to use other array methods such as map, filter, or reduce.



```TS

let objects : NewClass[] = [];
objects.push(object1);
objects.push(object2);

objects.forEach(element => {
    console.log(`${element.name} ${element.age}`);

})
```

TypeScript provides several ways to iterate over an array. Here are some of the most common methods:

 
### for...of loop:
The for...of loop can be used to iterate over an array in a more concise way. Here is an example:
 
 ```TS
let array: Array<number> = [1, 2, 3, 4, 5];

for (let value of array) {
  console.log(value);
}
```

### map method
The map method can be used to iterate over an array and create a new array based on the values of the original array. Here is an  
 ```TS
let array: Array<number> = [1, 2, 3, 4, 5];

let newArray = array.map(function (value) {
  return value * 2;
});

console.log(newArray); // [2, 4, 6, 8, 10]
```


### filter method
The filter method can be used to iterate over an array and create a new array that only contains values that meet a certain condition. Here is an example:
 
 ```TS
let array: Array<number> = [1, 2, 3, 4, 5];

let newArray = array.filter(function (value) {
  return value % 2 === 0;
});

console.log(newArray); // [2, 4]

```

### reduce method:
The reduce method can be used to iterate over an array and perform a calculation based on the values of the original array. Here is 


 
 ```TS
let array: Array<number> = [1, 2, 3, 4, 5];

let sum = array.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);

console.log(sum); // 15
```

These are some of the most common ways to iterate over an array in TypeScript. The method you choose depends on your specific use case and the task you need to accomplish.

## Public, Private & Readonly Access Modifier 


### public

the default behavior of class is that all properties are public by default same as public in front of attributes. 

```TS
class NewClass{
    public name: string;
    public age: number;
    public gender: string;

   constructor(n: string, a : number, g : string){
    this.name = n;
    this.age = a;
    this.gender = g;
   }


   format(){
    return `${this.name} ${this.age}  ${this.gender} `;
   }

}

```

### private 
when we put private modifier, we cannot access them from the outside of the class, but we can access that property inside the methods inside the class 

```TS
class NewClass{
    private name: string;
    private age: number;
    private gender: string;

   constructor(n: string, a : number, g : string){
    this.name = n;
    this.age = a;
    this.gender = g;
   }


   format(){
    return `${this.name} ${this.age}  ${this.gender} `;
   }

}

/*


src/app.ts:36:28 - error TS2341: Property 'name' is private and only accessible within class 'NewClass'.

36     console.log(`${element.name} ${element.age}`);
                
 
*/

```

### readonly 

Readonly indicates that a variable or property can be accessed for reading both inside and outside the class, but it cannot be modified. the readonly modifier is used to define a variable or property that can only be read and cannot be modified after initialization. It is similar to the const keyword in JavaScript, but with some important differences.

With readonly, you can declare properties that can only be set at object creation or in the constructor of a class. Once set, their value cannot be changed. This helps prevent unintended changes to data in your application, improving its reliability and maintainability.

Additionally, readonly can be applied to methods as well, ensuring that they cannot be overwritten by derived classes. This allows you to define a contract that guarantees that the method will behave in a certain way, providing greater predictability and reducing the likelihood of bugs in your code.



```TS

class NewClass{
    readonly name: string;
    readonly age: number;
    readonly gender: string;

   constructor(n: string, a : number, g : string){
    this.name = n;
    this.age = a;
    this.gender = g;
   }


   format(){
    return `${this.name} ${this.age}  ${this.gender} `;
   }

}


const object1 = new NewClass("Eddie", 19, "Male");
const object2 = new NewClass("Julia",15 ,"Female");


let objects : NewClass[] = [];
objects.push(object1);
objects.push(object2);

objects.forEach(element => {
    console.log(`${element.name} ${element.age}`);
    // we cannot do this element.name = "Edward";

})

 
```


n TypeScript, when defining a class, you can define the properties or variables of the class either outside or inside the constructor. Defining the properties inside the constructor is a common approach in TypeScript, and it has several advantages over defining each variable one by one outside the constructor.

When you define the properties inside the constructor, you can take advantage of TypeScript's constructor parameter properties. This means that you can define the parameters of the constructor with an access modifier, such as public or private, which automatically generates a corresponding property for the class. For example, consider the following class:


```TS

class Person {
  constructor(public name: string, private age: number) {}
}

```

n this example, the name parameter has the public access modifier, which generates a name property for the class. Similarly, the age parameter has the private access modifier, which generates a age property for the class. This way, you don't have to manually define each property outside the constructor.

Defining the properties inside the constructor also makes it easier to initialize them. You can directly assign values to the properties inside the constructor using the corresponding parameters. For example:

```TS

class Person {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}
```

In this example, the name and age properties are initialized directly inside the constructor using the name and age parameters, respectively. This makes the code more concise and easier to read.



### constructor(modifier variable:type, modifier variable:type)
Another advantage of defining the properties inside the constructor is that it makes it easier to add logic to the initialization process. For example, you can perform validation on the constructor parameters before assigning them to the corresponding properties.


now this only works if you use access modifiers in front of these different parameters 

when we pass these properties into the constructor, it automatically assigns those values to the names so now we do not need this 

```TS

class NewClass{
  
   constructor(public name: string, public age : number, public gender : string){
    this.name = name;
    this.age = age;
    this.gender = gender;
   }


   format(){
    return `${this.name} ${this.age}  ${this.gender} `;
   }

}


const object1 = new NewClass("Eddie", 19, "Male");
const object2 = new NewClass("Julia",15 ,"Female");


let objects : NewClass[] = [];
objects.push(object1);
objects.push(object2);

objects.forEach(element => {
    console.log(`${element.name} ${element.age}`);
    // we cannot do this element.name = "Edward";

})

 
```


## Modules  -- export class/ function and import {ClassName} from './folder/FileNAME.js'; 

#### it is js file not a ts file 

modules (also known as namespaces) and external modules (also known as ES6 modules). One downfall is to make multiple requests, we can combat that using webpack 

External modules are supported by the ES6 module system, which is built into modern browsers and Node.js. With external modules, you can import and export classes, functions, variables, and other declarations from one module to another. To import a declaration from another module, you use the import keyword followed by the name of the declaration you want to import, enclosed in curly braces {}. You also specify the path to the module file using a relative or absolute file path.
in tsconfig.js    "target": "es2016",  

   "target": "es2016",  


```TS

import {NewClass} from "./classes/NewClass.js"

const object1 = new NewClass("Eddie", 19, "Male");
const object2 = new NewClass("Julia",15 ,"Female");


let objects : NewClass[] = [];
objects.push(object1);
objects.push(object2);

objects.forEach(element => {
    console.log(`${element.name} ${element.age}`);
    // we cannot do this element.name = "Edward";

})

 
```



## Interface -- interface InterfaceName {}    const object: InterfaceName  = { attribute: value, functionName(parameter:type): returnType }


an interface is a way to define a contract for an object or a class. Interfaces allow us to specify the properties and methods that an object or a class should have. By defining an interface, we can enforce some rules that the object or class must follow.

One common use of interfaces is to define the shape of objects. For example, if we have a function that takes an object as an argument, we can define an interface that specifies the properties that the object should have. This allows us to ensure that the object we pass to the function has the necessary properties, and it also provides better type safety.

Another use of interfaces is to define the return types of methods. By defining an interface that specifies the return type of a method, we can ensure that the method returns the expected type of value.

However, it's important to note that interfaces are not used to generate objects based on interfaces. Instead, interfaces are used to specify the shape of objects and to enforce rules. To create an object that conforms to an interface, we need to manually define an object that has the properties specified by the interface.

In summary, TypeScript interfaces allow us to define contracts for objects and classes, specify the shape of objects, and enforce rules for objects and methods. They are a powerful tool for creating more robust and maintainable code.

```TS
interface Person{
    name: string;
    age : number;

    speak(x: string): void;
    speak(x: number) : void;
}



```

we do not use interfaces to create objects in this case so we do not use constructors 



when we have different properties, this interface has its complying to that interface, if I added extra properties, it will cause errors 


```TS

// const me : Person = {};  this object has to comply with our interface

```


```TS
interface Person{
    name: string;
    age : number;

    speak(x: string): void;
    walk(x: number) : void;
}


const eddie : Person = {
    name: 'Eddie',
    age : 20,
    speak(text: string) : void{
        console.log(text);
    },
    walk(amount: number) : void{
        console.log(amount);
    }
    // we cannot do 
    // nonexistent(parameter: type) : void{ console.log(parameter);}

}


```

these structure has to enforce the rules of variables and functions, so it knows all the properties and functions inside the Interface 

```TS

interface Person{
    name: string;
    age : number;

    speak(x: string): void;
    walk(x: number) : void;
}


const eddie : Person = {
    name: 'Eddie',
    age : 20,
    speak(text: string) : void{
        console.log(text);
    },
    walk(amount: number) : void{
        console.log(amount);
    }

}

let greetPerson = (person: Person) =>{
    console.log(person.speak("hello this is me "));
}

greetPerson(eddie);
```

## Interfaces with Classes 

if we want to import interface from that now if we want to implement the interface 
inside a class, then we can say export class ClassName implements InterfaceName 

```TS
export interface HelloInterface{
    format() : string;
    
} 


import { HelloInterface
 } from "../interfaces/HelloInterface";
export class NewClass implements HelloInterface{ 
  
    constructor(public name: string, public age : number, public gender : string){
     this.name = name;
     this.age = age;
     this.gender = gender;
    }
 
 
    format(){
     return `${this.name} ${this.age}  ${this.gender} `;
    }
 
 }
 

import { HelloInterface
} from "../interfaces/HelloInterface";
export class NewClass2 implements HelloInterface{ 
 
   constructor(public label: string, public age : number, public gender : string){
    this.label = label;
    this.age = age;
    this.gender = gender;
   }


   format(){
    return `${this.label} ${this.age}  ${this.gender} `;
   }

}




import {NewClass} from "./classes/NewClass.js"
import { NewClass2 } from "./classes/NewClass2.js";
import { HelloInterface } from "./interfaces/HelloInterface.js";

const object1 = new NewClass("Eddie", 19, "Male");
const object2 = new NewClass2("Julia",15 ,"Female");


let objects : HelloInterface[] = [];
objects.push(object1);
objects.push(object2);

objects.forEach(element => {
    console.log(element.format());
    // we cannot do this element.name = "Edward";

})

 

```

This TypeScript code defines an interface HelloInterface that has a single method format() that returns a string. The HelloInterface is exported so that it can be imported and used in other files.

Two classes, NewClass and NewClass2, are also defined, both of which implement the HelloInterface. Both classes have a constructor that initializes their properties, and they each implement the format() method that returns a formatted string.

The NewClass and NewClass2 classes are exported so that they can be imported and used in other files. In addition, the HelloInterface is imported so that it can be used as a type in the following code.

The last part of the code creates two objects, one of NewClass and one of NewClass2. Both objects are added to an array of HelloInterface objects. The forEach loop is then used to loop through each object in the array and call the format() method on each object.

Note that because the type of the objects array is HelloInterface[], we can only access the format() method on each object. We cannot access any other properties or methods that may be defined in NewClass or NewClass2, and we cannot assign any values to properties like name or label directly through the HelloInterface type.



## Generics 

Generics in TypeScript allow you to create reusable code components that can work with multiple types, without losing type safety. A generic type or function is a type or function that can operate on different data types while preserving the type information.
generics in a logical way allows us to create reusable blocks of code 
 which can be used with different types 

In this example, identity is a function that takes an argument arg of type T and returns the same argument without any modifications. The <T> syntax before the function arguments declares that this function is generic and can operate on any type T.
Generics are a powerful feature of TypeScript that allow you to write more flexible and reusable code.





```TS

function functionName<T> (parameter1: T, parameter2: T) : T{
   //  Operator '+' cannot be applied to types 'T' and 'T'. return parameter1 + parameter2;

   return parameter1;
}


console.log(functionName<number>(1,2));
console.log(functionName<boolean>(true,false));



```





```TS



const something = <T>(obj: T) => {
    let id = 1;
    return {...obj, id};
}


let one = something({parameter1:1, parameter2: "hello"})

console.log(one.parameter1);

/*

const something = (obj: object) => {
    let id = 1;
    return {...obj, id};
}


let one = something({parameter1:1, parameter2: "hello"})
// src/app.ts:9:17 - error TS2339: Property 'parameter1' does not exist on type '{ id: number; }'.
console.log(one.parameter1);
*/
```

if we do not use generics, it does not know about the name or age or any attributes 
we can come back to this by using generics 


```TS

const something = <T>(obj:T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
  };



  let one = something({name:'eddie', age: 30});

  console.log(something.name);
```

this captures what is in the function, it captures this information when we pass an object in now 



### <T extends object|types>
but above would not work if we have a different type 
we can only use T extends dataType to enforce certain types pass in this 


```TS

c


const something = <T extends object>(obj: T) => {
    let id = 1;
    return {...obj, id};
}


let one = something({parameter1:1, parameter2: "hello"})
let two = something('hello');
/*
src/app.ts:11:21 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'object'.

*/

console.log(one.parameter1);
console.log(one);
```



The generic type constraint <T extends {name: string, id: number}> specifies that the type T must have a property called name of type string and a property called id of type number. However, when you call the something function with the argument {parameter1: 1, parameter2: "hello"}, this object does not have a name property of type string or an id property of type number, so it does not satisfy the constraint.

Therefore, the TypeScript compiler will raise an error stating that the argument passed to something does not conform to the required type constraint, and the program will fail to compile.

```TS




const something = <T extends {name: string, id: number}>(obj: T) => {
    let id = 1;
    return {...obj, id};
}

/*

rc/app.ts:10:22 - error TS2345: Argument of type '{ parameter1: number; parameter2: string; }' is not assignable to parameter of type '{ name: string; id: number; }'.
  Object literal may only specify known properties, and 'parameter1' does not exist in type '{ name: string; id: number; }'.

10 let one = something({parameter1:1, parameter2: "hello"})
                        .
                        */


let one = something({parameter1:1, parameter2: "hello"})
 

console.log(one.parameter1);
console.log(one);





const something = <T extends {parameter1: number, parameter2: string}>(obj: T) => {
    let id = 1;
    return {...obj, id};
}


let one = something({parameter1:1, parameter2: "hello"})
// let one = something({a:1, b: "hello"})
// this does not work because name has to conform the format

console.log(one.parameter1);
console.log(one);
```


```TS

interface InterfaceName<T> {
    id: number;
    name: string;
    data : T;
}


const exampleOne : InterfaceName<string> = {
    id: 1,
    name: "hello",
    data: "world"
}

const exampleTwo: InterfaceName<object> = {
    id: 2,
    name: "eddie",
    data: { id: 1, name : "whatever", comment:  "something"}
}

const arraysForInterfaces = [exampleOne, exampleTwo];
arraysForInterfaces.forEach( element => {
    console.log(element.data);
})

```



## Enums 

enums is another special type in TypeScript which allows us to store a set of constants or keywords  and associate them with a numeric value 
In TypeScript, an enum is a special data type that allows you to define a set of named constants, each with an associated numeric value. Enums can be used to represent a set of related values, and they make your code more readable and less error-prone.




for example, we can pass the types as certain numbers 

In the first example provided below, the interfaceType property of the InterfaceName interface is set to a numeric value that represents the type of the data being stored. However, this approach makes it difficult to understand what each numeric value represents, and it can be easy to make mistakes when assigning these values.




```TS




interface InterfaceName<T>{
    id: number;  
    name: string;  
    data: T;  
    interfaceType: number;
}


const one: InterfaceName<object> = {
    id: 1,
    name: "hello",
    data: {name: "ed", id : 2},
    interfaceType: 1 // use an enum 
}

const two: InterfaceName<string> = {
    id: 1,
    name: "hello",
    data: "hey",
    interfaceType: 2 // use an enum 
}

const three: InterfaceName<number> = {
    id: 1,
    name: "hello",
    data: 3,
    interfaceType: 3// use an enum 
}








```


the way that we can avoid this is to use enums, we can specify a descriptive constant associated with these type names  with a numeric value with them, I can use a constant to represent these types 

In the second example below, an enum called TypeDefinition is defined with a set of named constants that represent the different types of data that can be stored. Each constant is associated with a numeric value, which can be used to identify the type of data being stored. By using the TypeDefinition enum, the code becomes more readable and less error-prone.

For example, instead of assigning the interfaceType property to 1, 2, or 3, we can assign it to TypeDefinition.ONE, TypeDefinition.TWO, or TypeDefinition.THREE, respectively. This approach makes the code more self-documenting, which can help reduce bugs and make the code easier to maintain.

```TS

enum TypeDefinition {ONE = 1111, TWO = 2222, THREE = 3333, FOUR};


interface InterfaceName<T>{
    id: number;  
    name: string;  
    data: T;  
    interfaceType: number;
}


const one: InterfaceName<object> = {
    id: 1,
    name: "hello",
    data: {name: "ed", id : 2},
    interfaceType: TypeDefinition.ONE // use an enum 
}

const two: InterfaceName<string> = {
    id: 1,
    name: "hello",
    data: "hey",
    interfaceType: TypeDefinition.TWO // use an enum 
}

const three: InterfaceName<number> = {
    id: 1,
    name: "hello",
    data: 3,
    interfaceType: TypeDefinition.THREE// use an enum 
}








```



## Tuples 


n programming, a tuple is an ordered collection of elements of different data types. Tuples are similar to arrays, but unlike arrays, tuples have a fixed length and their elements may have different types.

A tuple can be thought of as a simple data structure that holds a small amount of related data. For example, you might use a tuple to represent a coordinate in 2D space, where the first element is the x-coordinate and the second element is the y-coordinate:

tuples are similar to array, we use square brackets to define them and they can also use array methods exception the difference is that the type of each data type in the position in a tuple is fixed once it is initialized 


```TS


let arrayExample = ['hello', 1, true];

arrayExample[0] = 222;
// this is allowed because we know any position in this array now can be a boolean, a string or a number 
// likewise we can change the elements to another type 
arrayExample[1] = "world"

arrayExample = [1, false, "hey"];

/**
 * src/app.ts:9:1 - error TS2322: Type '{ name: string; value: number; }' is not assignable to type 'string | number | boolean'.

9 arrayExample[2] = {name: 'ed', value: 1};
arrayExample[2] = [1,2,3,4];
src/app.ts:9:1 - error TS2322: Type 'number[]' is not assignable to type 'string | number | boolean'.

9 arrayExample[2] = [1,2,3,4];
 */
// we can set the 




```


the difference with tuple is that once we define a certain position as a certain type, we cannot change that type in that position 


#### we will have to define tuples explicit
In TypeScript, a tuple is a fixed-length array where each element has a specific data type. Tuples allow developers to declare an array with a fixed number of elements and specific types for each element.
Tuples can be useful when you want to represent a collection of values with a fixed number of elements and specific types for each element.

```TS

let arrayExample : Array<string> = [];
arrayExample[0] = "hello";

/**
 * arrayExample[1] = 2;
 * src/app.ts:3:1 - error TS2322: Type 'number' is not assignable to type 'string'.
 */

let tupleExample : [number, string, boolean] = [1, "hello", false];

tupleExample[0] = 2;
// tupleExample[0] = "hello";
/**
 * src/app.ts:4:1 - error TS2322: Type 'string' is not assignable to type 'number'.
 */
```

In the first line, an empty array is created with the type Array<string>. This means that the array can only contain strings.

In the second line, a tuple is created with three elements of types number, string, and boolean. A tuple is a fixed-length array that contains elements of specific types.

In the third line, the first element of the tuple is reassigned a new value of 2.

In the fourth line, an error is generated because an attempt is made to assign a string value to the first element of the tuple, which is of type number. This results in a type mismatch error, as TypeScript enforces the type of each element in the tuple.

Using tuples in TypeScript can help enforce strict typing and provide more precise data structures in your code.





Now we are in a good position to kick on and pick up typeScsript in TypeScript.com 

