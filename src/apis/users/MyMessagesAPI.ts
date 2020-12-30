import { BaseAPI } from '../../runtime';
import { CustomerMessageFilterResultDTO } from '../../models/CustomerMessageFilterResultDTO';
import { CustomerMessageStatusUpdateDTO } from '../../models/CustomerMessageStatusUpdateDTO';
import { CustomerMessageDTO } from '../../models/CustomerMessageDTO';

export class MyMessagesAPI extends BaseAPI {
   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<CustomerMessageFilterResultDTO> {
       const response = await this._request({
           path: `/users/my-messages`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomerMessageFilterResultDTO;
   }

   async setStatus (id: string, dto: CustomerMessageStatusUpdateDTO): Promise<CustomerMessageDTO> {
       const response = await this._request({
           path: `/users/my-messages/${encodeURIComponent(id)}/status`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerMessageDTO;
   }

}
