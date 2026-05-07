import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFormComponent } from './subscribe-form.component';

describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
