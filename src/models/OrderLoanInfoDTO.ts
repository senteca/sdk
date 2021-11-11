import { MoneyDTO } from './MoneyDTO';
import { BNPLoanVariantDTO } from './BNPLoanVariantDTO';
import { BNPLoanOfferDTO } from './BNPLoanOfferDTO';

export interface OrderLoanInfoDTO {
  customerPIN?: string;
  downPayment: MoneyDTO;
  selectedPricingVariant: BNPLoanVariantDTO;
  availablePricingVariants: BNPLoanOfferDTO;
}

