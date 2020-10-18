import { PackageDTO } from './PackageDTO';

export interface ThemeDTO {
  version?: number;
  key: string;
  package: PackageDTO;
  vendorPackages: PackageDTO[];
  components: object[];
  pages: object[];
  config: object;
  defaultConfig: object;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

