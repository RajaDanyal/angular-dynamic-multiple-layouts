# Angular MultiLayout

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How it works

To understand how this application works, first lets have a look at angular routes, child routes and router outlets.

For navigation purpose we provide routes in  router module. For each route we provide a route path and the component which we want to use for that specific path.  i.e. if our navigation path is '/login', we will tell angular to load login componenet when this route is hit.

Angular uses router outlet to render the component to which  we navigate via routes. Its like a place holder, and by defining this place holder , we tell angular that this is the area where we want our routed component to be rendered.

By default  angular uses the default router outlet to render the routed components. Usually we define our router outlet in app component or any other component  which is a child component of app component. We can use multiple router outlets in an application. In order to use multiple router outlets, we have to create named router outlets (Not in scope of this article).

It is also possible to define child routes, which means we can have sub routes of a given parent route. For example we have a route '/user', then we can define a child route of this parent route which we can access as '/user/profile', where /profile is the child route.
To define child route we use children property of the route object, which is an array of  child routes. There can be as many child routes for a given parent route as you want.

Now  as we have learnt about routes, child routes and router outlets, it time to see how we can have multiple layouts using these features.

In Angular we have a  tree of routes starting from parent and went down to the child routes. The key point is
child routes are rendered in the router outlet of their parent route componenet.

## Code preview

Lets have a quick  overview of the code.

We have defined  the  main route **'/home'**, which is the default landing page of the application.
Then we have defined  a parent route which is empty, which means any call after the **/** will match this route.
Each parent route is using layout components . We have **layout with header  and a layout with footer**.
The first empty route loads the layout with header , anf that will be  rendered in the default router outlet of the application , which is in app component. Now  we have two child components, 'dashboard' and 'list'. When we hit route '/dashboard', the **first empty parent route will be matched** and it will render layout with header in the default router outlet. When it will drop down in the tree,'/dashboard' route will be matches and  it will be rendered in the router outlet of the layout with header.
Similarly when the route '/list' will be hit , it will be **rendered in the router out of its parent **, which is layout with header.

Lyout with header will NOT be rendered again with each call because angular checks if its a component is alrady rendered in the DOM, it does not load it agin. So this way layout with header will be loaded just once and the child routes will be rendered inside the layout.

Similarly we can define  as many layouts as we want as parent routes , and each component which we want to use that  layout, will be the child routes of that given parent layour route.

## Conclusion

So hopefully by now you understand  how we have achived the multiple layouts in Angular. The key take away is 
**child routes are rendered in the router outlet of their parent route componenet.**

To learn more about Angular routing , check the following 
[Angular Routing Guide](https://angular.io/guide/router)


I hope it was useful. For problems and suggestions, feel free to contact.





