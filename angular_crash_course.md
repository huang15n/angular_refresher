


# Angular Crash course  



Awais Mirza: https://www.youtube.com/watch?v=LA_v8isNp5E skim fast 
Codevolution: https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ skim fast 

freeCodeCamp.org: https://www.youtube.com/watch?v=3qBXWUpoPHo&t=44271s  skim fast 

OctAcademy: https://www.youtube.com/watch?v=CGLdH5ORX-Y    skim fast 

My Lesson: https://www.youtube.com/watch?v=9b9pLgaSQuI long skim fast 11:08:01



## Table of Contents


##### Project Setup and Tooling
Angular provides a command-line interface (CLI) that makes it easy to set up and manage your Angular projects. In this section, you'll learn how to:



## Prequisite 


HTML: the markup language used to structure web pages
CSS: the stylesheet language used to style web pages
TypeScript: the programming language used to write Angular applications
Web APIs: a set of APIs provided by web browsers that allow web applications to access native browser functionality and interact with servers



World Wide Web (WWW): the system of interconnected hypertext documents accessed through the internet
Client/Server architecture: a model for network communication where a client sends requests to a server and the server responds with data
Web Components: a set of web platform APIs that allow for the creation of reusable UI widgets and custom elements
Model-View-Controller (MVC): a software design pattern commonly used in web applications for separating the data (Model), presentation (View), and user interaction logic (Controller) of an application.


####  Core Concepts

Before diving into more advanced topics, it's important to understand the core concepts of Angular. This includes:

Modules: A module is a container for a set of related components, directives, and services. Learn how to create and use modules in your Angular app.
Components: A component is a building block of your Angular app. It represents a part of your UI and is responsible for handling user interactions and rendering data. Learn how to create and use components in your Angular app.
Services: Services are reusable code that provides functionality across different components in your Angular app. Learn how to create and use services in your Angular app.


####  HttpClient Module
The HttpClient module is used to make HTTP requests in your Angular app. In this section, you'll learn how to:

Import and configure the HttpClient module
Make GET, POST, PUT, and DELETE requests
Handle errors and HTTP responses


####  Forms and Dependency Injection

Angular provides a robust form API that allows you to create and validate forms in your Angular app. In this section, you'll learn how to:

Create and use forms in your Angular app
Use dependency injection to manage form dependencies
Validate and handle form input


####  Routing and Navigation
Routing and navigation are important parts of any Angular app. In this section, you'll learn how to:

Configure and use the Angular router
Use route parameters and query parameters
Handle route events and navigation errors



#### Using UI Libraries
Angular provides a number of UI libraries that can help you quickly build and style your Angular app. In this section, you'll learn how to:

Install and use Angular Material
Style your Angular app using Material Design principles
Use Material components and directives in your Angular app



####  Input and Output

Input and output are important ways to communicate between Angular components. In this section, you'll learn how to:

Use input and output properties to pass data between components
Use event emitters to handle user interactions
Understand the component lifecycle and how it relates to input and output

####  Testing
Good code is code that is tested. In this section, you'll learn how to:

Write and run tests for your Angular app
Use Jasmine and Karma for unit testing
Use Protractor for end-to-end testing


####  How to Learn More
There's always more to learn about Angular! In this section, you'll learn how


## Introduction 

Angular is a framework to build client side application which is great for SPAs -- single page application. We get refreshed asynchronously without reloading the whole application without reloading the entire page 

Angular was a huge hit that provides and promotes modular approach, we can have a lot of re-usable code for development quicker and easier of inbuilt capabilities such as validation, angular even allows write unit testable and easily maintainable code with the peace of mind to sit through 

the semantic version means we have a version number x.x.x major.minor.path and angular upgrades twice a year, Google team provides backward compatibility for breaking features 







## Project Setup and Tooling

Text Editor -- VSCode

Install Node.js and npm (Node.js Package Manager) from https://nodejs.org/en/.

Open a terminal or command prompt and run the following command to install the Angular CLI globally:

```bash
npm install -g @angular/cli
```
This will install the Angular CLI (Command Line Interface) globally on your system.

Verify that the Angular CLI is installed by running the following command:

```bash
ng --version
```
This will display the version of Angular and the Angular CLI that are installed on your system.

Create a new Angular project by running the following command:

```bash
ng new my-app
```

This will create a new Angular project with the name my-app.

Change into the new project directory:

```bash
cd my-app
```

Start the development server by running the following command:

```bash
ng serve
```
This will start a local development server and open your application in a web browser at http://localhost:4200.




### Angular CLI (https://angular.io/cli)

#### ng new app_name
"ng new" is an Angular CLI command that creates a new Angular application with a basic project structure and initial files. When you run this command, Angular CLI creates a new directory for your project and generates the following files and folders:

A default project structure with a set of pre-defined folders, such as "src" (for application source code), "node_modules" (for third-party dependencies), and "e2e" (for end-to-end tests).

A set of configuration files, such as "package.json" (for package dependencies and scripts), "angular.json" (for Angular CLI configuration), and "tsconfig.json" (for TypeScript configuration).

A default "app" component with an associated HTML template, CSS stylesheet, and unit test file.

A basic "index.html" file that serves as the main entry point for your application.

Overall, "ng new" provides a convenient way to create a new Angular application from scratch, with a basic project structure and initial files already set up. This can save time and effort compared to creating these files manually.


#### `ng generate` 

`ng generate` is an Angular CLI command used to generate various components, services, modules, and other Angular artifacts that can help speed up the development process. It creates the necessary files and code templates for the desired component or service, and automatically updates other files and configurations as needed.


Schematics: 

```bash
ng generate component my-component

ng generate service my-service

ng generate module my-module

ng generate directive my-directive

ng generate pipe my-pipe

ng generate guard my-guard


```
These commands can be very useful for generating the necessary files and code templates for various types of Angular artifacts, allowing you to quickly get started with developing your application.






#### `ng build` 
`ng build`  is an Angular CLI command used to build an Angular application for production deployment. When you run "ng build", Angular compiles your application's TypeScript code into JavaScript code, and then bundles it with all the necessary assets (HTML, CSS, images, etc.) into a set of static files that can be deployed to a web server.

Here are some of the main things that happen when you run "ng build":

Compilation: Angular compiles your TypeScript code into JavaScript code that can run in a web browser.

Bundling: Angular takes all of your application's JavaScript, CSS, and HTML files and bundles them into a set of optimized files that can be served to users. This includes tree shaking and minification to reduce file size.

Asset copying: Angular copies all of your application's non-code assets (images, fonts, etc.) into the appropriate output directories.

Output generation: Angular generates a set of static files that can be deployed to a web server. These files include the compiled JavaScript code, the bundled assets, and an index.html file that serves as the entry point to your application.

Overall, "ng build" is a critical step in the Angular development process, as it allows you to create a production-ready version of your application that can be deployed to a web server.


#### `ng serve` 
`ng serve` is an Angular CLI command used to run an Angular application locally for development purposes. When you run "ng serve", Angular compiles your application's TypeScript code into JavaScript code, and then serves it to a local web server that can be accessed in a web browser.

Here are some of the main things that happen when you run "ng serve":

Compilation: Angular compiles your TypeScript code into JavaScript code that can run in a web browser.

Asset copying: Angular copies all of your application's non-code assets (images, fonts, etc.) into the appropriate output directories.

Web server setup: Angular sets up a local web server that can serve your application to a web browser. By default, this server runs on port 4200.

Hot module reloading: Angular watches your application's files for changes and automatically reloads the web page in the browser when changes are detected, allowing for a faster development cycle.

Overall, "ng serve" is a useful tool for Angular developers, as it allows you to quickly test and iterate on your application code without the need to manually build and deploy it to a web server.


#### difference between `ng build` and `ng serve` 

"ng build" and "ng serve" are both Angular CLI commands, but they serve different purposes in the Angular development process.

"ng build" is used to create a production-ready version of your Angular application that can be deployed to a web server. It compiles your application's TypeScript code into JavaScript, optimizes and bundles your application's assets, and generates a set of static files that can be served to users.

On the other hand, "ng serve" is used to run your Angular application locally for development purposes. It compiles your application's TypeScript code into JavaScript, serves it to a local web server, and provides hot module reloading to make it easy to iterate on your code.

So, the relationship between "ng build" and "ng serve" is that "ng serve" depends on the output generated by "ng build". When you run "ng serve", Angular compiles your application's TypeScript code and serves it to a local web server, just like it does during a build. However, instead of generating a set of static files that can be deployed to a web server, "ng serve" runs your application from memory, using the output generated by "ng build" as its source.

In summary, "ng build" and "ng serve" are both important tools in the Angular development process, but they serve different purposes. "ng build" is used to create a production-ready version of your application, while "ng serve" is used to run your application locally for development purposes.

#### -dry-run 
The "--dry-run" option is not a command in Angular, but rather a flag that can be used with several Angular CLI commands.

When used with an Angular CLI command, such as "ng generate" or "ng add", the "--dry-run" flag allows you to see what changes would be made to your project without actually modifying any files. This is useful if you want to preview the effects of a command before committing to it.

For example, running "ng generate component my-component --dry-run" would show you the files that would be created if you were to generate a new component called "my-component", but without actually creating those files. Similarly, running "ng add @angular/material --dry-run" would show you the changes that would be made to your project if you were to add the Angular Material library, without actually modifying your project's files.

Overall, the "--dry-run" flag is a helpful tool for previewing the effects of Angular CLI commands before making any changes to your project.

#### Creating new project 

`ng new app_name`

we let angular handle the routing automatically:
Choosing to add Angular routing to your application can be beneficial because it allows you to define multiple views and navigate between them using URLs. This makes it easier to create complex, multi-page applications that are easy to navigate and understand.

With Angular routing, you can define routes for different views or pages in your application, each with its own URL path and associated component. This means that when the user navigates to a different URL, the corresponding component is loaded and displayed on the screen.

Angular routing also provides additional features such as route guards, which allow you to control access to different routes based on user authentication or other criteria, and child routes, which allow you to define nested routes for more complex application structures.

Overall, using Angular routing can help you create more sophisticated and user-friendly applications, and can also make it easier to maintain and update your application over time.







choose scss:
If you choose "SCSS" as your preferred stylesheet format, this means that Angular CLI will generate your application with a default stylesheet format using the Sassy CSS (SCSS) syntax. SCSS is a popular preprocessor for CSS that provides additional features and capabilities beyond standard CSS, such as variables, nesting, and mixins.
Choosing SCSS as your stylesheet format can be beneficial for several reasons. Firstly, SCSS allows you to write more efficient and maintainable CSS code, by enabling you to use variables to store repeated values and nest selectors to organize your code more clearly. Secondly, SCSS provides additional features such as mixins and functions, which can help simplify and streamline your CSS code. Finally, because SCSS is a widely used and well-supported preprocessor for CSS, it has a large community and ecosystem of tools and resources that can help you develop your application more easily and effectively.



## Architecture 
#### Module 
Angular applications follow a modular architecture, where each application is composed of numerous discrete modules, each representing a distinct feature area. The root module, conventionally referred to as the app module, is present in every Angular application. Components and services are the building blocks of each module, contributing to its functionality and cohesiveness.

#### components 

a component is responsible for managing a specific section of the user interface in the web browser. Every Angular application is expected to have a root component, conventionally known as the app component, which serves as the primary entry point for the application. The app component controls the overall layout of the application and coordinates the interactions between other components.


Every component is a child of the root component, and each component has its own HTML template that defines its appearance and layout in the web browser. The corresponding class associated with each component is responsible for managing the logic and behavior of that specific view.


#### Services 

Services, which are essentially classes that hold the business logic of an application, are typically included in modules. These services encapsulate specific tasks or data that can be shared among various components, and can be injected into other services or components as needed.






 Apart from components and services, an Angular module can also include directives, pipes, and other dependencies. To summarize, an Angular application is composed of one or more modules, each of which can contain one or more components and services, as well as other elements such as directives and pipes. Components are responsible for controlling the behavior and appearance of a specific portion of the user interface, and consist of both an HTML template and a corresponding class that defines the logic for that view. Services contain business logic of your application. Modules interact, export and import code and ultimately render the view in the browser. 



## Structure 
When you create a new Angular application using the ng new command, the Angular CLI generates a folder structure for your project. Here's a brief overview of the key folders and files in the default Angular project structure:

e2e/: This folder contains end-to-end (E2E) tests for your application, written using the Protractor testing framework.

node_modules/: This folder contains all the third-party dependencies that your application requires, such as Angular itself, as well as any additional libraries or packages that you install using NPM.

src/: This is the main folder for your application source code, and contains several subfolders:

app/: This folder contains the main application module and components, as well as any additional modules and components that you create. app.module.ts is the root module of our app. 

assets/: This folder contains any static assets that your application requires, such as images, fonts, or JSON files.

environments/: This folder contains configuration files for different application environments, such as development and production.

index.html: This is the main HTML file for your application, and contains the root component that Angular uses to bootstrap your application.

main.ts: This is the main entry point for your application, and contains the code that bootstraps the Angular application module. in the main.ts file it has bootstrapModule(AppModule) for the kickstarter. 


styles.scss: This is the main stylesheet file for your application, written in SCSS syntax.

test.ts: This is the main entry point for your application tests, and contains the configuration for running your application tests.

angular.json: This file contains configuration settings for the Angular CLI, such as build options, project settings, and application defaults. These are nothing but libraries and module that are required for your angular application to work. 

package.json: This file contains metadata about your application, as well as dependencies and scripts that can be used to build, test, and run your application.

tsconfig.json: This file contains configuration settings for the TypeScript compiler, such as compilation options, paths to source files, and settings for third-party libraries.

tslint.json: This file contains configuration settings for the TSLint code linter, such as rules for code formatting, naming conventions, and code quality.



click on integerated view folder run `ng new app_name` and then `ng serve` will actually run the webpack, explain the flow of execution. 





## Component 


          +-----------------------------------------+
          |               Angular Component           |
          +-----------------------------------------+
          |                Meta Data                 |
          |               (Component                |
          |             Decorator Info)              |
          +----------------+------------------------+
          |   Template     |         Class           |
          |  (View + HTML) |   (Code, Data & Method) |
          +----------------+------------------------+





As you can see, a component in Angular consists of three main parts:

Meta Data: This includes information about the component itself, such as whether it is a component or just a regular Angular class. This metadata is defined using a decorator, which is a function that provides information about the class attached to it. In the case of a component, we use the @Component decorator.

Template: This is the view of the component, which is defined using HTML and other Angular-specific syntax. It is responsible for rendering the component on the screen.

Class: This is the TypeScript code that defines the behavior and data of the component. It includes properties, methods, and other logic that can be used to interact with the template and other parts of the component.

```ts
import { Component } from '@angular/core';

// The @Component decorator is used to attach metadata to the AppComponent class,
// indicating that it is a component and providing information about how it should be used.
@Component({
  selector: 'app-root',
  // The selector defines the HTML tag that can be used to represent this component.
  // In this case, the component can be used in HTML as <app-root></app-root>.

  templateUrl: './app.component.html',
  // The templateUrl property points to an HTML file that represents the view for this component.

  styleUrls: ['./app.component.scss']
  // The styleUrls property points to a CSS file that provides styles for this component.
})
export class AppComponent {
  // This is the main class for the component.

  title = 'myapp';
  // A simple property that can be used in the component's view to display the title.
}


```

To create a new component, you can use the Angular CLI command `ng g c name`. This will generate a new component with the specified name, and the corresponding files, including the name.component.xx file, will be created.


every time when you create a new component, your app should be aware of it. so in the app module file, we import the component and then add it to our declarations array, this array which is the declaration array contains all the components used by the application. 


```ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


our angular app has only one root component and other components will fall under this app component 

```html

<app-test></app-test>




```



### Selectors 


There are three methods for defining selectors in web development. The first method involves using the CSS selector syntax to specify the element type, such as selector: 'app-tag-name', which is used to target elements that have the tag name `<app-tag-name>`.

The second method utilizes the class attribute to identify elements, such as `<div class="app-tag-name"></div>`. This approach allows for the selection of elements with a specific class name, which can be useful for applying styling or targeting specific components.

The third method employs the use of attribute selectors, which is achieved through the syntax `selector: '[app-tag-name]'`. This technique allows developers to select elements based on their attributes, such as `<div app-tag-name></div>`


Element selectors are used to identify components by their custom element name, which is usually in the form of `<app-component-name></app-component-name>`.

Attribute selectors are used to identify components by their attributes, which is usually in the form of `<div app-component-name></div>`.

Class selectors are used to identify components by their CSS class name, which is usually in the form of `<div class="app-component-name"></div>`.

In your second example, `<div class="app-test"></div>`, you are using a class selector to identify an Angular component. This is a valid way to identify an Angular component using a class selector, but it requires additional configuration in the component definition to specify that the component can be used with a class selector.

By default, Angular components are only available using element selectors, unless they have been specifically configured to be available using attribute or class selectors. Therefore, in order to use a component with a class selector, you need to add the selector property to the component definition and set its value to the class name, like this:.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

}

```


```html
<app-test></app-test>

<div class="app-test"></div>

<div app-test> </div>

```

It is possible to define the HTML template directly within the component file instead of referencing an external file using the template property instead of the templateUrl property. By enclosing the HTML code within backticks, we can write multi-line HTML templates inline. We can see databinding easily and we do not have to jump between html and typescript file everytime 
In addition to inline HTML templates, we can also define inline CSS styles within the component file using the styles property. This property is an array that can contain multiple lines of CSS code enclosed within backticks. By specifying inline styles, we can encapsulate the component's styles and avoid polluting the global CSS scope.


```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  template: `<h1> Hello </h1>
  `,
  styles: [`
  h1{
    color: green;
  }`]
  // 
})
export class TestComponent {

}

```


## interpolation {{}}


The {{}} syntax in Angular is known as interpolation, and it is used to bind a component property or expression to a template. In the context of the given code snippet, the {{variable}} syntax binds the variable property of the TestComponent class to the h1 element of the component's template. Interpolation is the simplest way to establish a binding between a variable in the component and the template. However, it's important to note that interpolation cannot be used to perform assignments or access JavaScript attributes directly. It cannot be used to set or modify data in the component, nor can it be used to access or modify the DOM or browser properties directly.


```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  // add comment line by line from template to explain the string interpolation 
  template: `
  <h1> {{variable}} </h1> <!-- This interpolates the value of the 'variable' property of the component, which is 'hey'. -->
  <h2> {{ 4 * 2 + 2}} </h2> <!-- This evaluates the expression '4 * 2 + 2', which is 10, and interpolates the result. -->
  <h3> {{ variable + ' Eddie'}}</h3> <!-- This concatenates the string 'variable' with the string ' Eddie' and interpolates the resulting string. -->
  <h3> {{ variable.length}}</h3> <!-- This retrieves the length property of the 'variable' string and interpolates the resulting number. -->
  <h3> {{ variable.toUpperCase()}}</h3> <!-- This calls the toUpperCase() method on the 'variable' string and interpolates the resulting uppercase string. -->
  <h4> {{getVariable()}} </h4> <!-- This calls the getVariable() method of the component and interpolates the resulting string. -->
  <!-- <h4> {{variable = 4}}</h4> --> <!-- This is not valid syntax for interpolation. You cannot assign a value to a variable in an interpolation expression. -->
  <!-- <h4> {{window.location.href}}</h4> --> <!-- This does not work because the window object is not accessible in the template. -->
  <h4> {{currentURL}}</h4> <!-- This works because 'currentURL' is a property of the component and has been assigned the value of 'window.location.href' in the component's constructor. -->
`,

  styles: [`
  h1{
    color: red;
  }`]
  // 
})
export class TestComponent {

  public variable: string = "hey";

  public getVariable() : string{
    return "this is a method return a string";

  }

}


```


## property binding 


In HTML, an attribute is a value assigned to an element in the form of a key-value pair. For example, the class attribute in an HTML element can be used to assign a CSS class to that element.

On the other hand, a DOM (Document Object Model) property is a value that is directly associated with a DOM object. For example, the classList property of an HTML element can be used to retrieve or modify the CSS classes associated with that element.

The key difference between HTML attributes and DOM properties is that attributes are specified in the HTML markup and are used to set initial values for an element. Once the page has been loaded, these attributes can be accessed and modified using the corresponding DOM properties. In some cases, modifying a DOM property may not update the corresponding HTML attribute.


###### in chrome console, type in $0.getAttribute('value') or $0.value 
To get the value of an input element using $0.getAttribute("value") in the browser console, you need to first select the input element in the Elements tab of the browser developer tools and then execute the code in the console.

Attributes and properties are two different things in web development. Attributes are defined in HTML, while properties are defined in the Document Object Model (DOM). When an HTML element is parsed, its attributes initialize corresponding properties in the DOM, but after initialization, attribute values cannot be changed, while property values can be changed dynamically.

In Angular, we use property binding to bind properties of DOM elements to component properties. This allows us to dynamically update the DOM based on changes to component properties. By binding to properties instead of attributes, we can take advantage of the full power of the DOM and manipulate elements in real-time, without being constrained by the limitations of static attribute values.

### [id] = value [disabled] = "variable"  [style.color] = "variable"

```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  // add comment line by line from template to explain property binding
  template:  `<!-- Bind the value of the 'id' attribute to the 'variable' property using property binding syntax -->
  <input type="text" value="Eddie" [id]="variable">

  <!-- Bind the value of the 'id' attribute to the 'variable' property using interpolation syntax -->
  <input type="text" value="Eddie" id="{{variable}}">
  

`,
  // <input type = "text" value = "Eddie" {{id}} = "variable"> main.ts:7 DOMException: Failed to execute 'setAttribute' on 'Element': '{{id}}' is not a valid attribute name.
  /**
   * t appears that you are trying to use string interpolation ({{id}}) to dynamically set the name of the attribute on the <input> element. However, attribute names cannot be dynamic and must be a valid string literal.

To fix this error, you need to change the attribute name to a valid string literal. If you want to dynamically set the value of the attribute, you can use property binding instead of attribute binding. Here's an example:
   */

  styles: [`
  #id{
    background-color: red;
  }`]
  // 
})
export class TestComponent {

  public variable : string = "hello";
 

}

```



we can see the id is set to the variable value anyways, why do we need property binding? there is a limitation to the interpolation, it can only work with string values, there are sometimes scenarios we need to work with boolean values too. 

```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  template:  ` 
    <!-- This input field is still disabled even though `disabled` is set to "false" because the value of `disabled` should be a boolean, not a string. -->
    <input type="text" value="Eddie" [id]="variable" disabled="false">
   
    <!-- This input field is still disabled because the value of `disabled` should be a boolean, not an interpolated string. -->
    <input type="text" value="Eddie" [id]="variable" disabled={{false}}>
   
    <!-- This input field is enabled because the `disabled` property is bound to a boolean `false` using property binding. -->
    <input type="text" value="Eddie" [id]="variable" [disabled]=false>

    <!-- This input field is enabled because the `disabled` property is bound to a boolean `false` using property binding with quotes. -->
    <input type="text" value="Eddie" [id]="variable" [disabled]="false">

    <!-- This input field is disabled because the `disabled` property is bound to a boolean variable `isDisabled` using property binding. -->
    <input type="text" value="Eddie" [id]="variable" [disabled]=isDisabled>

    <!-- This input field is disabled because the `disabled` property is bound to a boolean variable `isDisabled` using property binding with quotes. -->
    <input type="text" value="Eddie" [id]="variable" [disabled]="isDisabled">
  `,
  styles: [``]
})
export class TestComponent {
  public variable: string = "hello";
  public isDisabled: boolean = true;
}

```


###### bind-propertyName = "variable" --- Deprecated 

the bind-propertyName syntax is a shorthand way of using property binding.

The bind-propertyName syntax can be used for any property that can be bound using the standard property binding syntax. Here are some common examples:

bind-class: Used to bind a CSS class to an element. For example: `<div [class.my-class]="isTrue"></div>`
bind-style: Used to bind a CSS style to an element. For example: `<div [style.color]="'red'"></div>`
bind-value: Used to bind the value of an input element. For example: `<input [value]="myValue">`
However, it's worth noting that the bind-propertyName syntax is now deprecated and will be removed in a future version of Angular. It's recommended to use the standard property binding syntax instead


```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  // add comment line by line from template to explain property binding
  template:  ` 
 <input type="text" value="Eddie" [id]="variable" bind-disabled = "isDisabled">
 
 
  

`,
 
  styles: [``]
 
})
export class TestComponent {

  public variable : string = "hello";
  public isDisabled : boolean = true;
 

}


``` 


### Class binding  [class] = "variable" [class.ClassName] ="condition<true/false>" [ngClass] = "classObjectWithMultipleClass"

Class binding in Angular is a way to apply CSS classes to an HTML element based on certain conditions, variables or class objects.

1. [class] = "variable": The class binding using [class] allows to set a single class to an element based on the value of a variable. If the variable is truthy, the class is added to the element, and if it's falsy, the class is removed.

```html
<button [class.active]="isActive">Click me</button>

```
Here, the class 'active' will be added to the button element if the variable 'isActive' is truthy.

2. [class.ClassName] = "condition<true/false>": This type of class binding allows to add or remove a CSS class from an element based on a true/false condition.

```html

<button [class.disabled]="isDisabled">Click me</button>

```
Here, the class 'disabled' will be added to the button element if the 'isDisabled' variable is true.


3. [ngClass] = "classObjectWithMultipleClass": This type of class binding allows to set multiple classes to an element based on the values of a class object.


```html

<div [ngClass]="{ 'error': isError, 'warning': isWarning, 'info': isInfo }">Alert message!</div>

```

Here, the classes 'error', 'warning' or 'info' will be added to the div element based on the values of the variables 'isError', 'isWarning' and 'isInfo' respectively



```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  // add comment line by line from template to explain property binding
  template:  ` 
  <!-- my-component.component.html -->
  <h1 class="text-success">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
  <h1 [class]="cssClass1">Etiam at risus euismod, tincidunt nisi eu, viverra felis.</h1>
  <h2 class="text-danger">Duis bibendum sapien non enim consectetur aliquam.</h2>
 <h2 [class.text-danger]="hasError">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu libero sem.</h2>
<h3 class="text-special">Praesent laoreet quam eget nisl consectetur, sed fermentum eros fermentum.</h3>
<h3 [ngClass]="classObject">Vivamus bibendum quam sed velit consectetur, vel pretium arcu gravida.</h3>
  

`,
 
  styles: [`
  .text-success {
    color: green;
  }
  
  .text-danger {
    color: red;
  }
  
  .text-special {
    font-weight: bold;
    text-decoration: underline;
  }
  
  `]
 
})
export class TestComponent {

   public cssClass1: string = "text-success";
   public hasError: boolean = false;
   public isSpecial: boolean = true;
   // this works fine when you want to conditionally apply a single class 

   // if we want to apply multiple class, angular provides ngClass directive , a directive 
   // is nothing but a custom html attribute 

   public classObject : object; 

  //  public classObject : object = {
  //    "text-success" : !this.hasError, 
  //    "text-danger" : this.hasError, 
  //    "text-sepcial" : this.isSpecial,



  //  }
   //By initializing classObject in the constructor, it will use the initialized values of hasError and isSpecial instead of undefined.
 
   constructor(){
    this.classObject = {
      "text-success" : !this.hasError, 
      "text-danger" : this.hasError, 
      "text-sepcial" : this.isSpecial,
  
  
  
    };
   }
     

}

```


1. [class] binding:
This is a one-way binding syntax used to bind a property of the component to a CSS class. In this code, the cssClass1 property is bound to the class attribute of the h1 element.

2. [class.class-name] binding:
This is also a one-way binding syntax used to bind a boolean property of the component to a CSS class. In this code, the hasError property is bound to the text-danger class of the h2 element. If hasError is true, the class is added, otherwise, it is removed.

3. [ngClass] binding:
This is a two-way binding syntax used to bind an object of CSS classes and their corresponding boolean conditions to the class attribute of an HTML element. In this code, the classObject property of the component is bound to the ngClass directive of the h3 element. The classObject is an object that contains CSS class names as keys and boolean expressions as values. If the expression is true, the class is added to the element, otherwise, it is removed.

By using these class binding concepts, we can apply or remove CSS classes dynamically based on certain conditions, which makes our code more flexible and maintainable.




### Sytle binding  [style.attributeName] = "variable" [style.attributeName] = "variable ? 'value1' : 'value2'" 

 
style binding is a feature similar to class binding that allows you to dynamically set styles on an element based on a component's property values. This is done using the [style] attribute with a property binding syntax.

For example, suppose you have a component with a property isActive that is either true or false. You could use style binding to set the background color of an element to green when isActive is true, and red when it is false:

```html

<div [style.background-color]="isActive ? 'green' : 'red'">Some content</div>

```


Style binding can also be used to set other style properties such as font-size, width, height, etc. Additionally, you can use style binding to apply styles conditionally based on multiple component property values, by using logical operators such as && and ||.

Style binding is a powerful feature of Angular that allows you to create dynamic, responsive UIs that can adapt to changes in component state

```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  // add comment line by line from template to explain property binding
  template:  `<h1 [style.color] = "variableForStyleColor"> hello {{variable}}</h1> 
  <h1 [style.color] = "errorOrNot ? 'red' : 'green'"> hello {{variable}}</h1> 
  
   `,
 
  styles: [` `]
 
})
export class TestComponent {

  public variable : string = "world";
  public variableForStyleColor = "blue";
  public errorOrNot: boolean  = true;
 

 
     

}

```


to allow multiple properties at the same time 
[ngStyle] is an Angular directive that allows you to dynamically set CSS styles on an HTML element. This means you can apply styles to an element based on variables or expressions in your component's TypeScript code.

Here's an example of how to use [ngStyle]:

In your component's HTML template, you would use the [ngStyle] directive to apply styles to an element. For example:

 


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  // add comment line by line from template to explain property binding
  template:  `<h1 [ngStyle] = "{'color': errorOrNot ? 'red' : variableForStyleColor}"> hello {{variable}}</h1> 
 
   `,
 
  styles: [` `]
 
})
export class TestComponent {

  public variable : string = "world";
  public variableForStyleColor = "blue";
  public errorOrNot: boolean  = false;
 

 
     

}

```



### Event binding (eventName)="functionName()"   (eventName)="functionName($event)"  
Event binding in Angular is a technique used to respond to user events such as clicks, mouse movements, keyboard input, and other DOM events. With event binding, you can attach event listeners to HTML elements and then execute code in your component's TypeScript code when those events occur.

```

+--------------------------------------------------------+
|                   Angular Component                     |
|                                                        |
| +------------------------+           +----------------+ |
| |        Template        |           |     Class      | |
| |                        |           |                | |
| | +--------------------+ |           | +------------+ | |
| | |      Data Bindings  |||           ||| Properties | | |
| | +--------------------+ |           | +------------+ | |
| |                        |           |                | |
| | +--------------------+ |           | +------------+ | |
| | |       Event         |||           |||  Methods   | | |
| | +--------------------+ |           | +------------+ | |
| |                        |           |                | |
| +------------------------+           +----------------+ |
+--------------------------------------------------------+


```
At the top is the Angular component itself, which is composed of a template and a class.

The template is where you define the HTML markup and Angular directives that render the component's UI. The template also contains data bindings and event bindings, which connect the UI to the properties and methods in the component's class.

The class contains the component's business logic, properties, and methods. Properties are variables that store data used by the component, and methods are functions that perform tasks or calculations.

The data bindings in the template allow you to bind properties in the component's class to elements in the UI. This means that when the value of a property in the class changes, the corresponding element in the UI is automatically updated to reflect the new value.

Similarly, the event bindings in the template allow you to bind UI events (such as clicks or keystrokes) to methods in the component's class. When the event is triggered, the corresponding method in the class is called, allowing you to perform custom logic or update properties as needed.

Overall, the template and class work together to create a fully functional Angular component. The template defines the component's UI and connects it to the class, which contains the logic and data needed to make the component work.


```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  // add comment line by line from template to explain property binding
  template:  `<button (click) = "functionCallForClick()"> click me </button> 
  <p> {{greeting}}</p>
 
   `,
 
  styles: [` `]
 
})
export class TestComponent {

  public greeting : string = "";

  public functionCallForClick() : void{

    this.greeting = "you clicked me ";
    console.log(this.greeting);

  }
 

 
     

}

```


the $event object is a special object that contains information about the event that was triggered.

When you use event binding in Angular, you can pass the $event object to the method that is called when the event is triggered. For example, consider this event binding


Inside the  method, you can access properties and methods of the $event object to get information about the event that was triggered. For example, you might use the target property to get a reference to the element that triggered the event, or the preventDefault() method to prevent the default behavior of the event.

Overall, the $event object in Angular is a useful tool for working with events and getting information about how the user is interacting with your application.



```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  // add comment line by line from template to explain property binding
  template:  `<button (click) = "functionCallForClick($event)"> click me </button> 
  <button (click) = "greeting = 'greeting from Eddie'"> click me </button> 
  <p> {{greeting}}</p>
 
   `,
 
  styles: [` `]
 
})
export class TestComponent {

  public greeting : string = "";

  public functionCallForClick(event: Event) : void{

    this.greeting = event.type; // this is a click event 
    console.log(event);  
    // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

  }
 

 
     

}


```




### Template reference variables #templateReferenceVariableName 
### (eventName) = "functionName(argument: HTMLInputElement) 


A template reference variable is a way to give a name to an element in your template so that you can refer to it in your component class.

To create a template reference variable, you use the # symbol followed by the variable name to assign it to an element or directive in your template. Template reference variables are a useful tool in Angular for creating more complex interactions between your template and component class, allowing you to access and manipulate elements and directives in your template from your component logic.



##### note we need to pass the reference itself as the argument instead of the value poperty 


for example we want to pass in an input value to the event method 



```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  template:  ` <input type = "text" #myTemplateReferenceVariableValueFromInput> 
  <button (click) = "functionCallForClick(myTemplateReferenceVariableValueFromInput)"> click me </button> 
 
  <p> {{myTemplateReferenceVariableValueFromInput.value}} </p>
 
   `,
 
  styles: [` `]
 
})
export class TestComponent {

 
  public functionCallForClick(argument: HTMLInputElement) : void{
    console.log(argument);

 
  }
 

 
     

}


```



a template reference variable is a way to give a name to an element or directive in your template so that you can refer to it in your component class. You create a template reference variable by using the # symbol followed by the variable name and assigning it to an element or directive in your template.

Once you have created a template reference variable, you can refer to it in your component class using the variable name. This allows you to access the element or directive and its properties and methods in your component class, which can be useful for interacting with the template and manipulating the DOM.

Overall, template reference variables are a powerful tool in Angular that allow you to create more dynamic and interactive templates by giving you access to the elements and directives in your template from your component class.



### Two way binding import FormsModule -- imports: [FormsModule] [(ngModel)] = "variable" -- banana in the box


Two-way binding is a powerful feature that allows you to synchronize data between your component class and your template in real-time.

With two-way binding, changes to a value in the template are automatically propagated back to the component class, and vice versa. This means that you can bind a property of an element in your template to a property in your component class, and changes to either property are immediately reflected in the other.
```ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Two-way binding is achieved using the [(ngModel)] directive. This directive is a combination of the property binding syntax [ngModel] and the event binding syntax (ngModelChange). By using [(ngModel)], you can bind the value of an input element in your template to a property in your component class, and changes to either the input element or the component property are automatically propagated to the other.



Property Binding, Template Reference Variables, and Two-Way Binding are three different ways to interact with and manipulate data in Angular. Here's a brief explanation of each:



1. Property Binding: Property Binding is a one-way data binding technique that allows you to set the value of a property of a directive, component or element in your template. You use the square brackets syntax [] to bind a component property to a template expression. It is used to bind the value of a component property to an HTML element property. For example:
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<p>Welcome, {{ user.name }}!</p>',
})
export class UserComponent {
  user = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
}


```

In the example above, we use Property Binding to bind the title property of the AppComponent class to an HTML paragraph element and the imageURL property to the src attribute of an HTML image element.



2. Template Reference Variables: Template reference variables are a way to access an element or component instance from within your template. You use the hash symbol # to create a reference to an element or component in your template. Template reference variables are used to perform tasks like getting the value of an input field or calling a component method. For example:

```ts
<!--app.component.html-->
<input #myInput type="text" />
<button (click)="logInput(myInput.value)">Log Input</button>

<!--app.component.ts-->
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logInput(value: string) {
    console.log(value);
  }
}

```
In the example above, we use a template reference variable #myInput to reference the input element in the template. We then use the (click) event binding to call the logInput method in our component, passing in the value of the input element as an argument.






3. Two-Way Binding: Two-way binding is a combination of Property Binding and Event Binding. It allows you to bind the value of an input field to a component property and also update the input field with the updated value of the property. You use the [(ngModel)] directive to create a two-way binding. For example:


```ts


<!--app.component.html-->
<input [(ngModel)]="name" type="text" />
<p>Your name is: {{ name }}</p>

<!--app.component.ts-->
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'John Doe';
}

```
In the example above, we use Two-Way Binding to bind the value of the input element to the name property of the AppComponent class and also display the value of the name property in an HTML paragraph element. Any changes made to the input field will automatically update the value of the name property and vice versa.

In general, use Property Binding when you need to set the value of a property of an element or component in your template. Use Template Reference Variables when you need to reference an element or component instance from within your template. Use Two-Way Binding when you need to update the value of an input field and the corresponding component property in real-time.



```

View |||| Data Binding |||| Class
    ||||              ||||
    ||||    Event     ||||
    ||||   Binding    ||||
    ||||              ||||
    ||||<------------>||||

```

Two-way binding, property binding, and template reference variables are different ways to achieve data binding in Angular, but they have some differences in how they work and how they are used.

Two-way binding allows you to bind a property in the component class to a form element in the template, and automatically update the component property when the form element value changes, and vice versa. Two-way binding is achieved using the [(ngModel)] directive in Angular.

```ts

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-test, .app-test, [app-test]',
  template: `
    <input type="text" [(ngModel)] = "variabletwoWayBinding" >
    <p>{{ variabletwoWayBinding }}</p>
  `,
  styles: []
})
export class TestComponent {
  public variabletwoWayBinding: string = '';

}

```

Property binding allows you to set the value of a property in the component class to a value in the template. Property binding is achieved using the [property]="value" syntax in Angular, where property is the name of the property in the component class, and value is the value that is being bound to the property.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  template: `
    <input type="text" [value]="variablePropertyBinding" (input)="inputChange($event.target?.value)">
    <p>{{ variablePropertyBinding }}</p>
  `,
  styles: []
})
export class TestComponent {
  public variablePropertyBinding: string = '';

  public inputChange(value?: string): void {
    this.variablePropertyBinding = value ?? '';
  }
}


```

Template reference variables allow you to reference an element in the template and access its properties and methods from the component class. Template reference variables are created using the #variableName syntax in the template, where variableName is the name of the variable that you want to create. You can then access the element using the ViewChild decorator in the component class.

```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test, .app-test, [app-test]',
  template: `
    <input type="text" #templateReferenceVariable [value]="variablePropertyBinding" (input)="inputChange(templateReferenceVariable.value)">
    <p>{{ variablePropertyBinding }}</p>
  `,
  styles: []
})
export class TestComponent {
  public variablePropertyBinding: string = '';

  public inputChange(value?: string): void {
    this.variablePropertyBinding = value ?? '';
  }
}

```

In summary, two-way binding is used to bind a property in the component class to a form element, while property binding is used to set the value of a property in the component class to a value in the template. Template reference variables allow you to reference an element in the template and access its properties and methods from the component class.


## structural directives 

add or remove html elements 


### *ngIf = " condition; else #templateId" and <ng-template #templateId>
### *ngIf = "condition; then #templateId1; else tempalteId2"
In Angular, the *ngIf directive is used to conditionally render elements based on a given expression.
The syntax for *ngIf is as follows:


```ts
*ngIf="expression"

```

Here, the expression is evaluated to a boolean value, and if it's true, the element is rendered. If it's false, the element is not rendered.

The else keyword can be used along with *ngIf to render a different template when the condition is false. The syntax for *ngIf with else is as follows:

```ts
*ngIf="expression; else templateName"


```
Here, templateName is the name of the template that should be rendered when the expression is false. The templateName should be defined using the ng-template tag with a # prefix, like this:

```html

<ng-template #templateName>
  <!-- Template content goes here -->
</ng-template>
```
The # before templateName creates a template reference variable that can be used to refer to the template in the *ngIf directive.


ng-template is a special Angular directive that is used to define a template that can be referenced and reused in different parts of your application.

In general, you would use ng-template when you need to define a template that can be reused multiple times within the same component or across multiple components.

Here are some scenarios where you might use ng-template:

When using structural directives like *ngIf or *ngFor, you can define an ng-template that contains the content to be rendered when the condition is true or when iterating over a collection.

When defining custom components, you can use ng-template to define the content that will be projected into the component using the ng-content directive.

When using a component that requires a specific layout or content structure, you can define an ng-template with the required structure, and then pass that template as input to the component.

On the other hand, div is a basic HTML element that is used to define a container for other elements or content. You would use div when you need to group or structure other elements, but you don't need to define a separate template that can be reused or referenced.

Here are some scenarios where you might use div:

When defining the layout or structure of a page, you can use div elements to group related elements and apply styles or positioning.

When defining the content of a component, you can use div elements to group related elements or apply styles.

When working with dynamic content, you can use div elements to define placeholders or containers that will be filled with content at runtime.

In summary, ng-template is used when you need to define a reusable template, while div is used for grouping elements or defining layout and structure.


```ts

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-test, .app-test, [app-test]',
  template: `
  <h2 *ngIf="variable; else templateId"> This is *ngIf= "variable; else templateId" </h2> 
  <ng-template #templateId>

  <h2> this is else templateId showing when it is false </h2> 
  </ng-template> 

  `,
  styles: []
})
export class TestComponent {
  public variable: boolean = false;

}

```

the *ngIf directive is used to conditionally render elements based on a given expression. You can use the *ngIf directive with then and else clauses to render different templates depending on the result of the expression.

The syntax for *ngIf with then and else clauses is as follows:
```ts

*ngIf="expression; then templateName1 else templateName2"

```

Here, expression is a boolean expression that is evaluated to determine whether to render templateName1 or templateName2. If expression is true, templateName1 is rendered; otherwise, templateName2 is rendered.

Both templateName1 and templateName2 should be defined using the ng-template tag with a # prefix, like this:

```html

<ng-template #templateName1>
  <!-- Template content goes here -->
</ng-template>

<ng-template #templateName2>
  <!-- Template content goes here -->
</ng-template>
```


The # sign in Angular is used to create a template reference variable.

A template reference variable is a reference to an element or component in a template that can be used to access that element or component in the component's TypeScript code.



```ts

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-test, .app-test, [app-test]',
  template: `
  <h2 *ngIf="variable; then templateId1 else templateId2"> This is *ngIf= "variable; else templateId" </h2> 
  <ng-template #templateId1>

  <h2> then block </h2> 
  </ng-template> 


  <ng-template #templateId2>

  <h2> else block</h2> 
  </ng-template> 


  `,
  styles: []
})
export class TestComponent {
  public variable: boolean = false;

}

```


### [ngSwitch] ="variable" *ngSwitchCase = "value" *ngSwitchDefault

ngSwitch is a directive in Angular that allows you to conditionally render content based on a set of possible values. It works by comparing the expression provided to the directive to a set of ngSwitchCase expressions. If the expression matches one of the ngSwitchCase expressions, the content associated with that case is rendered. If there is no match, the content associated with the ngSwitchDefault case is rendered.

Here's an example of how to use ngSwitch:



```html
<div [ngSwitch]="myVariable">
  <div *ngSwitchCase="'case1'">Content for case 1</div>
  <div *ngSwitchCase="'case2'">Content for case 2</div>
  <div *ngSwitchDefault>Default content</div>
</div>
```
In this example, the myVariable expression is evaluated and compared to each ngSwitchCase expression. If myVariable equals 'case1', the first div with the content "Content for case 1" will be rendered. If myVariable equals 'case2', the second div with the content "Content for case 2" will be rendered. If myVariable does not match any of the ngSwitchCase expressions, the ngSwitchDefault content, "Default content", will be rendered.



```ts
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-test, .app-test, [app-test]',
  template: `
  <h1> hello </h1>
   <div [ngSwitch]="variable"> 
   <div *ngSwitchCase="'1'"> 1 is displayed </div>
   <div *ngSwitchCase="'2'"> 2 is displayed </div>
   <div *ngSwitchCase="'3'"> 3 is displayed </div>
   <div ngSwitchDefault> Default case content </div>

   </div>


  `,
  styles: []
})
export class TestComponent {
  public variable: string = "1";

}

/**
 *  the ngSwitch directive provides a default case that you can use to display content when none of the ngSwitchCase expressions match the value of the ngSwitch directive.
 */

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-test, .app-test, [app-test]',
  template: `
  <div [ngSwitch]="variable">
  <ng-template ngSwitchCase="1">
    <p>One is selected.</p>
  </ng-template>
  <ng-template ngSwitchCase="2">
    <p>Two is selected.</p>
  </ng-template>
  <ng-template ngSwitchCase="3">
    <p>Three is selected.</p>
  </ng-template>
  <ng-template ngSwitchDefault>
    <p>Please select a number between 1 and 3.</p>
  </ng-template>
</div>

  `,
  styles: []
})
export class TestComponent {
  public variable: string = "1";

}

/**
 * Yes, the ngSwitch directive provides a default case that you can use to display content when none of the ngSwitchCase expressions match the value of the ngSwitch directive.
 */


```






### ngFor 
