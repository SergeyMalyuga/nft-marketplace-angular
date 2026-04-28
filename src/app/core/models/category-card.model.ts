import {Image} from './image.model';

export interface CategoryCard {
  id: string;
  href: string;
  image: Image;
  name: string;
  decor: Image;
}
