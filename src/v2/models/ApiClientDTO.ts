
export interface ApiClientDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: string;
  permissions: string[];
}

