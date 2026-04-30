import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TimerComponent} from '../../shared/components/timer/timer.component';

@Component({
  selector: 'app-auction',
  imports: [
    NgOptimizedImage,
    TimerComponent
  ],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuctionComponent {}
