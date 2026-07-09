import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponents } from '../../shared/components/header/header.components';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-wallet',
  imports: [HeaderComponents, FooterComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletComponent {}
