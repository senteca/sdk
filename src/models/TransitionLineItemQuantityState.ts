import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface TransitionLineItemQuantityState {
  quantity: number;
  lineItemId: string;
  fromState: KeyReferenceDTO;
  toState: KeyReferenceDTO;
}

