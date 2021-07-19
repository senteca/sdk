import { CustomField } from './CustomField';

export interface ShippingSenderDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  moduleConfigKey: string;
  name?: string;
  address?: string;
  email?: string;
  isActive: boolean;
  data?: any;
  custom?: CustomField[];
  config?: any;
}

