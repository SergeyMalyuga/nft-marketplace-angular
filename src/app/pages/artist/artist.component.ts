import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {HeaderComponents} from '../../shared/components/header/header.components';
import {NgOptimizedImage} from '@angular/common';
import {NFT_CARDS} from '../../core/constants/const';
import {NftCard} from '../../core/models/nft-card.model';
import {NftCardComponent} from '../../shared/components/nft-card/nft-card.component';

@Component({
  selector: 'app-artist',
  imports: [
    FooterComponent,
    HeaderComponents,
    NgOptimizedImage,
    NftCardComponent
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtistComponent {
  protected readonly NFT_CARDS: NftCard[] = NFT_CARDS;
}
