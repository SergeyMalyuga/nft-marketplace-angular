import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CreatorCard} from '../../core/models/creator-card';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AppRoute} from '../../core/constants/const';

@Component({
  selector: 'app-creator-card',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './creator-card.component.html',
  styleUrl: './creator-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorCardComponent {
  @Input({required: true}) card!: CreatorCard;
  protected readonly AppRoute = AppRoute;
}
