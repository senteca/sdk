
export interface FancourierCreateRequestDTO {
  id?: number;
  sender?: string;
  senderId?: string;
  senderData?: any;
  partialDelivery?: boolean;
  service_type?: string;
  pickup_date?: string;
  pack_count?: number;
  share_type?: FancourierCreateRequestDTOShare_typeEnum;
  service_pay_after_accept?: boolean;
  service_oc?: boolean;
  service_fragile?: boolean;
  contact_phone?: boolean;
  order_description?: string;
  width?: number;
  height?: number;
  length?: number;
}

export enum FancourierCreateRequestDTOShare_typeEnum {
    Sender_pay_total = 'sender_pay_total',  
    Receiver_pay_total = 'receiver_pay_total',  
}
