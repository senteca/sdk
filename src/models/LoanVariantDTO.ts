import { MoneyDTO } from './MoneyDTO';

export interface LoanVariantDTO {
  apr: string;
  correctDownPaymentAmount: MoneyDTO;
  installmentAmount: MoneyDTO;
  maturity: string;
  nir: string;
  processingFeeAmount: MoneyDTO;
  totalRepaymentAmount: MoneyDTO;
  variantId: string;
}

