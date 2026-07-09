import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SubscribeFormComponent } from '../subscribe-form/subscribe-form.component';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, SubscribeFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
