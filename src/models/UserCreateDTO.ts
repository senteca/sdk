import { IdReferenceDTO } from './IdReferenceDTO';

export interface UserCreateDTO {
  firstName: string;
  middleName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: IdReferenceDTO;
}

