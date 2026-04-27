import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CREATOR_CARDS} from '../../core/constants/const';
import {CreatorCardComponent} from '../creator-card/creator-card.component';

@Component({
  selector: 'app-top-creators',
  imports: [
    CreatorCardComponent
  ],
  templateUrl: './top-creators.component.html',
  styleUrl: './top-creators.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopCreatorsComponent {
  protected readonly CREATOR_CARDS = CREATOR_CARDS;
}
