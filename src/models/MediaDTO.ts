import { IdReferenceDTO } from './IdReferenceDTO';

export interface MediaDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  publicUrl: string;
  internalUrl: string;
  type: string;
  version: number;
  folder?: IdReferenceDTO;
  name: string;
  alt?: string;
  caption?: string;
  meta: object;
}

