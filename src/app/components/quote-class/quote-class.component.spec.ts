import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteClassComponent } from './quote-class.component';

describe('QuoteClassComponent', () => {
  let component: QuoteClassComponent;
  let fixture: ComponentFixture<QuoteClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
