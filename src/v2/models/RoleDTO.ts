
export interface RoleDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  name: string;
  permissions: string[];
}

