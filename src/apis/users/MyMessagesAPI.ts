import { BaseAPI } from '../../runtime';
import { CustomerMessageFilterResultDTO } from '../../models/CustomerMessageFilterResultDTO';

export class MyMessagesAPI extends BaseAPI {
   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<CustomerMessageFilterResultDTO> {
       const response = await this._request({
           path: `/users/my-messages`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomerMessageFilterResultDTO;
   }

}
