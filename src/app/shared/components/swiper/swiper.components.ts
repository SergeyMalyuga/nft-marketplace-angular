import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy} from '@angular/core';
import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import {SwiperOptions} from 'swiper/types';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.components.html',
  styleUrl: './swiper.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponents implements AfterViewInit, OnDestroy {
  @Input({required: true}) options!: SwiperOptions;
  private swiper!: Swiper;

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      modules: [Pagination],
      slidesPerView: 'auto',
      ...this.options,
    })
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

}
