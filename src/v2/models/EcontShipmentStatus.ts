import { EcontAddress } from './EcontAddress';
import { EcontClientProfile } from './EcontClientProfile';

export interface EcontShipmentStatus {
  cdCollectedAmount?: number;
  cdCollectedCurrency?: string;
  cdCollectedTime?: number;
  cdPaidAmount?: number;
  cdPaidCurrency?: string;
  cdPaidTime?: number;
  createdTime?: number;
  currency?: string;
  deliveryAttemptCount?: number;
  deliveryTime?: number;
  discountAmount?: number;
  discountDescription?: string;
  discountPercent?: number;
  expectedDeliveryDate?: number;
  nextShipments: string[];
  otherDueAmount?: number;
  packCount?: number;
  pdfURL?: string;
  previousShipmentNumber?: string;
  receiverAddress?: EcontAddress;
  receiverAgent: EcontClientProfile;
  receiverClient: EcontClientProfile;
  receiverDeliveryType?: EcontShipmentStatusReceiverDeliveryTypeEnum;
  receiverDueAmount?: number;
  receiverOfficeCode?: string;
  sendTime?: number;
  senderAddress?: EcontAddress;
  senderClient: EcontClientProfile;
  senderAgent: EcontClientProfile;
  senderDeliveryType?: EcontShipmentStatusSenderDeliveryTypeEnum;
  senderDueAmount?: number;
  senderOfficeCode?: string;
  services: string[];
  shipmentDescription?: string;
  shipmentNumber?: string;
  shipmentType?: string;
  storageOfficeName?: string;
  storagePersonName?: string;
  totalPrice?: number;
  trackingEvents: string[];
  weight?: number;
}

export enum EcontShipmentStatusReceiverDeliveryTypeEnum {
    Door = 'door',  
    Office = 'office',  
}
export enum EcontShipmentStatusSenderDeliveryTypeEnum {
    Door = 'door',  
    Office = 'office',  
}
