import { MoneyDTO } from './MoneyDTO';

export interface BNPLoanVariantDTO {
  apr: string;
  correctDownPaymentAmount: MoneyDTO;
  installmentAmount: MoneyDTO;
  maturity: string;
  nir: string;
  processingFeeAmount: MoneyDTO;
  totalRepaymentAmount: MoneyDTO;
  variantId: string;
}

