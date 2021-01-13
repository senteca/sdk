import { BaseAPI } from '../../runtime';
import { TokenRequestDTO } from '../../models/TokenRequestDTO';
import { TokenResponseDTO } from '../../models/TokenResponseDTO';
import { LoginRequestDTO } from '../../models/LoginRequestDTO';
import { OAuthTokenRequestDTO } from '../../models/OAuthTokenRequestDTO';
import { RegisterRequestDTO } from '../../models/RegisterRequestDTO';

export class AuthAPI extends BaseAPI {
   async createToken (basicAuth: { username: string, password: string }, query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           basicAuth,
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async login (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: LoginRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/login`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createFacebookToken (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/facebook/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createGoogleToken (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/google/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createAppleToken (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, id_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/apple/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async createAnonymousToken (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/anonymous`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async refreshToken (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/refresh`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

   async register (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: RegisterRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/register`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TokenResponseDTO;
   }

}
