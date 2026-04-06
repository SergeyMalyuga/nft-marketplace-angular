import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponents} from '../../components/header/header.components';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponents
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
