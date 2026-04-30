import {Image} from './image.model';

export interface AboutCard {
  id: string;
  image: Image;
  title: string;
  description: string;
}
