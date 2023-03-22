
# Angular Crash course

# Reference 


[x] Traversy Media: https://www.youtube.com/watch?v=3dHNOWTI7H8&t=70s


Codevolution: https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ

freeCodeCamp.org: https://www.youtube.com/watch?v=3qBXWUpoPHo&t=44271s  skim fast 

OctAcademy: https://www.youtube.com/watch?v=CGLdH5ORX-Y    skim fast 

## Notes for VSCode 
It should be noted that in VSCode, the auto-completion feature is available for the app-header component. As such, typing the component name will automatically close the brackets.

if we type in .container, it will generate the class automatically 
```html
<div class="container"></div>
```



## what is angular?
Angular is a comprehensive and versatile front-end development framework that facilitates the creation of sophisticated and high-performance single-page applications. This framework, akin to other similar tools, is predominantly utilized to engineer client-side applications, but its capabilities can be further extended to enable the creation of potent full-stack applications by utilizing HTTP requests to interface with server-side components, specifically those built with the MEAN stack. Furthermore, Angular is not restricted to client-side operations, as it can be implemented on the server-side using technologies such as Angular Universal.

if you are a startup, freelancing, angular might not be the best choice, there are so much to it 
React followed by Vue followed by Angular, with React or Vue can do pretty much everything you want 




## Why use angular

1. Create dynamic frontend applications and user interfaces with ease
2. Utilize a full-featured framework, including router and HTTP capabilities, among others
3. Seamlessly integrate TypeScript for enhanced development capabilities
4. Leverage the power of RxJS for efficient, asynchronous programming -- RxJS uses something called observables, and observables allow us to write really efficient asynchronous programming 
5. Ensure testability with Angular's test-friendly architecture -- cli allows us to write unit test and end to end test 
6. Widely adopted by enterprise businesses for its robust features and functionality


Angular is more full-featured than react and vue does not make it better, it has steeper learning curving. It is more strict and standardized than React 




## Prequisites 

1. JavaScript Fundamentals 
2. Async programming -- Promise 
3. Array Methods -- forEach, map, filter and etc 
4. Fetch API/HTTP Requets 
5. NPM -- Node Package Manager 

you can move onto any frameworks if you know above 


## Angular Components 
Components are pieces of the UI including the template(html), logic, and styling 

Components are reusable and can be embedded into the template as an XML like tag 

Components consist of three fundamental elements: the template (written in HTML), the logic, and the styling. They are designed to be reusable and can be incorporated into the template as an XML-like tag.

To create a component, we use the @Component decorator, which requires a selector that specifies the tag used to embed the component. Additionally, we define a template URL to reference the HTML file associated with the component, and we may also provide any necessary services as providers within the component class. Finally, there are lifecycle methods available for use, which we will explore in greater detail as we progress.

```TS

@Component({
    selector: 'app-tag-name',
    templateUrl : './name-of-file-component.html',
    provider: [ XXXXServoce ]

})
export class XXXXComponents Implements OnInit {

}

```


## Angular services 
Angular distinguishes components from services to increase modularity and reusability 

By separating/ break them into a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient 

A component can delegate certain tasks to services, such as fetching data from the server, validating user input, or logging directly to the console. 


Services are usually created to deal with one task or one aspect of the application such as data fetching, input validation and so on 


## Angular CLI 
standard tooling for Angular development 

1. command line interface for creating angular apps 
2. dev server and easy production build to build out our static assets  
3. commands to generate components, services and etc, we do not have to create the files and add the boilerplate and the command will do that 


```bash
npm install -g @angular/cli 
ng new my-app-name

```
-g stands for global 


Let's jump in, you can use this as a supplement but it does not do much 
https://angular.io/docs


skip , enforce strict bundle checking
add angular routing? N 
we can add this at the end. We will set it up manually 


```bash
cd <directory_of_my_app>
ng serve 
```
code . to open visual studio code 

Let us examine the package.json file, which contains various dependencies required for Angular, including angular/core.
```json 
    "@angular/animations": "^15.2.0",
        "@angular/common": "^15.2.0",
        "@angular/compiler": "^15.2.0",
        "@angular/core": "^15.2.0",
        "@angular/forms": "^15.2.0",
        "@angular/platform-browser": "^15.2.0",
        "@angular/platform-browser-dynamic": "^15.2.0",
        "@angular/router": "^15.2.0",
        "rxjs": "~7.8.0",
        "tslib": "^2.3.0",
        "zone.js": "~0.12.0"

```

Furthermore, the package.json file has a section for defining various scripts, including ng serve, ng build, ng test, and other scripts.


```json
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },

```

In addition, there is a configuration section for defining the outputPath.



```TS
"options": {
            "outputPath": "dist/my-app-name",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],

```



If you have a full-stack application, you can change the outputPath to another directory. Furthermore, the package.json file contains assets, styles, and other relevant configurations.


```JSON

"assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
```


these you can add CDN as well. 


Finally, index.html is the single page where everything is loaded. As far as JavaScript is concerned, main.ts is a TypeScript file with the .ts extension. You can also add CDN to your Angular application.


even if you do not typescript at all, you just use that ts extension . this is like he entry point to angular 
it imports AppModule 

```TS

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

Essentially, when you instantiate a Component, like the AppComponent, it is included in the root declarations. If the Angular CLI is used to generate components, this process is automated. The CLI automatically imports and provides the Component, eliminating the need for manual input.

```TS

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


The imports section of the code is used to specify modules, such as the BrowserModule, which allows for interaction with the DOM. Other modules, such as FormsModule or HttpClientModule, would be placed in providers for global services. Finally, the bootstrap section specifies the AppComponent that will be loaded during the bootstrapping process.


When a component is generated, it creates four files: a TypeScript file, which contains the primary class, its properties, and its methods; an HTML file, which contains the template; a CSS file, which is used for the component's styling; and a spec.ts file, which is utilized for testing, but will not be covered in this note.

```TS
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-name';
  // use title : string = "hello world";
}


```

The import statement is used to bring in components from various modules like the core module or any other external modules that are required for the application.

A selector is an HTML tag used to embed a component. In this case, since we are in the root component, it is being embedded in the index.html.

templateUrl refers to the HTML file being used for the component, while styleUrls is an array of URLs to CSS stylesheets to be applied to the component.

The class is where properties and methods of the component are defined, including custom methods or lifecycle methods.

In the HTML code, string interpolation is used to display the values of variables defined in the TypeScript file. In the given example, the value of the title variable is displayed within an H1 tag.

```TS

<h1> {{title}} </h1>
{{ 1 + 2}}
```




as far as styling goes, we have this styles.css that is for the global css 



## Child Components 

Retaining the terminal, we can create a new component through the following command:

 
```bash
 ng g c components/header

```
It should be noted that a folder can be designated prior to specifying the component name.

The newly generated component comprises of a constructor, which is executed upon the initialization of the application. Additionally, an ngOnInit method, serving as a lifecycle method, is included in the component. Most initialization procedures should be implemented within this method.

```TS

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

```

Subsequently, this component can be utilized within the app component.



header.component.html


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title : string = 'Hello World';
}


```

```html

<div class="container">
<h1>
hello, this is the header {{title}}

</h1></div>

```

```css
.container {
    border: 1px solid black;
    padding: 10px;
    width: 80%; /* Set the width to 80% of the viewport width */
    margin: 0 auto; /* Center the container horizontally */
  }
  
  h1 {
    text-align: center;
  }
```

```bash
ng g c components/button
```

let's embed it first, we want to embed it into the header 

I want to pass in the color and tex from the header to the button 

```html


<!-- for the header -->
<div class="container">
<h1>
hello, this is the header {{title}}

<app-button></app-button>

</h1></div>

<!-- for the header -->



<!-- for the button -->

<button class="btn btn-default">click me </button>

<!--  after the change header-->

<div class="container">
<h1>
hello, this is the header {{title}}

<app-button color = "green" text = "this is from the header for the button" ></app-button>

</h1></div>
```


## @Input [ ngStyle ]
we are going to bring something called Input from Angular core 

```html
<p>header works!</p>
<app-button variable1 = "green" variable2 = "Add"></app-button>
<!-- this is reusable for the variables  -->


<button class = "btn"> {{variable1}} and {{variable2}} </button>


<button class = "btn" [ngStyle] = "{'background-color':variable1}"> {{variable2}} </button>
<!-- this will take some quotes surround it -->


```


```TS
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() variable1? : string;
  @Input() variable2? : string;
  //@Input() variable2 : string; Property 'variable2' has no initializer and is not definitely assigned in the constructor.ts(2564)




  ngOnInit(): void {
    
  }

}

```

@Input is a decorator in Angular that allows a component to receive data from its parent component.

Here's an example of how to use @Input in Angular:

In the child component, import the Input decorator from @angular/core:

```ts

import { Component, Input } from '@angular/core';

```

Add the @Input decorator before a property in the child component that you want to receive data from the parent component. For example:

```ts

@Component({
  selector: 'app-child',
  template: '<p>{{ message }}</p>'
})
export class ChildComponent {
  @Input() message: string;
}
```
 In the parent component, use the child component and bind the value to the @Input property.

```ts

@Component({
  selector: 'app-parent',
  template: '<app-child [message]="parentMessage"></app-child>'
})
export class ParentComponent {
  parentMessage = 'Hello from parent component!';
}
```
In this example, the parent component has a parentMessage property that is bound to the message property of the child component using square brackets [].

When the parent component is rendered, it will pass the value of parentMessage to the message property of the child component. The child component can then use the value of message to display the data in its template.

Overall, @Input is a powerful feature in Angular that allows you to pass data between components and create modular, reusable code.

```ts

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Input() text : string;
  @Input() color: string;

  

  constructor(){

  }

  ngOnInit(): void {
    
  }


}
/***
 * 
 * S2564: Property 'text' has no initializer and is not definitely assigned in the constructor.

 * The TypeScript compiler is giving a warning that the text property in the ButtonComponent class has no initializer and is not definitely assigned in the constructor. This means that the value of text may be undefined or null, which can cause errors when the component is used.

To fix this warning, you can either provide an initial value for text or use the ! operator to tell TypeScript that the property will be initialized later and should not be considered as potentially undefined.

Here's an example of initializing the text property with an empty string:
export class ButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void { }

}

export class ButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() color: string;

  constructor() { }

  ngOnInit(): void { }

}

 * /

```


[ngStyle] is a built-in directive in Angular that allows you to dynamically set CSS styles on an HTML element based on some expression.

Here's an example of how to use [ngStyle] to set a background color on a button based on the value of a color property in the component:

css


```html

<button class="btn btn-default" [ngStyle] = "{'background-color' : color}" > {{text}}</button>
```


You can also use object syntax with [ngStyle] to set multiple styles at once based on some condition. Here's an example of how to set the font color and weight of a button based on whether a disabled property in the component is true or false:

Overall, [ngStyle] is a powerful and flexible directive that allows you to create dynamic and responsive styles for your Angular components.




I am gonna get a little bit into events, we are not going to obvious  make this function tye 



## Event  (eventName)   (click)

remember it is (click) not click otherwise the message would not show on console.log()
To ensure that the clickMe() method is called when a button is clicked in an Angular component, it's important to use the correct syntax for binding the click event. Specifically, you should use (click)="clickMe()" instead of click="clickMe()".



```ts

<button class = "btn" [ngStyle] = "{'background-color':variable1}" (click) = "clickMe()"> {{variable2}} </button>
<!-- this will take some quotes surround it -->


<button class="btn btn-default" [ngStyle] = "{'background-color' : color}"  (click) = "onClick()"> {{text}}</button>
```


```ts

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() variable1? : string;
  @Input() variable2? : string;
  //@Input() variable2 : string; Property 'variable2' has no initializer and is not definitely assigned in the constructor.ts(2564)




  ngOnInit(): void {
    
  }

  clickMe(){
    console.log(this.variable2);
    console.log("hey!");
  }
  // obviously we do not want to put this functionality just yet 
  

}


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Input() text! : string;
  @Input() color! : string;

  

  constructor(){

  }

  ngOnInit(): void {
    
  }


  onClick(): void{
    console.log("button is clicked");
  }


}

```

## @Output and new EventEmitter    @Output() something: EventEmitter;   this.something.emit();


EventEmitter is a class in Angular that allows communication between components by emitting events. It provides a way for a child component to emit an event and notify its parent component that some action has occurred.

In Angular, EventEmitter is often used to handle user interactions in a child component, such as button clicks or form submissions, and then pass the data back to the parent component for further processing.

Here's an example of using EventEmitter to interact between a parent component and a child component:

Parent component template:

```html
<app-child (childEvent)="onChildEvent($event)"></app-child>

```

In this example, we are binding to an event named childEvent that is emitted by the app-child component.

Parent component class:


```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (childEvent)="onChildEvent($event)"></app-child>
  `
})
export class ParentComponent {
  onChildEvent(data: any) {
    // handle the event data
  }
}

```

In the parent component, we define a function named onChildEvent() that will handle the event emitted by the child component. When the childEvent is emitted by the child component, the onChildEvent() function is called and passed the event data.

Child component class:


```ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="onClick()">Click me</button>
  `
})
export class ChildComponent {
  @Output() childEvent = new EventEmitter<any>();

  onClick() {
    // emit an event with some data
    this.childEvent.emit('some data');
  }
}

```


In the child component, we define an Output property named childEvent that is an instance of EventEmitter. When the button is clicked, the onClick() function is called, which emits the childEvent event and passes some data.

In summary, EventEmitter allows us to pass data between components by emitting custom events. This makes it easy to communicate between parent and child components and allows us to create flexible, reusable components.





obviously we are not gonna want to put the functionality because this function I want it to become reusable and every button has different purposes 



I want this button to be reusable and every button has a different purpose so it is going to be different 

we are using event emitter to output the events. we use @Output and eventName that we are emitting 

```ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Input() text! : string;
  @Input() color! : string;
  @Output() btnClick = new EventEmitter();

  

  constructor(){

  }

  ngOnInit(): void {
    
  }


  onClick(): void{
    console.log("button is clicked");
    this.btnClick.emit();
  }


}

```
essentially we are just firing off the custom event 

```html
<!-- button component -->

<div class="container">
<h1>
hello, this is the header {{title}}

<app-button color = "green" text = "this is from the header for the button" (btnClick) = "toggleAndTask()" ></app-button>

</h1></div>


```

then we define that in our header, which gets fired off 

```ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Input() text! : string;
  @Input() color! : string;
  @Output() btnClick = new EventEmitter();

  

  constructor(){

  }

  ngOnInit(): void {
    
  }


  onClick(): void{
 
    this.btnClick.emit();
  }


}

```


```html

<button class = "btn" [ngStyle] = "{'background-color':variable1}" (click) = "childComponentClick()"> {{variable2}} </button>
<!-- this will take some quotes surround it -->

<p>header works!</p>
<input type = "text" [(ngModel)] = "parentVariable1" />
<app-button [variable1] = "parentVariable1" variable2 = "Add" (clickOutputEventFromChild) = "eventFromParent()"></app-button>
<!-- we are catching it here and firing off to toggle it -->
<!-- this is reusable for the variables  -->

```


```TS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() variable1? : string;
  @Input() variable2? : string;
  //@Input() variable2 : string; Property 'variable2' has no initializer and is not definitely assigned in the constructor.ts(2564)


  @Output() clickOutputEventFromChild = new EventEmitter();



  ngOnInit(): void {
    
  }

  childComponentClick(){
     this.clickOutputEventFromChild.emit(); // we are emitting it using this name 
  }
  // obviously we do not want to put this functionality just yet 
 // 2 <button class = "btn" [ngStyle] = "{'background-color':variable1}" (click) = "childComponentClick()"> {{variable2}} </button>
 /**
  * The error message indicates that the template file button.component.html is trying to reference a method named childComponentClick() which does not exist in the ButtonComponent class.

To resolve this error, you should make sure that the childComponentClick() method is defined in the ButtonComponent class. You can do this by adding the following code to your ButtonComponent class
  */
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public parentVariable1 : string = "red";


  eventFromParent(){

    console.log("this is from parent");
 

  }

}


```



### Interfaces and mock data 

since we use typescript with angular, we should create a interface and what field should contain entries, 
we should export this so we can bring it into other files 


In TypeScript, interfaces are a powerful feature used to describe the shape or structure of an object. They allow you to define contracts or agreements between different parts of your code, making it easier to ensure that your code works correctly and is consistent.

Here are some common use cases of interfaces in TypeScript:

Defining the shape of an object: You can define an interface to describe the properties and methods of an object. This makes it easier to understand the structure of the object and can help prevent errors.

Enforcing contracts between components: You can use interfaces to enforce contracts between different components in your code. For example, if one component requires another component to implement a certain set of methods, you can define an interface to ensure that the second component meets those requirements.

Simplifying complex types: You can use interfaces to simplify complex types by creating a single interface that describes a group of related properties or methods.

Extending existing types: You can extend an existing type or interface to add new properties or methods. This can be useful when you want to add functionality to an existing object without modifying its original definition.

Overall, interfaces are a key feature of TypeScript that help you write more robust and maintainable code. They enable you to define clear contracts between different parts of your code and ensure that those contracts are enforced at compile time.


task.interface.ts 
```TS
export interface Task {
    id? : number; 
    // why do we need optional? because when we have our forms and we add a task, it is not gong to initially have an id
     // until we save it into the json file 
     text: string;
     day : string;
     reminder: boolean;



}

```

In the given example, we have an interface named "Task" which defines the shape of an object that represents a task. The Task interface has four properties - id, text, day, and reminder.

The 'id' property is optional, denoted by the "?" symbol, which means that this property may or may not be present in the task object. This is because when a user adds a new task, it will not have an id initially until it is saved to the database.

Using an interface to define the Task object allows us to enforce a contract between different parts of our code that consume or produce Task objects. For example, we can use this interface to define the structure of our data models, our component inputs and outputs, and the form input objects.

In the 'tasks.ts' file, we import the Task interface and use it to define an array of Task objects. We can see that each task object in the array conforms to the structure defined by the Task interface. This ensures that the Task objects used in our code are consistent and have the required properties.

Overall, using interfaces in Angular, or any TypeScript project, helps us to write more reliable and maintainable code. By defining the structure of our data using interfaces, we can catch errors at compile-time and ensure that our code is consistent and easy to understand.


tasks.ts
```TS
import { Task } from "./components/task.interface"


// since this is an array  we also want to add the brackets, if this is a single object, we would jist do that 
 
export const TASKS : Task[] =
[
    {
      id: 1,
      text: "Buy groceries",
      day: "Monday",
      reminder: true
    },
    {
      id: 2,
      text: "Call mom",
      day: "Wednesday",
      reminder: false
    },
    {
      id: 3,
      text: "Finish project",
      day: "Friday",
      reminder: true
    },
    {
      id: 4,
      text: "Go for a walk",
      day: "Tuesday",
      reminder: false
    },
    {
      id: 5,
      text: "Pay bills",
      day: "Thursday",
      reminder: true
    }
  ]
  
  
```


we will close it up and generate a new component 

```bash
 ng g c components/tasks 
```


basically the tasks will come from the backend which is our json server 

```bash

ng g c components/task-item 
```


```TS

import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() individualTask?: Task;


 
  constructor(){

  }
  ngOnInit(): void {
    
  }

}


import { Component, OnInit } from '@angular/core';

import { Task } from '../task.interface';
import { TASKS } from 'src/app/tasks';



// let's also bring our interface in because whenever we use that we need to import tasks 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{


  public tasks: Task[] = TASKS;
  // WE should basically be able to loop over that array 


  constructor(){

  }

  ngOnInit(): void {
    
  }

}

```


task.component.html 

```html

<app-task-item *ngFor = "let task of tasks" [individualTask] = "task">

</app-task-item>

```

task-item.component.html 

```html

<p>{{individualTask?.day}}</p>
<!-- 
    <p>{{individualTask.day}}</p>
    src/app/components/task-item/task-item.component.html:1:21 - error TS2532: Object is possibly 'undefined'.

1 <p>{{individualTask.day}}</p>
                   

  src/app/components/task-item/task-item.component.ts:6:16
    6   templateUrl: './task-item.component.html',
                  
    Error occurs in the template of component TaskItemComponent 

The error message "TS2532: Object is possibly 'undefined'" means that the TypeScript compiler is warning you that the value of the individualTask object could be undefined, and therefore accessing its day property could result in an error.

To fix this error, you can use a safe navigation operator (?) in the template to check if individualTask is defined before accessing its day property:

 

This will ensure that the day property is only accessed if individualTask is not undefined.


-->

 

```


```css
.task {
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .task h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .task p {
    font-size: 18px;
    margin-bottom: 0;
  }
  
```


## ng add 
we can use ng add to add packages such as font awesome, clear this up 
app-module.ts will automatically include after the installation 


```bash
ng add @fortawesome/angular-fontawesome


```

```html

<div class = "task">
<h3> {{individualTask?.text}} <fa-icon [icon]="faTimes"> </fa-icon></h3>
<p>{{individualTask?.day}}</p>

```

```ts

import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.interface';

import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() individualTask?: Task;
  faTimes = faTimes;


 
  constructor(){

  }
  ngOnInit(): void {
    
  }

}

```


## Services 

a service is a class that provides a specific functionality or data to the components or other services in an application. Services are used to share data or functionality between different parts of an application. They encapsulate data and behavior that can be used across multiple components and provide a way to organize code and avoid code duplication.

Services can be used for a variety of purposes in an Angular application, such as:

Fetching data from a server using HTTP requests
Storing and sharing application state
Performing calculations or transformations on data
Handling application logic and business rules
Interacting with browser APIs or third-party libraries
To use a service in an Angular component, the component must inject the service using Angular's dependency injection system. This makes the service instance available to the component and allows the component to call the methods and access the properties of the service.

Services can be singleton or non-singleton. Singleton services are created once and shared across the entire application, while non-singleton services are created every time they are injected into a component.

Overall, services play an important role in the architecture of an Angular application by providing a way to modularize code and make it more reusable and maintainable.


One possible metaphor for an Angular service is a concierge in a hotel. Just as a concierge provides a range of services to hotel guests, an Angular service provides a range of functionality to components and other parts of the application.

A hotel concierge can help guests with a variety of tasks, such as booking reservations, arranging transportation, and providing local recommendations. Similarly, an Angular service can perform a variety of tasks, such as handling data storage and retrieval, making HTTP requests to external APIs, and providing shared functionality and utilities to multiple components.

Just as a concierge is available to assist all guests in the hotel, an Angular service is available to all components in the application that need its functionality. And just as a concierge can be specialized in certain areas, such as restaurant recommendations or event planning, an Angular service can be specialized in certain tasks or domains, such as user authentication or data visualization.

Overall, the metaphor of a hotel concierge helps to illustrate the broad range of tasks that an Angular service can perform, as well as its role as a helpful and accessible resource for the rest of the application.






```bash

ng generate service services/task
```


we are gonna keep the interface 


```TS

import { Injectable } from '@angular/core';
import { Task } from '../components/task.interface';
import { TASKS } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  getTasks() : Task[]{
    return TASKS;
  }
}

```



```ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../task.interface';
import { TASKS } from 'src/app/tasks';



// let's also bring our interface in because whenever we use that we need to import tasks 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{


  public tasks: Task[] = [];
  // WE should basically be able to loop over that array 


  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

}

```
usually this is not how you are gonna do it 
you would want to use Observables because you are usually dealing with async data from the server 
we are just brining the file 


In Angular, an interface and a service serve different purposes and have different implementations.

An interface in Angular is a TypeScript feature that defines a contract for the structure of an object. It provides a way to describe the shape of an object, including its properties and methods, but does not contain any implementation code. Interfaces are used to enforce consistency in the structure of objects that are passed around in an application.

On the other hand, a service in Angular is a class that provides a specific functionality or data to the components or other services in an application. Services are used to share data or functionality between different parts of an application. They encapsulate data and behavior that can be used across multiple components and provide a way to organize code and avoid code duplication.

In summary, an interface is a TypeScript feature used to define the structure of an object, while a service is an Angular feature used to provide functionality or data to different parts of an application.





## Observable  --- import { Observable, of } from 'rxjs'; -- of converts an array of objects to observable 


In Angular, an observable is a powerful feature that allows you to handle asynchronous operations and data streams. An observable represents a stream of data that can be processed and consumed over time. Observables are similar to promises in that they allow you to handle asynchronous operations, but they have some important differences.
In addition to handling asynchronous operations, observables in Angular can also be used to handle events, user interactions, and other types of data streams. Observables provide a wide range of operators and methods for processing and transforming data streams, making them a powerful tool for handling complex data flows in your Angular applications.

A promise represents a single value that will be available in the future. When you make a request for data with a promise, you get a single response that contains the requested data. Once the promise is resolved, you cannot receive any additional data from it.

On the other hand, an observable is a stream of data that can produce multiple values over time. This means that you can receive new data from an observable as it becomes available, even after the initial response has been received. Observables can be used to represent real-time data feeds, like stock prices or social media feeds.




One possible metaphor for an observable is a television channel. Just like a television channel streams continuous video content that can be watched in real-time, an observable streams continuous data that can be consumed as it becomes available. Just as you can change the channel to watch different programs, you can subscribe to different observables to receive different types of data streams. And just like you can pause or rewind a television program, you can use operators and methods on an observable to pause, filter, or transform the data stream as needed.







```ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../components/task.interface';
import { TASKS } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  getTasks() : Observable<Task[]>{
    const taskObservable = of(TASKS); // convert TASKS to observable 
    return taskObservable;
  }
}

```

you subscribe to an observable so you can constantly watch it, subscribe(), you can kinda think of this as a promise 
when you have a promise you can do it .then() and then you have an arrow function => 

```ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../task.interface';
import { TASKS } from 'src/app/tasks';



// let's also bring our interface in because whenever we use that we need to import tasks 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{


  public tasks: Task[] = [];
  // WE should basically be able to loop over that array 


  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}

```

the way it works behind the scenes is different 

Observables in Angular can operate in real-time, depending on the source of the data stream. For example, if you're using an observable to represent a real-time data feed, such as stock prices or weather updates, the observable will receive and emit new data in real-time as it becomes available.

However, it's important to note that observables are not limited to real-time data streams. They can also be used to represent and process other types of data streams that don't necessarily operate in real-time, such as user interactions or data fetched from a database. In these cases, the observable will emit data as it becomes available, but the timing of the data emissions may not be in real-time.

It's also worth noting that observables can be used to create hot or cold data streams. Hot observables emit data regardless of whether or not there are any subscribers, while cold observables only emit data when a subscriber is present. This means that the timing and behavior of an observable can vary depending on how it's implemented.



http client module actually returns an observable automatically so we do not even have to do this here  and we will handle it the same way 




### Fake JSON server 

for the backend we use JSON server, it is a full fake API 
we need to have a full CRUD capabilities 


```bash

npm i json-server 
```

package.json -> server 


```json

  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "server" : "json-server --watch db.json port 5000" 
  },
 
```


put db.json in the root 

```json

{
    "tasks": 
    [
        {
          "id": 1,
          "text": "Buy groceries",
          "day": "Monday",
          "reminder": true
        },
        {
          "id": 2,
          "text": "Call mom",
          "day": "Wednesday",
          "reminder": false
        },
        {
          "id": 3,
          "text": "Finish project",
          "day": "Friday",
          "reminder": true
        },
        {
          "id": 4,
          "text": "Go for a walk",
          "day": "Tuesday",
          "reminder": false
        },
        {
          "id": 5,
          "text": "Pay bills",
          "day": "Thursday",
          "reminder": true
        }
      ]
      
}
```

```bash

npm run server
```

 

http://localhost:3000/tasks


## HttpClient  import {HttpClient, HttpHeaders} from '@angular/common/http'


HttpClient is a module provided by Angular that enables you to send HTTP requests to a server to retrieve or submit data. It simplifies the process of making HTTP requests and provides various features, such as request and response handling, interceptors, and error handling.

HttpClient allows you to make requests with different HTTP methods such as GET, POST, PUT, DELETE, PATCH, and more. You can also set request headers, add query parameters, and send data in the request body.

Here's an overview of some of the key features of HttpClient:

Request methods: HttpClient provides a set of methods that correspond to the HTTP methods such as GET, POST, PUT, DELETE, and PATCH. You can use these methods to send requests to a server.

Request options: You can set request options such as headers, query parameters, and body to configure your request.

Response handling: HttpClient returns an Observable that emits the response from the server. You can use operators like map, filter, and catchError to transform the response as needed.

Interceptors: Interceptors allow you to intercept and manipulate HTTP requests and responses. You can use interceptors to modify headers, add authentication tokens, and handle errors.

Error handling: HttpClient provides built-in error handling to catch and handle errors that may occur during a request. You can use the catchError operator to handle errors in the Observable stream.

To use HttpClient, you need to import it into your component or service and inject it into the constructor. You can then use the methods provided by HttpClient to make HTTP requests and handle responses.


let's include the http client, with react you can use fetch api 

```TS

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```



```TS
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../components/task.interface';
import { TASKS } from '../tasks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }


  getTasks() : Observable<Task[]>{
    // const taskObservable = of(TASKS); // convert TASKS to observable 
    // return taskObservable;
    // we no longer use the static data in a ts file above 

    return this.http.get<Task[]>(this.apiUrl);
    
  }
}


```

In the example code provided, HttpClient is used in the TaskService to retrieve data from an external server. The getTasks() method sends an HTTP GET request to the server at the apiUrl endpoint and returns an Observable that emits an array of Task objects. The component that uses this service can then subscribe to the Observable to retrieve the data and use it in the UI.


In reactive programming, when an Observable produces a value, it is said to emit that value. The Observable emits events or values over time, and subscribers can receive and handle those values.

For example, consider an Observable that emits a stream of numbers. Each time the Observable emits a number, it is said to "emit" that number. Subscribers can receive and handle the emitted values, such as by logging them to the console or updating a user interface.



now it comes from our http request to the backend 



### Delete 



```html

<div class = "task">
<h3> {{individualTask?.text}} 
    <fa-icon [icon]="faTimes" [ngStyle] = "{'color': 'red'}" (click) = "(deleteItem)" > </fa-icon></h3>
<p>{{individualTask?.day}}</p>
```

but we also want to pass in the name of the object ask well 
I do not want to do in the item itself, i want to do it by calling the service 

I want that to be in the parent component and we want to emit this event 



```ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.interface';

import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() individualTask?: Task;
  faTimes = faTimes;

  @Output() deleteEventFromChildTask : EventEmitter<Task> = new EventEmitter();


 
  constructor(){

  }
  ngOnInit(): void {
    
  }


  deleteItem(item?: Task): void{
    this.deleteEventFromChildTask.emit(item);
    

  }

}

```


you typically do not need to include the types as the return type but it makes the applicaitons to be more robust 



```TS

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../components/task.interface';
import { TASKS } from '../tasks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }


  getTasks() : Observable<Task[]>{
    // const taskObservable = of(TASKS); // convert TASKS to observable 
    // return taskObservable;
    // we no longer use the static data in a ts file above 

    return this.http.get<Task[]>(this.apiUrl);
    
  }

 deleteTasks(task: Task) : Observable<Task[]>{
  const url = `${this.apiUrl}/${task.id}`;
  return this.http.delete<Task[]>(url);
 }

}

```

```ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../task.interface';
import { TASKS } from 'src/app/tasks';



// let's also bring our interface in because whenever we use that we need to import tasks 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{


  public tasks: Task[] = [];
  // WE should basically be able to loop over that array 


  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  itemTaskFromParent(task: Task){
    console.log("hey");
    this.taskService.deleteTasks(task).subscribe(()=> (this.tasks = this.tasks.filter((t) => t.id! !== task.id )))
    console.log(this.tasks);
  }

}

```


##  Update (dblclick) = "functionName(item)" and HttpHeaders 


(dblclick) is an event binding in Angular that is used to bind a function to the dblclick (double-click) event on an element.

The dblclick event is triggered when the user double-clicks on an element, such as a button, a div, or an image. By using (dblclick) event binding in Angular, we can execute a function in response to a double-click event on an element.

Here's an example of using (dblclick) to bind a function named onDoubleClick() to the dblclick event on a button element:

```html
<button (dblclick)="onDoubleClick()">Double-click me!</button>


```

When the user double-clicks on the button, the onDoubleClick() function will be executed.

Note that (dblclick) is just one of many event bindings available in Angular, which allows us to bind functions to a wide range of events, such as (click), (keyup), (submit), etc.




HttpHeaders is a class in the @angular/common/http package that provides a way to set HTTP headers for an HTTP request.

HTTP headers are metadata associated with an HTTP request or response that provide additional information about the data being sent. Some common examples of headers include Content-Type, which specifies the format of the data being sent, and Authorization, which is used to authenticate the request.

In the context of an Angular application, HttpHeaders is often used to set the Content-Type header when sending data in the request body, such as when making an HTTP POST or PUT request.

Here's an example of using HttpHeaders to set the Content-Type header to application/json:


```ts
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
```


This httpOptions object can then be passed to the HttpClient methods like post() or put() to set the headers for the HTTP request










parent component html 
```html

<app-task-item *ngFor = "let task of tasks" [individualTask] = "task" (deleteEventFromChildTask) = "itemDeleteTaskFromParent(task)"

(updateReminderFromChildComponent)="itemUpdateFromParent(task)"
>

</app-task-item>

```



child component html 
```html


<div class = "task" [ngClass] = "{'green-left': individualTask?.reminder}" (dblclick) = "updateToggle(individualTask)">
<h3> {{individualTask?.text}} 
    <fa-icon [icon]="faTimes" [ngStyle] = "{'color': 'red'}" (click) = "deleteItem(individualTask)" > </fa-icon></h3>
<p>{{individualTask?.day}}</p>


</div>
```

child ts

```ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.interface';

import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() individualTask?: Task;
  faTimes = faTimes;

  @Output() deleteEventFromChildTask : EventEmitter<Task> = new EventEmitter();



  @Output() updateReminderFromChildComponent : EventEmitter<Task> = new EventEmitter();


 
  constructor(){

  }
  ngOnInit(): void {
    
  }


  deleteItem(item?: Task): void{
    console.log("child clicked");
    this.deleteEventFromChildTask.emit(item);
    

  }

  updateToggle(item? : Task) :void{
    console.log("updated child clicked");
    this.updateReminderFromChildComponent.emit();
  }

}


```


child css

```css
.task {
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .task h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .task p {
    font-size: 18px;
    margin-bottom: 0;
  }
  
  .task h3 {
    position: relative;
  }
  
  .task h3 fa-icon {
    position: absolute;
    top: 0;
    right: 0;
  }
  

  .task.green-left {
    border-left: 4px solid green;
  }

```


we want to send headers with content type 


```ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../components/task.interface';
import { TASKS } from '../tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



  

export class TaskService {

  

  private apiUrl = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }


  getTasks() : Observable<Task[]>{
    // const taskObservable = of(TASKS); // convert TASKS to observable 
    // return taskObservable;
    // we no longer use the static data in a ts file above 

    return this.http.get<Task[]>(this.apiUrl);
    
  }

 deleteTasks(task: Task) : Observable<Task>{
  const url = `${this.apiUrl}/${task.id}`;
  return this.http.delete<Task>(url);
 }
 /** The httpOptions constant should be declared inside the @Injectable() decorator, since it is related to the HTTP requests made by the TaskService.

The deleteTasks() and updateTasks() methods should return an Observable<Task> instead of an Observable<Task[]>, since they are returning a single task and not an array of tasks.*/

 updateTasks(task: Task): Observable<Task>{
  const url = `${this.apiUrl}/${task.id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
    
    
    }
  return this.http.put<Task>(url,task,httpOptions);

 }

}

```
parent ts
```ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../task.interface';
import { TASKS } from 'src/app/tasks';



// let's also bring our interface in because whenever we use that we need to import tasks 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{


  public tasks: Task[] = [];
  // WE should basically be able to loop over that array 


  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  itemDeleteTaskFromParent(task: Task){
    console.log("delete");
    this.taskService.deleteTasks(task).subscribe(()=> (this.tasks = this.tasks.filter((t) => t.id! !== task.id )))
    console.log(this.tasks);
  }


  itemUpdateFromParent(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTasks(task).subscribe();
  }

}


```


## Two way data binding [(ngModel)] and (ngSubmit)
#### [] bracket for input () for output    -- ngModel -- FormsModule    
ngModel is not setup by default 

```ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

by doing (ngSubmit) = "" we do not have to do e.preventDefault and etc.

```html
<form class="form-container" (ngSubmit) = "onSubmit()">
    <div class="form-control">
      <label for="text">Task</label>
      <div class="form-control">
        <input type="text" name="text" id="text" placeholder="Add task" [(ngModel)] = "text">
      </div>
    </div>
    
    <div class="form-control">
      <label for="day">Day & Time</label>
      <div class="form-control">
        <input type="text" name="day" id="day" placeholder="Add day" [(ngModel)] = "day">
      </div>
    </div>
    
    <div class="form-control">
      <label for="reminder">Set Reminder</label>
      <div class="form-control">
        <input type="checkbox" name="reminder" id="reminder" [(ngModel)] = "reminder">
        <!-- you have to have a name for the same value  -->
      </div>
    </div>

    {{text}} 

    {{reminder}}
    
    <button type="submit" class="btn btn-blk">Submit</button>
  </form>
  
  
```

```css

.task {
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .task h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .task p {
    font-size: 18px;
    margin-bottom: 0;
  }
  
  .task h3 {
    position: relative;
  }
  
  .task h3 fa-icon {
    position: absolute;
    top: 0;
    right: 0;
  }
  

  .task.green-left {
    border-left: 4px solid green;
  }

```


we will do emit for the parent component 


```ts

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public text: string = "";
  public day: string = "";
  public reminder: boolean = false;
  // I want to create two way data binding 


  @Output() addTaskSubmissionFromChildComponent : EventEmitter<Task> = new EventEmitter();
  

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    console.log("submitted");

    if(!this.text || this.text.trim().length === 0){

      alert("add text");
       return;

    }

    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }


    this.addTaskSubmissionFromChildComponent.emit(newTask);



    this.text = "";
    this.day = "";
    this.reminder = false;


  }

  


}

```

### @Output eventEmitterFromChildComponent : EventEmitter<Interface> = new EventEmitter();
### return this.eventEmitterFromChildComponent.emit();
### <app-tag (eventEmitterFromChildComponent) = "functionInParent($event)"></app-tagg>



```ts

//service 
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../components/task.interface';
import { TASKS } from '../tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



  

export class TaskService {

  

  private apiUrl = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }


  getTasks() : Observable<Task[]>{
    // const taskObservable = of(TASKS); // convert TASKS to observable 
    // return taskObservable;
    // we no longer use the static data in a ts file above 

    return this.http.get<Task[]>(this.apiUrl);
    
  }

 deleteTasks(task: Task) : Observable<Task>{
  const url = `${this.apiUrl}/${task.id}`;
  return this.http.delete<Task>(url);
 }
 /** The httpOptions constant should be declared inside the @Injectable() decorator, since it is related to the HTTP requests made by the TaskService.

The deleteTasks() and updateTasks() methods should return an Observable<Task> instead of an Observable<Task[]>, since they are returning a single task and not an array of tasks.*/

 updateTasks(task: Task): Observable<Task>{
  const url = `${this.apiUrl}/${task.id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
    
    
    }
  return this.http.put<Task>(url,task,httpOptions);

 }


 addTask(task: Task) : Observable<Task>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
    return this.http.post<Task>(this.apiUrl, task, httpOptions);

 }

}


```


we usually pass in money sign event $event 



```ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public text: string = "";
  public day: string = "";
  public reminder: boolean = false;
  // I want to create two way data binding 


  @Output() addTaskSubmissionFromChildComponent : EventEmitter<Task> = new EventEmitter();
  

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    console.log("submitted");

    if(!this.text || this.text.trim().length === 0){

      alert("add text");
       return;

    }

    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }


    this.addTaskSubmissionFromChildComponent.emit(newTask);



    this.text = "";
    this.day = "";
    this.reminder = false;


  }

  


}


```

```html

<app-add-task (addTaskSubmissionFromChildComponent)="functionInParentToAddTask($event)"></app-add-task>

<app-task-item *ngFor = "let task of tasks" [individualTask] = "task" (deleteEventFromChildTask) = "itemDeleteTaskFromParent(task)"

(updateReminderFromChildComponent)="itemUpdateFromParent(task)"
>

</app-task-item>

```

```ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../task.interface';
import { TASKS } from 'src/app/tasks';
import { Observable } from 'rxjs';



// let's also bring our interface in because whenever we use that we need to import tasks 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{


  public tasks: Task[] = [];
  // WE should basically be able to loop over that array 


  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  itemDeleteTaskFromParent(task: Task){
    console.log("delete");
    this.taskService.deleteTasks(task).subscribe(()=> (this.tasks = this.tasks.filter((t) => t.id! !== task.id )))
    console.log(this.tasks);
  }


  itemUpdateFromParent(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTasks(task).subscribe();
  }

  functionInParentToAddTask(task : Task){
    console.log("parent is called");

    this.taskService.addTask(task).subscribe( task => {
      this.tasks.push(task);
    });


  }

}

```


## Subject and attribute = {variable ? 'a' : 'b'}

In Angular, a subject is a type of observable that allows you to multicast a stream of values to multiple subscribers. It acts as both an observable and an observer, which means it can emit values as well as be subscribed to by other observables.

A Subject in Angular can be thought of as a bridge or a proxy between the observable and the observer. It allows you to send values to an observable stream and then have those values received by multiple observers.

Subjects can be useful in situations where you need to share data between components or services in an Angular application. For example, you might have a user authentication service that emits the current user's authentication status. By using a subject, you can allow multiple components in your application to subscribe to the authentication status and react accordingly when it changes.

There are two types of subjects in Angular: BehaviorSubject and ReplaySubject. BehaviorSubject is a subject that always emits the most recent value to new subscribers, while ReplaySubject emits all previous values to new subscribers, as well as the current value.

```ts

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private showAddTask : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask() : void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);

  }

  // fire off when we toggle 
  // whenever we want to subscribe, we do toggle 
  onToggle() : Observable<any>{
    return this.subject.asObservable();

  }



}

```


```ts
// child 
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() text? : string;
  @Input() color? : string;
  //@Input() variable2 : string; Property 'variable2' has no initializer and is not definitely assigned in the constructor.ts(2564)


  @Output() clickOutputEventFromChild = new EventEmitter();



  ngOnInit(): void {
    
  }

  childComponentClick(){
     this.clickOutputEventFromChild.emit(); // we are emitting it using this name 
  }
   
}



// parent 
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public parentVariable1 : string = "red";
  public showAddTask : boolean = true;
  public subscription?: Subscription;

  constructor(private uiService: UiServiceService){

    this.subscription = this.uiService.onToggle().subscribe( value => {
      this.showAddTask = value;
    });

  }



  eventFromParent(){

    console.log("this is from parent");
    this.uiService.toggleAddTask();
 

  }

}


```


```ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../task.interface';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public text: string = "";
  public day: string = "";
  public reminder: boolean = false;
  // I want to create two way data binding 
  public showAddTask : boolean = true;
  private subscription: Subscription;
 
  



  @Output() addTaskSubmissionFromChildComponent : EventEmitter<Task> = new EventEmitter();

  constructor(public uiService : UiServiceService){
    this.subscription = this.uiService!.onToggle().subscribe((value) => {
      this.showAddTask = value;
    })
  }
  

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    console.log("submitted");

    if(!this.text || this.text.trim().length === 0){

      alert("add text");
       return;

    }

    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }


    this.addTaskSubmissionFromChildComponent.emit(newTask);



    this.text = "";
    this.day = "";
    this.reminder = false;


  }

  


}


```


```html
<form class="form-container" *ngIf="showAddTask" (ngSubmit) = "onSubmit()">
    <div class="form-control">
      <label for="text">Task</label>
      <div class="form-control">
        <input type="text" name="text" id="text" placeholder="Add task" [(ngModel)] = "text">
      </div>
    </div>
    
    <div class="form-control">
      <label for="day">Day & Time</label>
      <div class="form-control">
        <input type="text" name="day" id="day" placeholder="Add day" [(ngModel)] = "day">
      </div>
    </div>
    
    <div class="form-control">
      <label for="reminder">Set Reminder</label>
      <div class="form-control">
        <input type="checkbox" name="reminder" id="reminder" [(ngModel)] = "reminder">
        <!-- you have to have a name for the same value  -->
      </div>
    </div>

    {{text}} 

    {{reminder}}
    
    <button type="submit" class="btn btn-blk">Submit</button>
  </form>
  

```


## RouterModule and Route 


Router is a service provided by Angular that allows you to navigate between different components and views in your application. It works by mapping URLs to specific components, so when a user clicks on a link or types in a URL, the router will load the corresponding component.

RouterModule is a module that provides functionality for routing in Angular applications. It provides a set of directives, services, and methods that allow you to define routes and navigate between them.

In the code, the RouterModule is imported along with the Router and then used to define the appRoutes. The appRoutes is an array that defines the routes for the application. In this case, there is only one route defined, which maps to the TasksComponent when the URL path is empty. The forRoot method of the RouterModule is called with the appRoutes and an optional {enableTracing: true} parameter. The enableTracing option enables the router to log its internal events to the console, which can be helpful for debugging purposes.

Overall, the Router and RouterModule are essential components in building Single Page Applications (SPAs) in Angular, allowing you to create a smooth and seamless user experience by enabling navigation between different views within the same page.


Open the app.module.ts file and import the RouterModule and Routes modules from @angular/router:
```ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
```


Define your routes using the Routes type:


```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

```
Add the RouterModule to the imports array of the @NgModule decorator, and call the forRoot() method to configure your routes:

```ts
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

Open the app.component.html file and add links to your routes:

```html
<a routerLink="/">Home</a>
<a routerLink="/about">About</a>

<router-outlet></router-outlet>


```


```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component'

// explain Router
import { RouterModule, Router } from '@angular/router';


// explain below 
const appRoutes = [
  {path : '', component: TasksComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    // explain below 
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


<router-outlet> is an Angular directive that is used to render the component associated with the current URL route. It is part of the Angular Router module and is commonly used in the root component of an Angular application.

When a user navigates to a certain route in the application, the router-outlet displays the corresponding component in the application. It acts as a placeholder that marks the location where the component will be injected into the DOM.



```html
<!-- app.component.html -->
<h1>  this is the main app </h1>


<app-header></app-header>
 

<router-outlet> </router-outlet>
```

we should see the same thing in the provided code snippet, the router-outlet directive is used in the app.component.html file to define the location where the current route's component should be rendered. When a user navigates to a new route, the router-outlet directive will automatically update to render the new component.

Overall, the router-outlet directive plays an important role in Angular's routing system by dynamically rendering components as users navigate through the application.


```bash

ng g c components/about 
```


### a routerLink = "/"


```html


<h1> hello this is the header </h1>
<p>about works!</p>


<a routerLink = "/"> Home Page </a>

```




```ts
 
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public parentVariable1 : string = "red";
  public showAddTask : boolean = true;
  public subscription?: Subscription;


  // Explain to me what is router in this case 
  constructor(private uiService: UiServiceService, private router: Router){

    this.subscription = this.uiService.onToggle().subscribe( value => {
      this.showAddTask = value;
    });

  }



  eventFromParent(){

    console.log("this is from parent");
    this.uiService.toggleAddTask();
 

  }


  //explain to me what this function does 
  hasRoute(route : string){

    return this.router.url == route;
  }

}



```
The router is an Angular service that enables navigation between views (or pages) of the application. It uses the URL to determine the current view and allows the user to navigate to different views by changing the URL. The Router class is imported from the @angular/router module at the beginning of the file, and it is injected into the component's constructor via a private property called router.

The hasRoute function takes a string parameter called route, which represents the URL of a view. It then compares the current URL of the router (this.router.url) with the provided route. If they match, the function returns true, indicating that the current view matches the provided URL; otherwise, it returns false. This function can be used to highlight or activate certain menu items or links based on the current view of the application.

```html

<div class="container">
<p>header works!</p>
<input type = "text" [(ngModel)] = "parentVariable1" />
<app-button *ngIf = "hasRoute('/')" color = "{{showAddTask ? 'red' : 'blue'}}" text = "{{showAddTask ? 'Close' : 'Add'}}" (clickOutputEventFromChild) = "eventFromParent()"></app-button>
 

</div>
```

the condition being checked is whether the hasRoute function returns /, which is the root URL of the application. If the condition is true, the app-button component is included in the DOM, and if it's false, the component is excluded.



This error occurs when Angular router cannot find any matching routes for the current URL segment. In your case, the error message indicates that the router cannot find a route that matches the URL segment 'about'.

To fix this error, you need to define a route in your application that matches the URL segment 'about'. You can define routes in your Angular application using the RouterModule in the @angular/router module.

main.ts:6 ERROR Error: Uncaught (in promise): Error: NG04002: Cannot match any routes. URL Segment: 'about'
Error: NG04002: Cannot match any routes. URL Segment: 'about'
    at ApplyRedirects.noMatchError (router.mjs:3651:16)
#### remember to define your routes = [{path:xxx, component: XXXComponent}] and RouterModule.forRoot(routes, {enableTracing: true}) 
#### it is Routes and RouterModule not Router!