import { EcontShipmentStatus } from './EcontShipmentStatus';

export interface EcontCreateResponseDTO {
  blockingPaymentURL?: string;
  label: EcontShipmentStatus;
}

