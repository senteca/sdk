import { ItemShippingTargetDTO } from './ItemShippingTargetDTO';

export interface ItemShippingDetailsDTO {
  valid: boolean;
  targets: ItemShippingTargetDTO[];
}

