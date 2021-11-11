import { BNPPricingSchemesDTO } from './BNPPricingSchemesDTO';
import { BNPLoanVariantDTO } from './BNPLoanVariantDTO';

export interface BNPLoanOfferDTO {
  scheme: BNPPricingSchemesDTO;
  offers: BNPLoanVariantDTO[];
}

