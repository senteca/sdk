import { PackageDTO } from './PackageDTO';

export interface ThemeDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  package: PackageDTO;
  components: any[];
  pages: any[];
  config: any;
  defaultConfig: any;
}

