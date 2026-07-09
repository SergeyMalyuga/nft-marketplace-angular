import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BodyService {
  private document = inject(DOCUMENT);

  public setOverflow(isNoOverflow: boolean) {
    this.document.body.classList.toggle('no-overflow', isNoOverflow);
  }
}
