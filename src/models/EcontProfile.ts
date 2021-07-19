import { EcontClientProfile } from './EcontClientProfile';
import { EcontAddress } from './EcontAddress';
import { EcontCDPayOptions } from './EcontCDPayOptions';
import { EcontInstructions } from './EcontInstructions';

export interface EcontProfile {
  client: EcontClientProfile;
  addresses: EcontAddress[];
  cdPayOptions: EcontCDPayOptions[];
  instructionTemplates: EcontInstructions[];
}

