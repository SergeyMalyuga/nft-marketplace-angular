import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { BodyService } from '../../../core/services/body.service';
import { ScreenService } from '../../../core/services/screen.service';
import { RouterLink } from '@angular/router';
import { AppRoute } from '../../../core/constants/const';

@Component({
  selector: 'app-header',
  templateUrl: './header.components.html',
  styleUrl: './header.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
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

  protected readonly AppRoute = AppRoute;
}
