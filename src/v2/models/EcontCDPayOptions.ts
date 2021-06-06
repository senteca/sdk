import { EcontClientProfile } from './EcontClientProfile';
import { EcontAddress } from './EcontAddress';

export interface EcontCDPayOptions {
  num?: string;
  client: EcontClientProfile;
  moneyTransfer: boolean;
  express: boolean;
  method?: string;
  address?: EcontAddress;
  officeCode?: string;
  IBAN?: string;
  BIC?: string;
  bankCurrency?: string;
  payDays?: number;
  payWeekdays?: string;
  additionalInstructions?: string;
}

