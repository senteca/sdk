import { ScriptTagDTO } from './ScriptTagDTO';
import { CookieAggregatedDTO } from './CookieAggregatedDTO';

export interface ScriptAggregatedDTO {
  key: string;
  name?: string;
  scripts?: ScriptTagDTO[];
  cookies?: CookieAggregatedDTO[];
}

