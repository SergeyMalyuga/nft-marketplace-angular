import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendCardComponent } from './trend-card.component';

describe('TrendCardComponent', () => {
  let component: TrendCardComponent;
  let fixture: ComponentFixture<TrendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
