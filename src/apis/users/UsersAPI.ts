import { BaseAPI } from '../../runtime';
import { UserDTO } from '../../models/UserDTO';
import { UserProfileUpdateDTO } from '../../models/UserProfileUpdateDTO';
import { PasswordChangeDTO } from '../../models/PasswordChangeDTO';
import { PasswordTokenDTO } from '../../models/PasswordTokenDTO';
import { PasswordResetDTO } from '../../models/PasswordResetDTO';
import { UserFilterResultDTO } from '../../models/UserFilterResultDTO';
import { UserCreateDTO } from '../../models/UserCreateDTO';
import { UserUpdateDTO } from '../../models/UserUpdateDTO';

export class UsersAPI extends BaseAPI {
   async getMyProfile (): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/my-profile`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async updateMyProfile (dto: UserProfileUpdateDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/my-profile`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async changePassword (dto: PasswordChangeDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/password`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async createPasswordToken (dto: PasswordTokenDTO): Promise<object> {
       const response = await this._request({
           path: `/users/users/password-token`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

   async resetPassword (dto: PasswordResetDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/password/reset`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<UserFilterResultDTO> {
       const response = await this._request({
           path: `/users/users`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as UserFilterResultDTO;
   }

   async create (dto: UserCreateDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async getById (id: string): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async update (id: string, dto: UserUpdateDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async delete (id: string): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as UserDTO;
   }

}
