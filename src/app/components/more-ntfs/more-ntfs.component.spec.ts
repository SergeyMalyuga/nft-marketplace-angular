import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreNtfsComponent } from './more-ntfs.component';

describe('MoreNtfsComponent', () => {
  let component: MoreNtfsComponent;
  let fixture: ComponentFixture<MoreNtfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreNtfsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreNtfsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
