import { EcontClientProfile } from './EcontClientProfile';
import { EcontAddress } from './EcontAddress';
import { EcontCDPayOptions } from './EcontCDPayOptions';
import { EcontInstructions } from './EcontInstructions';

export interface EcontProfilesResponseElement {
  client: EcontClientProfile;
  addresses: EcontAddress[];
  cdPayOptions: EcontCDPayOptions[];
  instructionTemplates: EcontInstructions[];
}

