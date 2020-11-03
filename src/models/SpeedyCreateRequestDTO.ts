
export interface SpeedyCreateRequestDTO {
  id?: number;
  pack_count?: number;
  enable_customer_share_sum?: boolean;
  share_type?: SpeedyCreateRequestDTOShare_typeEnum;
  service_type?: number;
  receiver_pay_sum?: number;
  service_sms?: boolean;
  service_oc?: boolean;
  service_fragile?: boolean;
  service_dc?: boolean;
  service_pay_after_accept?: boolean;
  service_pay_after_test?: boolean;
  service_partial_delivery?: boolean;
  order_description?: string;
  pickup_date?: string;
}

export enum SpeedyCreateRequestDTOShare_typeEnum {
    Sender_pay_total = 'sender_pay_total',  
    Receiver_pay_total = 'receiver_pay_total',  
    Receiver_pay_sum = 'receiver_pay_sum',  
}
