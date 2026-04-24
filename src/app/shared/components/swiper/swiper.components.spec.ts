import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperComponents } from './swiper.components';

describe('SwiperComponents', () => {
  let component: SwiperComponents;
  let fixture: ComponentFixture<SwiperComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(SwiperComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
