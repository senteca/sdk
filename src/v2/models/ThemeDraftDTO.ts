import { PackageDTO } from './PackageDTO';

export interface ThemeDraftDTO {
  version?: number;
  key: string;
  package: PackageDTO;
  components: any[];
  pages: any[];
  config: any;
  defaultConfig: any;
}

