import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendCollectionComponent } from './trend-collection.component';

describe('TrendCollectionComponent', () => {
  let component: TrendCollectionComponent;
  let fixture: ComponentFixture<TrendCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendCollectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendCollectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
