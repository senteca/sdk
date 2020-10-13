import { WidgetDraftDTO } from './WidgetDraftDTO';
import { WidgetTemplateDraftDTO } from './WidgetTemplateDraftDTO';

export interface ThemeDTO {
  viewKey: string;
  key: string;
  version: string;
  widgets: WidgetDraftDTO[];
  configSchema: object;
  defaultConfig: object;
  defaultTemplates: WidgetTemplateDraftDTO[];
  defaultPages: object[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

