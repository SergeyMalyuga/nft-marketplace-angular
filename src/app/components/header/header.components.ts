import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.components.html',
  styleUrl: './header.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponents {}
