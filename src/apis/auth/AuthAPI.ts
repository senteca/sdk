import { BaseAPI } from '../../runtime';
import { TokenRequestDTO } from '../../models/TokenRequestDTO';
import { TokenResponseDTO } from '../../models/TokenResponseDTO';
import { LoginRequestDTO } from '../../models/LoginRequestDTO';
import { OAuthTokenRequestDTO } from '../../models/OAuthTokenRequestDTO';
import { CustomerDraftDTO } from '../../models/CustomerDraftDTO';

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

   async login (dto: LoginRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/login`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createFacebookToken (query: { access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/facebook/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createGoogleToken (query: { access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/google/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createAppleToken (query: { id_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/apple/token`,
           method: 'POST',
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

   async refreshToken (dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/refresh`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async register (dto: CustomerDraftDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/register`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

}
