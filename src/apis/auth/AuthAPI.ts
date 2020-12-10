import { BaseAPI } from '../../runtime';
import { TokenRequestDTO } from '../../models/TokenRequestDTO';
import { AccessTokenDTO } from '../../models/AccessTokenDTO';
import { PasswordGrantTokenRequestDTO } from '../../models/PasswordGrantTokenRequestDTO';
import { CustomerDraftDTO } from '../../models/CustomerDraftDTO';

export class AuthAPI extends BaseAPI {
   async createToken (basicAuth: { username: string, password: string }, dto: TokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/token`,
           method: 'POST',
           
           body: dto,
           basicAuth,
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async createPasswordToken (dto: PasswordGrantTokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/password`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async createFacebookToken (query: { access_token: string }): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/facebook/token`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async createGoogleToken (query: { access_token: string }): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/google/token`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async createAppleToken (query: { lastName?: string, firstName?: string, id_token: string }): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/apple/token`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async createAnonymousToken (dto: TokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/anonymous`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async register (dto: CustomerDraftDTO): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/register`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

}
