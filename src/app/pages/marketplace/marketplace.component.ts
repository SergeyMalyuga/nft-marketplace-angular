import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponents} from '../../shared/components/header/header.components';
import {FooterComponent} from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-marketplace',
  imports: [
    HeaderComponents,
    FooterComponent
  ],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketplaceComponent {}
