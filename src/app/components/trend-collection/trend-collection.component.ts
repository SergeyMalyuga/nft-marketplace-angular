import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TREND_CARDS} from '../../core/constants/const';
import {TrendCardComponent} from '../trend-card/trend-card.component';
import {SwiperComponents} from '../../shared/components/swiper/swiper.components';
import {TREND_COLLECTION_SWIPER} from '../../shared/config/swiper.config';

@Component({
  selector: 'app-trend-collection',
  imports: [
    TrendCardComponent,
    SwiperComponents
  ],
  templateUrl: './trend-collection.component.html',
  styleUrl: './trend-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendCollectionComponent {
  protected readonly TREND_CARDS = TREND_CARDS;
  protected readonly TREND_COLLECTION_SWIPER = TREND_COLLECTION_SWIPER;
}
