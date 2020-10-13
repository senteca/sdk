import { BaseAPI } from '../../runtime';
import { UserDTO } from '../../models/UserDTO';
import { UserProfileUpdateDTO } from '../../models/UserProfileUpdateDTO';
import { PasswordChangeDTO } from '../../models/PasswordChangeDTO';
import { PasswordTokenDTO } from '../../models/PasswordTokenDTO';
import { PasswordResetDTO } from '../../models/PasswordResetDTO';
import { UserCreateDTO } from '../../models/UserCreateDTO';
import { UserUpdateDTO } from '../../models/UserUpdateDTO';

export class UsersAPI extends BaseAPI {
   async getUserProfile (): Promise<UserDTO> {
       const response = await this.request({
           path: `/users/users/profile`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async updateUserProfile (dto: UserProfileUpdateDTO): Promise<UserDTO> {
       const response = await this.request({
           path: `/users/users/profile`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as UserDTO;
   }

   async changeUserPassword (dto: PasswordChangeDTO): Promise<UserDTO> {
       const response = await this.request({
           path: `/users/users/password`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as UserDTO;
   }

   async requestUserPasswordToken (dto: PasswordTokenDTO): Promise<void> {
       const response = await this.request({
           path: `/users/users/password-token`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

   async resetUserPassword (dto: PasswordResetDTO): Promise<UserDTO> {
       const response = await this.request({
           path: `/users/users/password/reset`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as UserDTO;
   }

   async filterUsers (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/users`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createUser (dto: UserCreateDTO): Promise<UserDTO> {
       const response = await this.request({
           path: `/users/users`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as UserDTO;
   }

   async findUserById (id: string): Promise<UserDTO> {
       const response = await this.request({
           path: `/users/users/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as UserDTO;
   }

   async updateUserById (id: string, dto: UserUpdateDTO): Promise<UserDTO> {
       const response = await this.request({
           path: `/users/users/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as UserDTO;
   }

   async deleteUserById (id: string): Promise<UserDTO> {
       const response = await this.request({
           path: `/users/users/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as UserDTO;
   }

}
