import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorCardComponent } from './creator-card.component';

describe('CreatorCardComponent', () => {
  let component: CreatorCardComponent;
  let fixture: ComponentFixture<CreatorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
