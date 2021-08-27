import { BaseAPI } from '../../runtime';
import { TokenRequestDTO } from '@models';
import { TokenResponseDTO } from '@models';
import { LoginRequestDTO } from '@models';
import { OAuthTokenRequestDTO } from '@models';
import { RegisterRequestDTO } from '@models';

export class AuthAPI extends BaseAPI {
   async createToken (basicAuth: { username: string, password: string }, query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           basicAuth,
           contentType: 'application/json',
        });
       return (response as unknown) as TokenResponseDTO;
   }

   async login (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: LoginRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/login`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TokenResponseDTO;
   }

   async createFacebookToken (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string, access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/facebook/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TokenResponseDTO;
   }

   async createGoogleToken (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string, access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/google/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TokenResponseDTO;
   }

   async createAppleToken (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string, id_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/apple/token`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TokenResponseDTO;
   }

   async createAnonymousToken (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/anonymous`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TokenResponseDTO;
   }

   async refreshToken (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/refresh`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TokenResponseDTO;
   }

   async register (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: RegisterRequestDTO): Promise<TokenResponseDTO> {
       const response = await this._request({
           path: `/auth/register`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TokenResponseDTO;
   }

}
