import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponents} from '../../shared/components/header/header.components';
import {FooterComponent} from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-ranking',
  imports: [
    HeaderComponents,
    FooterComponent
  ],
  templateUrl: './ranking.html',
  styleUrl: './ranking.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ranking {}
