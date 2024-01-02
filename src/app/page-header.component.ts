import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lazy-sprite-sheet-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="welcome">
      <h1>Welcome to lazy-sprite-sheet</h1>
    </div>
  `,
  styles: [
    `
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
    `,
  ],
})
export class PageHeaderComponent {}
