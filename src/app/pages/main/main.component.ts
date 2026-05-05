import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponents} from '../../components/header/header.components';
import {HeroComponent} from '../../components/hero/hero.component';
import {TrendCollectionComponent} from '../../components/trend-collection/trend-collection.component';
import {TopCreatorsComponent} from '../../components/top-creators/top-creators.component';
import {CategoriesComponent} from '../../components/categories/categories.component';
import {MoreNftsComponent} from '../../components/more-nfts/more-nfts.component';
import {AuctionComponent} from '../../components/auction/auction.component';
import {AboutComponent} from '../../components/about/about.component';
import {Subscribe} from '../../components/subscribe/subscribe';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponents,
    HeroComponent,
    TrendCollectionComponent,
    TopCreatorsComponent,
    CategoriesComponent,
    MoreNftsComponent,
    AuctionComponent,
    AboutComponent,
    Subscribe
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
}
