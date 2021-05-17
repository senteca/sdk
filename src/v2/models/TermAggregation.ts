import { TermAggregationResult } from './TermAggregationResult';

export interface TermAggregation {
  name: string;
  count: number;
  results: TermAggregationResult[];
}

