import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {NFT_CARDS} from '../../core/constants/const';
import {NftCardComponent} from '../../shared/components/nft-card/nft-card.component';
import {SwiperComponents} from '../../shared/components/swiper/swiper.components';
import {DEFAULT_COLLECTION_SWIPER} from '../../shared/config/swiper.config';

@Component({
  selector: 'app-more-ntfs',
  imports: [
    NftCardComponent,
    SwiperComponents
  ],
  templateUrl: './more-ntfs.component.html',
  styleUrl: './more-ntfs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreNtfsComponent {
  protected readonly NFT_CARDS = NFT_CARDS;

  public isSwiper = signal<boolean>(false);

  public toggleList() {
    this.isSwiper.set(!this.isSwiper());
  }

  protected readonly DEFAULT_COLLECTION_SWIPER = DEFAULT_COLLECTION_SWIPER;
}
