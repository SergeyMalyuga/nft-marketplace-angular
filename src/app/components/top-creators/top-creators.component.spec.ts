import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCreatorsComponent } from './top-creators.component';

describe('TopCreatorsComponent', () => {
  let component: TopCreatorsComponent;
  let fixture: ComponentFixture<TopCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCreatorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopCreatorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
