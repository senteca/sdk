import { TermAggregation } from './TermAggregation';
import { StatAggregation } from './StatAggregation';
import { RangeAggregation } from './RangeAggregation';

export interface CatalogAggregateResponseDTO {
  terms: TermAggregation[];
  stats: StatAggregation[];
  ranges: RangeAggregation[];
}

