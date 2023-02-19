# Quick Angular Refresher

angular js primarily used to make single page data driven applications, additional ocntent brought to the web page without the need to refresh 
the we do this is by using views and routing 

we just type the forward slash and angular would go out and grab the view into the main view so we are not physically loading a new view. It is grabbing the content of views that we need brining them back and punching them into right into this view area

you just write some html and sprinkle in some expressions in data binding 

### on chrome developer mode press CMD/Control + Shift + R to do a hard referesh 



## quick glance of the content 

1. MVC 
2. 2 way data binding 
3. filters, directives, and expressions 
4. controllers and how to use them 
5. views and routing 
6. animations 
7. form validations 
8. a to do list app


## Prequisite 
you will need to write a fair amount of things in this playlist in order to get started with Angular but they are dead easy to learn with quick google search and result in mastering them in less than a hour.

1. JavaScript Essentials 
2. HTML essentials 
3. CSS optional 
4. JSON options 


## Download angular.js 
https://angularjs.org/

we click on the additional modules here, that is all that kind of core functionalities embedded into it, if we want animations, we need to download additional modules which are libraries 





## Cheatsheat

1. ng-model   ng-bind

```html

<p > input your name </p>
<input type = "text" ng-model="nameOfModel" />
<p ng-bind="nameOfModel"> </p>
</div>
```

2. {{expression}}

3. ng-init="variable=value;variable2=value2"   

```html

 

<div ng-app="" ng-init="color='orange'">
<p class={{color}}> see 100 + 100 = {{100 + 100}} </p>
    </div>
```

```css
.orange{

    color:orange;

}
 
```




## Model View Controller 

Angular.js uses MVC archiecture in its approach to create web applications. MVC is a programming methodolgy which aims to split our applicaiton up into three core components that is model-view-controller. And then these three components combine to form our applications. The underlying principle is a separation of concerns 



### Model 
think of the model as data, JSON, database data and etc
all the models could be something as small as a numeric values which stores the data that we work with in angular js 

### View 
used to display content & data to a user in a browser, it is html uses expressions to insert data into views 
< html tag>{{}}</ html tag>

### Controller 
controllers control the functionality of our views, it performs the interaction between our models and our views 
different controllers for different areas in our application 


example, user clicks a button in a view, the controller recognizes the button click event and perform a function, the function communicates with the model and retrieve all the data, the controller passes accessibility to this data to the view, which then display to the view 






## Two Way data binding 

It is called two way data binding because if we update the model with the view, if we update it, it is going to update the model in the code, it is backwards and forwards 




```HTML

<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>
<div ng-app>
<p > input your name </p>
<input type = "text" ng-model="nameOfModel" />
<p ng-bind="nameOfModel"> </p>
</div>
</body>
</html>
```

we poped in the ng-app just the content within the div tag would be controlled by angular, we do not have to do anything javascript whatsoever here, this is just the functionality straight out of the box with angular 

the ng-app directives tells angular that div element is the owner of angular 
the ng-model directives binds the value of the input field via the variable name 
the ng-bind directive binds the content inside it


## Introduction to Directives 
Directives just extends HTML functionalities for us 


we used ng-app to hold someting to be our application
let's take a little peak to this documentation to get a rough ideas of what we are dealing with 
We can program some behaviors into a directive so that whenever, it will display a random thing




## Expressions 
what expressions about is outputing data to the browser, the expressions are like little snippets of JS code, normally placed with curly braces  in conjunction with the angular attribute directives 


it bounds that data to this model, evaluates this expresssion

```HTML
<div ng-app="" ng-init="variable=100">
<p> see 100 + 100 = {{100 + 100}} </p>
    </div>
```

likewise, we will do something like this:

```HTML
<div ng-app="" ng-init="variable1=100;variable2=300">
<p> see 100 + 100 = {{variable1 + variable2}} </p>
    </div>
```


the ng-init directives initialzies angularjs app
it allows us to initialzie some data when our application loads 


```HTML
<div ng-app="" ng-init="variable=100"">
    <p> the value is </p> <i ng-bind="variable"> </i>

</div>
```

```HTML

<div ng-app="" ng-init="color='orange'">
<p class={{color}}> see 100 + 100 = {{100 + 100}} </p>
    </div>
```

```css
.orange{

    color:orange;

}
```

```html
<div ng-app="" ng-init="array_variable=['a','b','c','d']">
 <ul>
<li> {{array_variable[0]}}</li>    
<li> {{array_variable[1]}}</li>    
<li> {{array_variable[2]}}</li>    
<li> {{array_variable[3]}}</li> 
</ul>

    </div>
```

These functionalties are just output data 


## ng-repeat directive


see if i bring it over here, it is working its way through the array 


```HTML

<div ng-app="" ng-init="array_variable=['aa','bb','cc','dd']">
 <ul>
<li ng-repeat="single_element in array_variable"> {{single_element}}</li>    

</ul>

    </div>
```


## Angular modules 
we need to use angular modules and controllers to divide our code into manageable chunks 

you can think of these modules as containers for all these components like controllers reside in this module 

```JS
//app.js
let somethingAsAppVariableName = angular.module('something',[]);


// a config function will fire before any of your app runs 
somethingAsAppVariableName.config(function(){

});


// will fire when application runs 
somethingAsAppVariableName.run(function(){

});




```


## Controller

we need to linked up to app.js, it is gonna be built up of controllers factory services and etc. 




```HTML

 <div ng-app="">

    <input type = "something" ng-model="nameOfSomething">


    <p ng-bind="nameOfSomething"> </p>



 </div>
```



```HTML
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="example1_readme.css">

        </head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src = "app.js"> </script>
<body>
<div ng-app="nameOfVariable">
 

    </div>
</body>
</html>

```



```JS
// app.js
let variableInAModule = angular.module("nameOfVariable",[]);


variableInAModule.config(function(){
console.log("this is fired for variableInModule before application run");
});

variableInAModule.config(function(){
console.log("This is fired when application is runnning");
});

```


controller essentially controls our application data and different controllers are used to control different parts of the app

```JS
let variable = angular.module('nameUsedInHTML',[]);
variable.controller("nameController");



```

we currently do not have namController settle in the application, this is like the scope of this power


```js
let variableInAModule = angular.module("nameOfVariable",[]);


variableInAModule.controller("nameOfController", function(){
    console.log("this is my controller");
});


variableInAModule.config(function(){
console.log("this is fired for variableInModule before application run");
});

variableInAModule.config(function(){
console.log("This is fired when application is runnning");
});
```



to pass data between app.js and html, we need to use something called the scope object, scope is like the binding part between the html view and js controller. all that will be accessible to html. we need to pass in scope as dependency 

scope is impled that we are just grabbing those objects or variables or properties off the scope 



it only recognize this variable inside the controller, the only area that scope applies 



```HTML
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="example1_readme.css">

        </head>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src = "app.js">  </script>
<body ng-app="nameOfVariable">
<div ng-controller="nameOfController">
    <p> {{message}}</p>
    
    </div>
</body>
</html>

```



```js

let variableInAModule = angular.module("nameOfVariable",[]);


variableInAModule.controller("nameOfController", [ $scope, function($scope){
    $scope.message = "this is the scope for our controller";
    
    console.log("this is my controller");
});


variableInAModule.config(function(){
console.log("this is fired for variableInModule before application run");
});

variableInAModule.config(function(){
console.log("This is fired when application is runnning");
}]);
```

##### note we should use the correct array format 
```JS

let moduleName = angular.module("moduleNameHtml",[]);

moduleName.controller("ControllerNameHtml", [$scope, function(scope) {

}]);

```



full example, how to pass this data on the scope of this object which we have access to within this section 



```JS

let moduleNameOfThisApp = angular.module("moduleOfThisAppUsedInHTML", []);


moduleNameOfThisApp.controller("nameOfControllerUsedInThisApp", function($scope){
    $scope.array_list = ['hello','this','is','eddie'];
    $scope.message = "wow, I am here!";


});



moduleNameOfThisApp.config(()=>{
    console.log("this is how it is launched before running");
})


moduleNameOfThisApp.run(() => {
    console.log("this is how it is running ");
})
```





```HTML
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="example1_readme.css">

        </head>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src = "app.js">  </script>
<body ng-app="moduleOfThisAppUsedInHTML">
 <div ng-controller="nameOfControllerUsedInThisApp"> 

    <ol>
        <li ng-repeat="element in array_list">{{element}} </li>

        </ol>

 </div>
</body>
</html>


```

we are passing through this depending on the scope we need. fought from this variable through minification then we need to do this a slightly different way, when we start minify javascript files in angular.js, this does not always work. we sometimes need to protect the variable. 

the way we will do that is by passing the function and dependencies through an array after the controller name



```JS

moduleNameOfApp.controller('nameController',['$scope', 'dependency', function($scope, $dependency){

}]);


```


## Filters "element in objects | orderBy : 'xxx' | filter : 'ng-model's NAME' " or "element in objects | orderBy : '-xxx' "


filters are how we changed the display of how we output data to the users, that is the output of data or prefix of data, or we will put it in a particular format like currency 

```HTML

   <input type = "text" ng-model="search">

    <ol>
        <li ng-repeat="element in objects | orderBy : 'name' | filter: variable  ">{{element}} </li>

        </ol>

         <li ng-repeat="element in objects | orderBy: 'name' | filter : 'pattern'"> {{element.name}}</li>

              <li ng-repeat="element in objects | orderBy: 'name' | filter : 'd'"> name: {{element.name}} - age : {{element.age | currency: '$'}}</li>

        
```




```HTML


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="example1_readme.css">

        </head>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src = "app.js">  </script>
<body ng-app="moduleOfThisAppUsedInHTML">
 <div ng-controller="nameOfControllerUsedInThisApp"> 

    <input type = "text" ng-model="search">

    <ol>
     <li ng-repeat="element in objects | orderBy: 'name' | filter : 'd'"> name: {{element.name}} - age : {{element.age | currency: '$'}}</li>
        </ol>

 </div>
</body>
</html>
```


```JS

let moduleNameOfThisApp = angular.module("moduleOfThisAppUsedInHTML", []);


moduleNameOfThisApp.controller("nameOfControllerUsedInThisApp", function($scope){
    $scope.objects = [

        {
            name:'husband',
            age : 31
        },
        {
            name:'wife',
            age : 27
        },
        {
            name:'son',
            age : 2
        },
        {
            name:'daughter',
            age : 1
        }




    ]


});



moduleNameOfThisApp.config(()=>{
    console.log("this is how it is launched before running");
})


moduleNameOfThisApp.run(() => {
    console.log("this is how it is running ");
})
```


We will order this alphabetically




## ng-include directive 


ng-include can bring in html from another file and then and dump it into our current view whenever we need it 

it can help us to break up complex html page into logical pieces, if we are gong to repeat our code say there is a section on our website, for example, the header, the footer and on some other pages 
```HTML

  <ng-include src="'header.html'">
    </ng-include>
```


```HTML


```
you can create a html file and use ng-include directive whenver we need it in our view. 



header.html
```HTML
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

```





the common mistake is whenever we use ng-include, we have to pass through things like single quotations!!!!



from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
For solving this issue try to run your page on some local server (apache, nginx, node.js, etc )


For those who are having trouble with the ng-include directive:  Most browsers will disallow XHR requests when the file has been served from file:///.  So if that's what you're trying, that's the problem. However, if you have nodejs installed, you can simply use: http-server  at the command prompt.
install npm: https://nodejs.org/en/download/
```shell
sudo npm install -g http-server
```
then run "http-server" (without quotes), it displayed my index file, you paste this url in browser:  
http://127.0.0.1:8080/file_name.html


## ng-show & ng-hide directive 
### ng-show=true or ng-show="element.available"
### ng-show=true or ng-hide="element.available"

```HTML

 <div ng-controller="nameOfControllerUsedInThisApp"> 
   

    <input type = "text" ng-model="search">

    <ol>
     <li ng-repeat="element in objects | orderBy: 'name' | filter : search" ng-show="element.available"> name: {{element.name}} - age : {{element.age | currency: '$'}}</li>
        </ol>

 </div>
```





```JS

let moduleNameOfThisApp = angular.module("moduleOfThisAppUsedInHTML", []);


moduleNameOfThisApp.controller("nameOfControllerUsedInThisApp", function($scope){
    $scope.objects = [

        {
            name:'husband',
            age : 31,
            available: true
        },
        {
            name:'wife',
            age : 27,
            available: false
        },
        {
            name:'son',
            age : 2,
            available: true
        },
        {
            name:'daughter',
            age : 1,
            available: false
        }




    ]


});



moduleNameOfThisApp.config(()=>{
    console.log("this is how it is launched before running");
})


moduleNameOfThisApp.run(() => {
    console.log("this is how it is running ");
})
```

on the flipside, if we put an exclamation mark in front of that because, this is evaluate to true, this is negation sign. 



```HTML
 <ol>
     <li ng-repeat="element in objects | orderBy: 'name' | filter : search" ng-hide="!element.available"> name: {{element.name}} - age : {{element.age | currency: '$'}}</li>
        </ol>


```





## ng-click 
### ng-click = "order='name'"
### ng-repeat = "element in objects" ng-click = "functionName(element)"
### $scope.element.indexOf and $scope.element.splice

we work through an example whereby we are going to give the user options to order by the names 

```HTML
 <div ng-controller="nameOfControllerUsedInThisApp"> 
   

    <input type = "text" ng-model="search">
    <button ng-click="order='name'"> order by name </button>
    <button ng-click="order= 'age'"> order by age </button>

    <ol>
     <li ng-repeat="element in objects | orderBy: order | filter : search" > name: {{element.name}} - age : {{element.age | currency: '$'}}</li>
        </ol>

 </div>

```


```HTML
 <div ng-controller="nameOfControllerUsedInThisApp"> 
   

    <input type = "text" ng-model="search">
    <button ng-click="order='name'"> order by name </button>
    <button ng-click="order= 'age'"> order by age </button>

    <ol>
     <li ng-repeat="element in objects | orderBy: order | filter : search" > name: {{element.name}} - age : {{element.age | currency: '$'}} <span ng-click="removeObject(element)"> X </span></li> 
        </ol>

 </div>
```


```JS
let moduleNameOfThisApp = angular.module("moduleOfThisAppUsedInHTML", []);


moduleNameOfThisApp.controller("nameOfControllerUsedInThisApp", function($scope){
    
    $scope.removeObject = function(singleObject){
        let indexOfRemovedObject = $scope.objects.indexOf(singleObject);
        $scope.objects.splice(indexOfRemovedObject,1);
    }
    
    $scope.objects = [

        {
            name:'husband',
            age : 31,
            available: true
        },
        {
            name:'wife',
            age : 27,
            available: false
        },
        {
            name:'son',
            age : 2,
            available: true
        },
        {
            name:'daughter',
            age : 1,
            available: false
        }




    ]


});
```


you will get hang of it 

## ng-submit 

### parseInt()



then we need to set those variables back to empty strings, that is ng submit and how we interact with controller with it 

```HTML

       <form  ng-submit="addObject()"> 
        <label> name:</label><input type = "text" ng-model="newObject.name">  
        <label> age:</label><input type = "text" ng-model="newObject.age"> 
        <label> available</label><input type = "text" ng-model="newObject.available"> 

        <input type = "submit" value="submit"> 
    </form>


```


```JS
    $scope.addObject = function(){
        $scope.objects.push({
            name: $scope.newObject.name,
            age: parseInt($scope.newObject.age),
            available: $scope.newObject.available
        });

    }
```


## ng-src


nothing is actually wrong with this until we use console.
GET file:///Users/eddiehuang/Desktop/angular/angular_refresher/%7B%7Belement.image_location%7D%7D net::ERR_FILE_NOT_FOUND

angular gets a chance to inject the property right here dynamically, so we do not want that 



```HTML

     <li ng-repeat="element in objects | orderBy: order | filter : search" > name: {{element.name}} - age : {{element.age | currency: '$'}} 
        
        <img src="{{element.image_location}}" style="max-height: 30;max-width: 30px;">
        <span ng-click="removeObject(element)"> X </span>
    
    
    </li> 
```



```js

  $scope.objects = [

        {
            name:'husband',
            age : 31,
            available: true,
            image_location: '1.jpeg'
        },
        {
            name:'wife',
            age : 27,
            available: false,
            image_location: '2.jpeg'
        },
        {
            name:'son',
            age : 2,
            available: true,
            image_location: '3.jpeg'
        },
        {
            name:'daughter',
            age : 1,
            available: false,
            image_location: '4.jpeg'
        }




    ]


});
```

ng-src will wait until angular injects that dynamic path 



```html

 <ol>
     <li ng-repeat="element in objects | orderBy: order | filter : search" > name: {{element.name}} - age : {{element.age | currency: '$'}} 
        
        <img ng-src="{{element.image_location}}" style="max-height: 30;max-width: 30px;">
        <span ng-click="removeObject(element)"> X </span>
    
    
    </li> 
        </ol>

```

then it will go out to find that image. 

we will use ng-show="element.image_location" if it does not have an image
```HTML
    <ol>
     <li ng-repeat="element in objects | orderBy: order | filter : search" > name: {{element.name}} - age : {{element.age | currency: '$'}} 
        
        <img ng-src="{{element.image_location}}" style="max-height: 30;max-width: 30px;" ng-show="element.image_location">
        <span ng-click="removeObject(element)"> X </span>
    
    
    </li> 
        </ol>

```



## Views and Routings 
https://www.digitalocean.com/community/tutorials/angularjs-routing-example-ngroute-routeprovider
### <main ng-view > <main>

angular.js is primarily used for single page applications that means when we click on a link, it does not go to another page exactly. we are gonna set different views into view files. it just request a different view and then that view is placed in the content area, when we click a link, it injects it into the content. when we set a directory, angular will know to go out and it will get the direct view, and it knows where to dump it 


we pop that right in there


we are gonna set up routings in the app.js, when we need the routing, we need to inject dependencies because the routing library is completely separate library, https://angularjs.org/ browse additional module -> download angular-route.js


index.html


```html







<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="example1_readme.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
        <script src = "app.js">  </script>
        <title>Free Bootstrap Themes, Templates, Snippets, and Guides - Start Bootstrap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <script src = "angular-route.js"> </script>
    </head>


        <body ng-app="">  <ng-include src="'./header.html'"> </ng-include>
        
  <main ng-view> </main>   
        


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
 
</body>
</html>

```

home.html
```html


<h1> This is a home page </h1>

```





app.js 

```js

let moduleNameOfThisApp = angular.module("moduleOfThisAppUsedInHTML", ["ngRoute"]);


```


##### please note this is  ["ngRoute"] not [ngRoute]

the dependency is called ngRoute, when we pop that in 
it knows we are gonna use angular-route.js 


##### everything that we need to fire before the page loads, we need to put them into the config method becauase we want to sell all that for anything starts so it recognize where url starts 

```js
moduleNameOfThisApp.config(['$routeProvider'],()=>{
    console.log("this is how it is launched before running");
})

```


it allows us to pass through this route provider object. this object is gonna let us set up all these different routes 

```js

moduleNameOfThisApp.config(['$routeProvider'],($routeProvider)=>{
    console.log("this is how it is launched before running");

    $routeProvider.when('/home', 
    {templateUrl: 'example3_home.html'})
    .when('/content', {
        templateUrl: 'example3_content.html'
    });
})
```

remove the controller in html 
```html
<body ng-app="moduleOfThisAppUsedInHTML">



    <div> 
      
   
       <input type = "text" ng-model="search">
       <button ng-click="order='name'"> order by name </button>
       <button ng-click="order= 'age'"> order by age </button>
   
       <ol>
        <li ng-repeat="element in objects | orderBy: order | filter : search" > name: {{element.name}} - age : {{element.age | currency: '$'}} 
           
           <img ng-src="{{element.image_location}}" style="max-height: 30;max-width: 30px;" ng-show="element.image_location">
           <span ng-click="removeObject(element)"> X </span>
       
       
       </li> 
           </ol>
   
          <form  ng-submit="addObject()"> 
           <label> name:</label><input type = "text" ng-model="newObject.name">  
           <label> age:</label><input type = "text" ng-model="newObject.age"> 
           <label> available</label><input type = "text" ng-model="newObject.available"> 
   
           <input type = "submit" value="submit"> 
       </form>
   
    </div>

```


we need to do a couple things and you can already see that we are grabbing 


the # sign is how angularjs works with routing, and we cannot get rid of it 



###### Error: [$injector:nomod] Module 'myApp' is not available! You either misspelled the module name or forgot to load it.

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>

```

###### Angular JS Uncaught Error: [$injector:modulerr]
In development environments I recommend you to use not minified distributives. And all errors become more informative! Instead of angular.min.js, use angular.js.



##### clear cache and cookies!



```JS

let app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/",{
    template: "<h1> this is first one</h1>"}
    ).when("/one", {
        template: "<h1> this is the second one</h1>"
    }).when("/two", {
        template: "<h2> this is the third one </h2> "
    }).otherwise( {
        template:  "<h3> this is otherwise <h3>"
    })
})


```

```HTML

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="example1_readme.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>

        <script src = "./example.js">  </script>
        <title>Free Bootstrap Themes, Templates, Snippets, and Guides - Start Bootstrap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
       
    </head>

 <body ng-app="myApp"> 
 
    <a href="one">Main</a></p>

    <a href="two">2</a>
    <a href="three">3</a>
    <div ng-view> </div>


 </body>
        


    </html>

```


## JSON and $http

we are defining $scope in the function righ here down on the scope object so we are passing all data to that. probably we need to externalize all the data and bring them in the html source. it is easier to manage 


we will external it to a json file and request that file using the http service in angular when we need it so we can have access to it in this controller and output to the screen. 


in javascript we do not have to put quotations around, but in json we will have to do something 

to convert javascript object to json, we can use in angular as : 
## console.log(angular.toJson($scope.objectName))


note: TypeError: Function.prototype.bind.apply(...) is not a constructor
change from arrow function to function($scope)


incidentally it is dead simple, you will be funneling json

```json
[{"name":"husband","age":31,"available":true,"image_location":"1.jpeg"},{"name":"wife","age":27,"available":false,"image_location":"2.jpeg"},{"name":"son","age":2,"available":true,"image_location":"3.jpeg"},{"name":"daughter","age":1,"available":false,"image_location":"4.jpeg"}]

```

we store that file in an external file and we need to use http service to go out to grab that data and make it accessible  the controller 




### services in angular just a little bit code which handles common tasks of your application 

we will pass in http service as an array 


note: If it shows $scope is not defined
that is because we missed '' quotation marks such as: [$scope, $http, function($scope, $http)

```JS

moduleNameOfThisApp.controller("nameOfControllerUsedInThisApp", ['$scope', '$http', function($scope, $http){
    

```


note: if $http.get(...).success is not a function
For versions up to Angular v.1.6, you have to use then method. The then() method takes two arguments: a success and an error callback which will be called with a response object.

note: Failed to load resource: the server responded with a status of 404 (Not Found)

```JS
// that is when you got the wrong file, for example, the actual filename was objects.json
  $http.get("object.json").then(function(data){
        $scope.objects = data;
    });
```

note: angular.js:14800 Error: [orderBy:notarray]
orderBy must be used with an array-like value so a subset of items can be returned. The array can be initialized asynchronously and therefore null or undefined won't throw this error.
this happens when it is not an array, it is an object or alike
https://docs.angularjs.org/error/orderBy/notarray


https://jsonworld.com/demo/how-to-read-local-json-file-in-angular
https://docs.angularjs.org/api/ng/service/$http

```JS

 $http.get("objects.json").then(function(response){
        console.log(response.data);
        $scope.objects = response.data;
    });
```



```JS

let moduleNameOfThisApp = angular.module("moduleOfThisAppUsedInHTML", ['ngRoute']);


moduleNameOfThisApp.controller("nameOfControllerUsedInThisApp", ['$scope', '$http', function($scope, $http){
    $http.get("objects.json").then(function(response){
        console.log(response.data);
        $scope.objects = response.data;
    });
    
    $scope.removeObject = function(singleObject){
        let indexOfRemovedObject = $scope.objects.indexOf(singleObject);
        $scope.objects.splice(indexOfRemovedObject,1);
    }

    $scope.addObject = function(){
        $scope.objects.push({
            name: $scope.newObject.name,
            age: parseInt($scope.newObject.age),
            available: $scope.newObject.available
        });

        $scope.newObject.name = "";
        $scope.newObject.age = "";
        $scope.newObject.available = "";

    }
    
    




}]);



moduleNameOfThisApp.config(($routeProvider)=>{
    $routeProvider.when('/home', 
    {templateUrl: 'example3_home.html'})
    .when('/content', {
        templateUrl: 'example3_content.html',
        controller: 'nameOfControllerUsedInThisApp'
    }).otherwise({
        redirectTo: '/home'
    });
    console.log("this is how it is launched before running");


    console.log("route for home and content has been set");
})

moduleNameOfThisApp.run(() => {
    console.log("this is how it is running ");
})

```


```html

<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myController"> 

<p>Today's welcome message is:</p>

<h1>{{message}}</h1>

</div>

<p>The $http service requests a page on the server, and the response is set as the value of the "myWelcome" variable.</p>

<script>
let app = angular.module('myApp',[]);
app.controller('myController', function($scope, $http){
    $http.get('https://jsonplaceholder.typicode.com/todos/1').then(
        function(response){
            $scope.message = response.data;
        }
    )
});

</script>

</body>
</html>

```

note: in order to run this app, you will have to run a local or a live server!!!


## Custom directives 
### moduleName.directive('directiveName', function () {return { retrict: 'E', scope: {objectName: '=', title: '='}, templateUrl: '', controller: function($scope) {] }}})
### <directive-name objectName = '' title = "'titleName'"> <directive-name> 


https://www.3pillarglobal.com/insights/angularjs-understanding-directive-scope/


if we want something extra some kind of functionalities which is just unique to this application, we can create our own directives to handle these functionalities 


when we define 

```html
<custom-directive></custom-directive>
```

it will be camelCase in our javascript code 

when we add a directive, we need to return things 


```html

<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myController"> 

<custom-directive> </custom-directive>

</div>
 
<script>

let app = angular.module('myApp', []);
app.directive("customDirective", function(){
    return {
    template: '<h1> this is my custom directive </h1>'
    };
});

</script>

</body>
</html>

```

The legal restrict values are:

E for Element name
A for Attribute
C for Class
M for Comment


when we use restrict: 'EA'

```js

 moduleName.directive(function () {return { retrict: 'E'}})

```
that means we can only use the directive as an element in our page

when we use restrict 'A'

```js

 moduleName.directive(function () {return { retrict: 'A'}})

```
that me
that means we can only use the directive as an attribute

if we use both, we can use 


```js

 moduleName.directive(function () {return { retrict: 'EA'}})

```


scope: true|false|'='
scope is where we pass data through into this directives 
that means the directives have their own scope, called isolated scopes 
it is not the same as the scope outside of this whole file 



###### <custom-directive value = 'value'> </custom-directive>


```html

<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myController"> 


    <h2>Value: {{value}}</h2>
  Change  value : <input type='text' ng-model='value'/>


<custom-directive> </custom-directive>

</div>
 
<script>

let app = angular.module('myApp', []);
app.directive("customDirective", function(){
    return {
        restrict: 'E',
        scope: '=',
    template: "<h1> this is my custom directive </h1>" +
    "type a value : <input type = 'text' ng-model='value' />"
    };
});


app.controller('myController', function($scope){
$scope.value = "my value hahahaha";
});

</script>

</body>
</html>

```




keep in mind that the title is actually 
title = "'values go in '"

error: 
```html

    <my-directive objects = 'objects' title = 'my custom title'> </my-directive>
```

correct: 

```html 

    <my-directive objects = 'objects' title = "'my custom title'"> </my-directive>
```
###### template versus templateUrl

```js

moduleNameOfThisApp.directive('myDirective',[function(){
return {
    restrict: 'E',
    scope:{
        objects:'=',
        title: '='
    },
    template : '<h1> here is the title {{title}} </h1>',
    // basically everytime this directive is called in html 
    // it is gonna look out for this template and output whatever is in this template 
     // now we can have acccess to that in that scope 

}


}]);

```



### Transculde & Replace <div ng-transclude> </div>


we made the swanky directive, we will go through a couple more propertie swe can pass through to this return object 

normally we can nest an html 


```html

<custom-directive> 

<p> Hello </p>
    </custom-directive>
```

essentially everything inside these directives will get deleted and replaced by the content we defined. 
however, we can tell angular we do not want to delete this stuff here, we want to include this in the tag. 

```js

moduleNameOfThisApp.directive('myDirective',[function(){
return {
    restrict: 'E',
    scope:{
        objects:'=',
        title: '='
    },
    template :  "{{objects}}",
    // basically everytime this directive is called in html 
    // it is gonna look out for this template and output whatever is in this template 
     // now we can have acccess to that in that scope 
     transclude: true, // look, we want to include other tags

     controller: function($scope){

     }

}


}]);

```

```html
   <my-directive objects = 'objects' title = "'my custom title'"> 

   <p> this is transcluded content </p>


    </my-directive>

```


nothing is gonna happen because we have not told angular where within this tempalte we want to show that nested html 




if we want to make the tags <custom-name> </custom-name> more standard compliant, then what we could do is to use the replace property, 

wihtin this view right here, it goes to the outermost element that surrounds all of this content with outtermost tag in our template 

```JS
moduleNameOfThisApp.directive('myDirective',[function(){
return {
    restrict: 'E',
    scope:{
        objects:'=',
        title: '='
    },
    template :  "{{objects}}",
    // basically everytime this directive is called in html 
    // it is gonna look out for this template and output whatever is in this template 
     // now we can have acccess to that in that scope 
     transclude: true, // look, we want to include other tags
     replace: true

     controller: function($scope){

     }

}


}]);


```

it is kinda semantic , when html is published, it will be more complained 

```html



<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp">
<div ng-controller="myController">

<input ng-model="title" > <br>
<textarea ng-model="text"> </textarea>
<myDirective title = "'{{title}}'"> <i> {{text}} </i></myDirective>


</div>
<script>
var app = angular.module("myApp", []);
app.directive('myDirective', function(){

return {
    restrict : 'E',
    transclude: true,
    scope: {
        title : '=',
    },
    template: '<div style="border: 1px solid black;">' +
                    '<div style="background-color: gray">{{title}}</div>' +
                    '<ng-transclude></ng-transclude>' +
                  '</div>'
};

}).controller('myController',['$scope', function($scope){
    $scope.title = "here is my own title";
    $scope.text = "here is my own text, lolo";
}])
</script>

</body>
</html>

```




## Animations -- ngAnimate 

Then you must refer to the ngAnimate module in your application

there is lacking some kinda of slickness, there is not animation between any kind of states so, to take this to some kind of awesomenesss  
we use ng animate to install some kinda of animations effects into this project 




```html

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>
```


```css
div {
  transition: all linear 0.5s;
  background-color: lightblue;
  height: 100px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}

.ng-hide {
  height: 0;
  width: 0;
  background-color: transparent;
  top:-200px;
  left: 200px;
}

```


what does ng-animate do for us? it gives us some classes to play around with elements as they enter and leave our application for 



```html

<!DOCTYPE html>
<html>
<style>
div {
  transition: all linear 0.5s;
  background-color: lightblue;
  height: 100px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}

.ng-hide {
  height: 0;
  width: 0;
  background-color: transparent;
  top:-200px;
  left: 200px;
}

</style>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>

<body ng-app="ngAnimate">

<h1> hide the element: </h1>

<input type = "checkbox" ng-model="checkBox"> 


<div ng-hide="checkBox"> animation starts hiding</div>

</body>
</html>

```



```html

<!DOCTYPE html>
<html>
<style>
div {
  transition: all linear 0.5s;
  background-color: lightblue;
  height: 100px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}

.ng-hide {
  height: 0;
  width: 0;
  background-color: transparent;
  top:-200px;
  left: 200px;
}

.ng-enter{

    height: 0;
  width: 0;
  background-color: red;
  top: 200px;
  left: 200px;

}

</style>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>

<body ng-app="myApp">



<h1> enter the element: </h1>

<input type = "checkbox" ng-model="checkBox"> 




<div ng-hide="checkBox"> enter animation starts entering</div>

<script>

let app = angular.module('myApp', [ngAnimate]);




</script>




</body>
</html>

```


we want to take one step further to introduce to the stagger effect for those animations, it is great with multiple sets of items like ng-repeat 

```css
#id-list li.xxx stagger{
    transition-delay:0.2s;
    transition-duration:0;

}

```




## Form validation 

form classes 
1. ng-pristine - when form or input not used yet, it is clear 
2. ng-dirty - when form or input has been used, user has entered somthing 
3. ng-untouched - when input has not been touched,  when we have not clicked on that field 
4. ng-touched - when input has been touched , when we have clicked on that field
5. ng-valid - when a form field is valid 
6. ng-invalid - when a form field is not valid 



we need to hand over from html5 to angular when it comes to services and validation 


##### we passed in novalidate in html5 form, ng-required="true", ng-model="object.attribute"


```JS



<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="example1_readme.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
        
        <script src = "app_form.js" type="text/javascript">  </script>
        <title>Free Bootstrap Themes, Templates, Snippets, and Guides - Start Bootstrap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
       <style>
.ng-valid{
    background-color: aliceblue;
    color: blue;
}

</style>
    </head>


        <body ng-app="moduleOfThisAppUsedInHTML">  
         {{contact}}
            <form novalidate class = "ng-pristine ng-invalid ng-invalid-required ng-valid-email">
                <label for="fname" ng-required="true" >First name:</label><br>
                <input type="text" id="fname" name="fname" value="John" required= "required"  ng-required="true" ng-model="contact.fname" class = "ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"><br>
                <label for="lname" ng-required="true">Last name:</label><br>
                <input type="text" id="lname" name="lname" value="Doe" required= "required" ng-required="true" ng-model="contact.lname" class = "ng-not-empty ng-dirty ng-valid-required ng-touched ng-valid ng-valid-parse"><br><br>
                      <label for="email" ng-required="true">Email:</label><br>
                <input type="email" id="email" name="email" value="" ng-required="true" required= "required" ng-model="contact.email" class = "ng-not-empty ng-dirty ng-valid-required ng-touched ng-valid ng-valid-email"><br><br>
                <input type="submit" value="Submit">
                
              </form> 




    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
 
</body>
</html>
```

I want to take this one step further this time. 


### Form proeprties 

| Class | Property |
| ------------- | ------------- |
| ng-pristine  | $pristine  |
| ng-dirty  | $dirty  |
| ng-touched  | $touched  |
| ng-valid  | $valid  |
| ng-invalid  | $invalid  |
when the field is dirty, pristine will be replace by ng-dirty 




```html

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="example1_readme.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
        
        <script src = "app_form.js" type="text/javascript">  </script>
        <title>Free Bootstrap Themes, Templates, Snippets, and Guides - Start Bootstrap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
       
    </head>


        <body ng-app="moduleOfThisAppUsedInHTML">  
         {{contact}}
            <form novalidate class = "ng-pristine ng-invalid ng-invalid-required ng-valid-email">
                <label for="fname" ng-required="true" >First name:</label><br>
                <input type="text" id="fname" name="fname" value="John" ng-required="true" ng-model="contact.fname" required="required" ><br>
                <span> $pristine -- {{contact.fname.$pristine}} </span>
                <span> $dirty -- {{contact.fname.$dirty}} </span>
                <span> $touched -- {{contact.fname.$touched}} </span>
                <span> $untouched -- {{contact.fname.$untouched}} </span>
                <span> $valid -- {{contact.fname.$valid}} </span>
                <span> $invalid -- {{contact.fname.$invalid}} </span>
                <label for="lname" ng-required="true">Last name:</label><br>
                <input type="text" id="lname" name="lname" value="Doe" ng-required="true" ng-model="contact.lname"><br><br>
                      <label for="email" ng-required="true">Email:</label><br>
                <input type="email" id="email" name="email" value="" ng-required="true" ng-model="contact.email"><br><br>
                <input type="submit" value="Submit">
                
              </form> 


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
 
</body>
</html>

```


##### we can use ng-show="variableObject.variable.$touched"
###### ng-disabled="variableObject.variable.$invalid && variableObject.variable.$untouched"




## $location services 


create a swanky little form here which offers some neat feedbacks
location services let us forward the user when they successfully complete the form and send 

```js

let moduleNameOfThisApp = angular.module("moduleOfThisAppUsedInHTML", ['ngRoute']);



moduleNameOfThisApp.controller('formSuccessController', ['$scope', '$location'], function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('success');
    }

})

moduleNameOfThisApp.config(($routeProvider)=>{
    $routeProvider.when('/home', 
    {templateUrl: 'example3_home.html'})
    .when('/content', {
        templateUrl: 'example3_content.html',
        controller: 'nameOfControllerUsedInThisApp'
    }).when('/form', {
        templateUrl: 'form.html',
        controller: 'nameOfFormController'
    }).when('/success',{
     templateUrl:'form_success.html',
     controller: 'FormSuccessController'
    })
  
    console.log("this is how it is launched before running");


    console.log("route for home and content has been set");
})


```

it hooks us up and redirect us using $location.path()



## pretty URL -- location provider services 
previously our router is http://127.0.0.1:8080/form.html#!/home

```js


moduleNameOfThisApp.config(['$routeProvider','$locationProvider'], ($routeProvider, $locationProvider)=>{
  $locationProvider.html5Mode(true);


    $routeProvider.when('/home', 
    {templateUrl: 'example3_home.html'})
    .when('/content', {
        templateUrl: 'example3_content.html',
        controller: 'nameOfControllerUsedInThisApp'
    }).when('/form', {
        templateUrl: 'form.html',
        controller: 'nameOfFormController'
    }).when('/success',{
     templateUrl:'form_success.html',
     controller: 'FormSuccessController'
    })
  
    console.log("this is how it is launched before running");


    console.log("route for home and content has been set");
})

```