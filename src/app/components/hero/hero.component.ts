import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeroStatsComponent} from '../hero-stats/hero-stats.component';

@Component({
  selector: 'app-hero',
  imports: [
    HeroStatsComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
