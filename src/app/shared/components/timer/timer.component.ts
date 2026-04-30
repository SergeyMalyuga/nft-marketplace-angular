import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal} from '@angular/core';
import {create, ITimr} from 'timrjs';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {
  private timer!: ITimr;

  public formattedTime = signal<string>('10:10:00');

  public ngOnInit(): void {
    this.timer = create(this.formattedTime());

    this.timer.ticker(({formattedTime}) => {this.formattedTime.set(formattedTime)});
    this.timer.start();
  }

  public ngOnDestroy() {
    if (this.timer) {
      this.timer.destroy();
    }
  }
}
