import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreNftsComponent } from './more-nfts.component';

describe('MoreNftsComponent', () => {
  let component: MoreNftsComponent;
  let fixture: ComponentFixture<MoreNftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreNftsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreNftsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
