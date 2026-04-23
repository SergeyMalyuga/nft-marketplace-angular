import {Inject, Injectable, OnDestroy, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScreenService implements OnDestroy {
  private mediaQuery?: MediaQueryList;
  public isTablet = signal(false);

  constructor(@Inject(PLATFORM_ID) private platform: object) {
    if (isPlatformBrowser(platform)) {
      this.mediaQuery = window.matchMedia("(max-width: 929px)");
      this.isTablet.set(this.mediaQuery.matches);
      this.mediaQuery.addEventListener('change', this.onChange)
    }
  }

  private onChange = (evt: MediaQueryListEvent) => {
    this.isTablet.set(evt.matches);
  }

  ngOnDestroy(): void {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.onChange);
    }
  }
}
