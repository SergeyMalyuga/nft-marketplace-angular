import { Inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScreenService implements OnDestroy {
  private tabletQuery?: MediaQueryList;
  private mobileQuery?: MediaQueryList;

  public isTablet = signal(false);
  public isMobile = signal(false);

  constructor(@Inject(PLATFORM_ID) private platform: object) {
    if (isPlatformBrowser(platform)) {
      this.tabletQuery = window.matchMedia('(max-width: 929px)');
      this.isTablet.set(this.tabletQuery.matches);
      this.tabletQuery.addEventListener('change', this.onTabletChange);

      this.mobileQuery = window.matchMedia('(max-width: 768px)');
      this.isMobile.set(this.mobileQuery.matches);
      this.mobileQuery.addEventListener('change', this.onMobileChange);
    }
  }

  private onTabletChange = (evt: MediaQueryListEvent) => {
    this.isTablet.set(evt.matches);
  };

  private onMobileChange = (evt: MediaQueryListEvent) => {
    this.isMobile.set(evt.matches);
  };

  ngOnDestroy(): void {
    this.tabletQuery?.removeEventListener('change', this.onTabletChange);
    this.mobileQuery?.removeEventListener('change', this.onTabletChange);
  }
}
