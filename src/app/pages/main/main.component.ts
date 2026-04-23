import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponents} from '../../components/header/header.components';
import {HeroComponent} from '../../components/hero/hero.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponents,
    HeroComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
