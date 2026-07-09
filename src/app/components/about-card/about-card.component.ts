import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AboutCard } from '../../core/models/about-card.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-card',
  imports: [NgOptimizedImage],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutCardComponent {
  @Input({ required: true }) card!: AboutCard;
}
