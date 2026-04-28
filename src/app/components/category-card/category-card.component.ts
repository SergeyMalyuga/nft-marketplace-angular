import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CategoryCard} from '../../core/models/category-card.model';

@Component({
  selector: 'app-category-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
  @Input({required: true}) card!: CategoryCard;
}
