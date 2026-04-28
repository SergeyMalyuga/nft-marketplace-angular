import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponents} from '../../components/header/header.components';
import {HeroComponent} from '../../components/hero/hero.component';
import {TrendCollectionComponent} from '../../components/trend-collection/trend-collection.component';
import {TopCreatorsComponent} from '../../components/top-creators/top-creators.component';
import {CategoriesComponent} from '../../components/categories/categories.component';
import {MoreNtfsComponent} from '../../components/more-ntfs/more-ntfs.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponents,
    HeroComponent,
    TrendCollectionComponent,
    TopCreatorsComponent,
    CategoriesComponent,
    MoreNtfsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
