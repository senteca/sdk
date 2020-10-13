import { IdReferenceDTO } from './IdReferenceDTO';
import { MoneyDTO } from './MoneyDTO';

export interface OrderWalletDTO {
  wallet: IdReferenceDTO;
  discount?: MoneyDTO;
}

