# LazySpriteSheet

This project shows how to load an svg spritesheet in Angular 17 using `@defer` so that it doesn't affect the initial Angular spin up and lazy-routed page load, both of which happen before the spritesheet loads in this example. If you run this app with the console open, you'll see the routed page completes before the spritesheet component initialises.

- See [src/app/app.component.html](src/app/app.component.html) for where the spritesheet is loaded.
- See [src/app/lazy-sprite-sheet/lazy-sprite-sheet.component.html](src/app/lazy-sprite-sheet/lazy-sprite-sheet.component.html) for the spritesheet itself
- See [src/app/example-routed-page/example-routed-page.component.html](src/app/example-routed-page/example-routed-page.component.html) for how the spritesheet is consumed
- See [src/app/example-routed-page/example-routed-page.component.scss](src/app/example-routed-page/example-routed-page.component.scss) for how the svg can be locally styled (see `.read-book` class)

Some projects choose to use svg markup instead of svg files in the `assets` folder because it's easy to style and/or animate as an element in a component. The problem with this approach is how to cache svgs efficiently if there is a lot of them or if their markup is large. A lazy loaded svg spritesheet solves this.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
