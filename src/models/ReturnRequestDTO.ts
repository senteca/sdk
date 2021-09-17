
export interface ReturnRequestDTO {
  orderId: string;
  lineItemId: string;
  quantity: number;
  returnReason?: string;
  note?: string;
}

