import { PricingSchemesDTO } from './PricingSchemesDTO';
import { LoanVariantDTO } from './LoanVariantDTO';

export interface LoanOfferDTO {
  scheme: PricingSchemesDTO;
  offers: LoanVariantDTO[];
}

