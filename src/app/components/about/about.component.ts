import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_CARDS } from '../../core/constants/const';
import { AboutCardComponent } from '../about-card/about-card.component';

@Component({
  selector: 'app-about',
  imports: [AboutCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly ABOUT_CARDS = ABOUT_CARDS;
}
