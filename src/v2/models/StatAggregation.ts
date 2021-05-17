import { StatAggregationResult } from './StatAggregationResult';

export interface StatAggregation {
  name: string;
  count: number;
  result: StatAggregationResult;
}

