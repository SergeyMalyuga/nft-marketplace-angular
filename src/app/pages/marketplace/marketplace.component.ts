import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponents} from '../../shared/components/header/header.components';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {NFT_CARDS} from '../../core/constants/const';
import {NftCardComponent} from '../../shared/components/nft-card/nft-card.component';

@Component({
  selector: 'app-marketplace',
  imports: [
    HeaderComponents,
    FooterComponent,
    NftCardComponent
  ],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketplaceComponent {
  protected readonly NFT_CARDS = NFT_CARDS;
}
