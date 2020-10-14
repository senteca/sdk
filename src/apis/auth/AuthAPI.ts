import { BaseAPI } from '../../runtime';
import { TokenRequestDTO } from '../../models/TokenRequestDTO';
import { AccessTokenDTO } from '../../models/AccessTokenDTO';
import { PasswordGrantTokenRequestDTO } from '../../models/PasswordGrantTokenRequestDTO';
import { FacebookTokenRequestDTO } from '../../models/FacebookTokenRequestDTO';

export class AuthAPI extends BaseAPI {
   async getToken (basicAuth: { username: string, password: string }, dto: TokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this.request({
           path: `/auth/auth/token`,
           method: 'POST',
           
           body: dto,
           basicAuth,
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async getPasswordGrantToken (dto: PasswordGrantTokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this.request({
           path: `/auth/auth/password`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async getFacebookToken (basicAuth: { username: string, password: string }, dto: FacebookTokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this.request({
           path: `/auth/auth/facebook/token`,
           method: 'POST',
           
           body: dto,
           basicAuth,
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async getAnonymousToken (basicAuth: { username: string, password: string }, dto: TokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this.request({
           path: `/auth/auth/anonymous/token`,
           method: 'POST',
           
           body: dto,
           basicAuth,
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

}
