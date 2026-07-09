import { Image } from './image.model';
import { Owner } from './owner.model';

export interface TrendCard {
  id: string;
  previewImage: Image;
  images: Image[];
  title: string;
  owner: Owner;
}
