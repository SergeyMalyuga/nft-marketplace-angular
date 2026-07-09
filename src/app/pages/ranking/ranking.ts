import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { HeaderComponents } from '../../shared/components/header/header.components';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ScreenService } from '../../core/services/screen.service';
import { RankingFilter } from '../../core/models/ranking-filter.model';
import { NgClass } from '@angular/common';
import { Filter } from '../../core/constants/const';
import { MOCK_RANKING_DATA } from './mocks/ranking.mock';

@Component({
  selector: 'app-ranking',
  imports: [HeaderComponents, FooterComponent, NgClass],
  templateUrl: './ranking.html',
  styleUrl: './ranking.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ranking {
  public screenService = inject(ScreenService);
  public currentFilter = signal<Filter>(Filter.TODAY);
  public filtersText = computed<RankingFilter[]>(() => [
    {
      id: 'Today',
      label: this.screenService.isMobile() ? '1d' : 'Today',
      type: Filter.TODAY,
    },
    {
      id: 'This Week',
      label: this.screenService.isMobile() ? '7d' : 'This Week',
      type: Filter.THIS_WEEK,
    },
    {
      id: 'This Month',
      label: this.screenService.isMobile() ? '30d' : 'This Month',
      type: Filter.THIS_MONTH,
    },
    {
      id: 'All Time',
      label: 'All Time',
      type: Filter.ALL_TIME,
    },
  ]);

  public changeFilter(filter: Filter) {
    this.currentFilter.set(filter);
  }

  protected readonly MOCK_RANKING_DATA = MOCK_RANKING_DATA;
}
