import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TrendCard } from '../../core/models/trend-card.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-trend-card',
  imports: [NgOptimizedImage],
  templateUrl: './trend-card.component.html',
  styleUrl: './trend-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendCardComponent {
  @Input({ required: true }) card!: TrendCard;
}
