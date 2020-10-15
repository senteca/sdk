
export interface InventoryDTO {
  stockLocationKey: string;
  merchantKey: string;
  quantityOnStock: number;
  availableQuantity: number;
  restockableInDays?: number;
  expectedNextDelivery?: number;
}

