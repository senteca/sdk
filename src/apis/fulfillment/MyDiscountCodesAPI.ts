import { BaseAPI } from '../../runtime';
import { DiscountCodeFilterResultDTO } from '../../models/DiscountCodeFilterResultDTO';

export class MyDiscountCodesAPI extends BaseAPI {
   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<DiscountCodeFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/my-discount-codes`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as DiscountCodeFilterResultDTO;
   }

}
