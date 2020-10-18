import { PackageDTO } from './PackageDTO';

export interface ThemeDraftDTO {
  version?: number;
  key: string;
  package: PackageDTO;
  vendorPackages: PackageDTO[];
  components: object[];
  pages: object[];
  config: object;
  defaultConfig: object;
}

