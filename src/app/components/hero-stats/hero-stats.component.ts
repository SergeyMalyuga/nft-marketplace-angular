import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-stats',
  imports: [],
  templateUrl: './hero-stats.component.html',
  styleUrl: './hero-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroStatsComponent {
  @Input({required: true}) isBottom!: boolean;
}
