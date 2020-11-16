import { BaseAPI } from '../../runtime';
import { TokenRequestDTO } from '../../models/TokenRequestDTO';
import { AccessTokenDTO } from '../../models/AccessTokenDTO';
import { PasswordGrantTokenRequestDTO } from '../../models/PasswordGrantTokenRequestDTO';
import { FacebookTokenRequestDTO } from '../../models/FacebookTokenRequestDTO';

export class TokenAPI extends BaseAPI {
   async create (basicAuth: { username: string, password: string }, dto: TokenRequestDTO): Promise<AccessTokenDTO> {
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
           path: `/auth/token/password`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async createFacebookToken (dto: FacebookTokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/token/facebook`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

   async createAnonymousToken (dto: TokenRequestDTO): Promise<AccessTokenDTO> {
       const response = await this._request({
           path: `/auth/token/anonymous`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AccessTokenDTO;
   }

}
