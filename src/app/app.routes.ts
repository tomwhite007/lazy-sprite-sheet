import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'example-page',
    loadComponent: () =>
      import('./example-routed-page/example-routed-page.component').then(
        (mod) => mod.ExampleRoutedPageComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'example-page',
  },
];
