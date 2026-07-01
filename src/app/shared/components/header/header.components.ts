import {ChangeDetectionStrategy, Component, effect, inject, signal} from '@angular/core';
import {BodyService} from '../../core/services/body.service';
import {ScreenService} from '../../core/services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.components.html',
  styleUrl: './header.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponents {
  private bodyService = inject(BodyService);
  private screenService = inject(ScreenService);

  public isNavMenuOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      const isTablet = this.screenService.isTablet();
      if (!isTablet) {
        this.isNavMenuOpen.set(false);
        this.bodyService.setOverflow(this.isNavMenuOpen());
      }
    });
  }

  public toggleNavMenu() {
    this.isNavMenuOpen.set(!this.isNavMenuOpen());
    this.bodyService.setOverflow(this.isNavMenuOpen());
  }
}
