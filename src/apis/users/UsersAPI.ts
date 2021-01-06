import { BaseAPI } from '../../runtime';
import { UserDTO } from '../../models/UserDTO';
import { UserProfileUpdateDTO } from '../../models/UserProfileUpdateDTO';
import { PasswordChangeDTO } from '../../models/PasswordChangeDTO';
import { PasswordTokenDTO } from '../../models/PasswordTokenDTO';
import { PasswordResetDTO } from '../../models/PasswordResetDTO';
import { UserFilterResultDTO } from '../../models/UserFilterResultDTO';
import { UserDraftDTO } from '../../models/UserDraftDTO';
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
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as UserDTO;
   }

   async changePassword (dto: PasswordChangeDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/password`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as UserDTO;
   }

   async createPasswordToken (dto: PasswordTokenDTO): Promise<any> {
       const response = await this._request({
           path: `/users/users/password-token`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as any;
   }

   async resetPassword (dto: PasswordResetDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/password/reset`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as UserDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<UserFilterResultDTO> {
       const response = await this._request({
           path: `/users/users`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as UserFilterResultDTO;
   }

   async create (dto: UserDraftDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as UserDTO;
   }

   async getById (id: string): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async update (id: string, dto: UserUpdateDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as UserDTO;
   }

   async delete (id: string): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as UserDTO;
   }

}
