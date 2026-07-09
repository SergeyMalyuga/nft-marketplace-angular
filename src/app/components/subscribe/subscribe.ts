import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubscribeFormComponent } from '../../shared/components/subscribe-form/subscribe-form.component';

@Component({
  selector: 'app-subscribe',
  imports: [SubscribeFormComponent],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Subscribe {}
