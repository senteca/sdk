import { ProductDataDTO } from './ProductDataDTO';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';

export interface ProductDTO {
  version: number;
  id: string;
  externalId: string;
  createdAt: number;
  updatedAt: number;
  status: ProductDTOStatusEnum;
  liveData: ProductDataDTO;
  reviewRatingStatistics?: ReviewRatingStatisticsDTO;
}

export enum ProductDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
