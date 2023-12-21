import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRoutedPageComponent } from './example-routed-page.component';

describe('ExampleRoutedPageComponent', () => {
  let component: ExampleRoutedPageComponent;
  let fixture: ComponentFixture<ExampleRoutedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleRoutedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleRoutedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
