import { EcontClientProfile } from './EcontClientProfile';
import { EcontAddress } from './EcontAddress';

export interface EcontCreateRequestDTO {
  shipmentType?: EcontCreateRequestDTOShipmentTypeEnum;
  envelopeNumbers?: number;
  packCount?: number;
  sendDate?: string;
  shipmentDescription?: string;
  sender?: string;
  senderId?: string;
  senderData?: any;
  senderClient: EcontClientProfile;
  senderAgent: EcontClientProfile;
  senderAddress?: EcontAddress;
  cashOnDeliveryAgreement: string;
  senderOffice?: string;
  smsNotification?: boolean;
  declaredValue?: boolean;
  deliveryReceipt?: boolean;
  payAfterAccept?: boolean;
  payAfterTest?: boolean;
  partialDelivery?: boolean;
  dimensionsWidth?: number;
  dimensionsHeight?: number;
  dimensionsLength?: number;
  sizeUnder?: boolean;
  keepUpright?: boolean;
}

export enum EcontCreateRequestDTOShipmentTypeEnum {
    DOCUMENT = 'DOCUMENT',  
    PACK = 'PACK',  
    POST_PACK = 'POST_PACK',  
}
