import { MoneyDTO } from './MoneyDTO';
import { LoanVariantDTO } from './LoanVariantDTO';
import { LoanOfferDTO } from './LoanOfferDTO';

export interface OrderLoanInfoDTO {
  customerPIN?: string;
  downPayment: MoneyDTO;
  selectedPricingVariant: LoanVariantDTO;
  availablePricingVariants: LoanOfferDTO;
}

