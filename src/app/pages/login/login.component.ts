import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponents} from '../../shared/components/header/header.components';
import {FooterComponent} from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponents,
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
