
export interface InventoryDTO {
  warehouseKey: string;
  merchantKey: string;
  quantityOnStock: number;
  availableQuantity: number;
  restockableInDays?: number;
  expectedNextDelivery?: number;
}

