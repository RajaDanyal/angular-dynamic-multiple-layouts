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
