import { BaseAPI } from '../../runtime';
import { TokenRequestDTO } from '../../models/TokenRequestDTO';
import { TokenResponseDTO } from '../../models/TokenResponseDTO';
import { PasswordGrantTokenRequestDTO } from '../../models/PasswordGrantTokenRequestDTO';
import { OAuthTokenRequestDTO } from '../../models/OAuthTokenRequestDTO';
import { CustomerDraftDTO } from '../../models/CustomerDraftDTO';
import { AccessTokenDTO } from '../../models/AccessTokenDTO';

export class AuthAPI extends BaseAPI {
   async createToken (basicAuth: { username: string, password: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/token`,
           method: 'POST',
           
           body: dto,
           basicAuth,
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createPasswordToken (dto: PasswordGrantTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/password`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createFacebookToken (query: { access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/facebook/token`,
           method: 'GET',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createGoogleToken (query: { access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/google/token`,
           method: 'GET',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createAppleToken (query: { lastName?: string, firstName?: string, id_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/apple/token`,
           method: 'GET',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createAnonymousToken (dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/anonymous`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
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
