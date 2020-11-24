import { PackageDTO } from './PackageDTO';

export interface ThemeDTO {
  version?: number;
  key: string;
  package: PackageDTO;
  components: any[];
  pages: any[];
  config: any;
  defaultConfig: any;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

