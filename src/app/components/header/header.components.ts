import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.components.html',
  styleUrl: './header.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponents {
  public isNavMenuOpen = signal<boolean>(true);

  public toggleNavMenu() {
    this.isNavMenuOpen.set(!this.isNavMenuOpen());
  }
}
