
export interface WarehouseDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  merchantKey: string;
  name?: string;
  description?: string;
  priority?: number;
}

