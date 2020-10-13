
export interface WidgetDTO {
  version?: number;
  themeKey?: string;
  viewKey?: string;
  name: string;
  path: string;
  acceptsChildren: boolean;
  dataSchema: object;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

