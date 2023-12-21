import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'lazy-sprite-sheet-example-routed-page',
  standalone: true,
  imports: [],
  templateUrl: './example-routed-page.component.html',
  styleUrl: './example-routed-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleRoutedPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log('ExampleRoutedPageComponent is visible');
  }
}
