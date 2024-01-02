import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header.component';
import { LazySpriteSheetComponent } from './lazy-sprite-sheet/lazy-sprite-sheet.component';

@Component({
  standalone: true,
  imports: [PageHeaderComponent, RouterModule, LazySpriteSheetComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
