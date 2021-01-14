import { RangeAggregationResult } from './RangeAggregationResult';

export interface RangeAggregation {
  name: string;
  count: number;
  results: RangeAggregationResult[];
}

