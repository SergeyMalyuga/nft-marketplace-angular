import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NftCard} from '../../../core/models/nft-card.model';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AppRoute} from '../../../core/constants/const';

@Component({
  selector: 'app-nft-card',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './nft-card.component.html',
  styleUrl: './nft-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftCardComponent {
  @Input({required: true}) card!: NftCard;
  protected readonly AppRoute = AppRoute;
}
