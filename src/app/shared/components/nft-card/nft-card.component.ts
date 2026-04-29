import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NftCard} from '../../../core/models/nft-card.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-nft-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './nft-card.component.html',
  styleUrl: './nft-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftCardComponent {
  @Input({required: true}) card!: NftCard;
}
