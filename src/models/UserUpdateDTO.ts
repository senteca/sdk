import { IdReferenceDTO } from './IdReferenceDTO';

export interface UserUpdateDTO {
  firstName: string;
  middleName?: string;
  lastName?: string;
  email: string;
  role: IdReferenceDTO;
}

