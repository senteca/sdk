import { SearchResultDTO } from './SearchResultDTO';

export interface CatalogSearchResultDTO {
  suggestedTerm: string;
  products: SearchResultDTO[];
  brands: any[];
  categories: any[];
}

