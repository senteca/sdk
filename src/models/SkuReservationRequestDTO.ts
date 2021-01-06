import { CartScopeDTO } from './CartScopeDTO';

export interface SkuReservationRequestDTO {
  sku: string;
  quantity: number;
  cartScope?: CartScopeDTO;
}

