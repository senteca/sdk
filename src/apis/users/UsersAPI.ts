import { BaseAPI } from '../../runtime';
import { UserDTO,UserProfileUpdateDTO,PasswordChangeDTO,PasswordTokenDTO,PasswordResetDTO,UserFilterResultDTO,UserDraftDTO,UserUpdateDTO } from '../../models';

export class UsersAPI extends BaseAPI {
   async getMyProfile (): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/my-profile`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as UserDTO;
   }

   async updateMyProfile (dto: UserProfileUpdateDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/my-profile`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as UserDTO;
   }

   async changePassword (dto: PasswordChangeDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/password`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as UserDTO;
   }

   async createPasswordToken (dto: PasswordTokenDTO): Promise<void> {
       const response = await this._request({
           path: `/users/users/password-token`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async resetPassword (dto: PasswordResetDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/password/reset`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as UserDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<UserFilterResultDTO> {
       const response = await this._request({
           path: `/users/users`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as UserFilterResultDTO;
   }

   async create (dto: UserDraftDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as UserDTO;
   }

   async getById (id: string): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as UserDTO;
   }

   async update (id: string, dto: UserUpdateDTO): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as UserDTO;
   }

   async delete (id: string): Promise<UserDTO> {
       const response = await this._request({
           path: `/users/users/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as UserDTO;
   }

}
