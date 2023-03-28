


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