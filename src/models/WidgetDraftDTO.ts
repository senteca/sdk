
export interface WidgetDraftDTO {
  version?: number;
  themeKey?: string;
  viewKey?: string;
  name: string;
  path: string;
  acceptsChildren: boolean;
  dataSchema: object;
}

