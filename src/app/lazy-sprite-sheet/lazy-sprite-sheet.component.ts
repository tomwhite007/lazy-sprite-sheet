import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'lazy-sprite-sheet',
  templateUrl: './lazy-sprite-sheet.component.html',
  styleUrls: ['./lazy-sprite-sheet.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazySpriteSheetComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log('LazySpriteSheetComponent is visible');
  }
}
