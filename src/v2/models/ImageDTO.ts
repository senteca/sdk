import { ImageSource } from './ImageSource';

export interface ImageDTO {
  thumb: ImageSource;
  small: ImageSource;
  medium: ImageSource;
  large: ImageSource;
  zoom: ImageSource;
  zoom2x: ImageSource;
  original: ImageSource;
}

