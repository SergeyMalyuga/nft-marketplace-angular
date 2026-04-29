import {AfterViewInit, ChangeDetectionStrategy, Component, input, Input, OnDestroy} from '@angular/core';
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
  @Input({required: true}) swiperClass!: string;

  private swiper!: Swiper;

  ngAfterViewInit(): void {
    this.swiper = new Swiper(`.${this.swiperClass}`, {
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
