import { WidgetDraftDTO } from './WidgetDraftDTO';
import { WidgetTemplateDraftDTO } from './WidgetTemplateDraftDTO';

export interface ThemeDraftDTO {
  viewKey: string;
  key: string;
  version: string;
  widgets: WidgetDraftDTO[];
  configSchema: object;
  defaultConfig: object;
  defaultTemplates: WidgetTemplateDraftDTO[];
  defaultPages: object[];
}

