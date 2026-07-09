import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CATEGORY_CARDS } from '../../core/constants/const';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-categories',
  imports: [CategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  protected readonly CATEGORY_CARDS = CATEGORY_CARDS;
}
