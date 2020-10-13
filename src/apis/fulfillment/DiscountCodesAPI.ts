import { BaseAPI } from '../../runtime';
import { DiscountCodeDTO } from '../../models/DiscountCodeDTO';
import { DiscountCodeDraftDTO } from '../../models/DiscountCodeDraftDTO';

export class DiscountCodesAPI extends BaseAPI {
   async importDiscountCodes (dto: string[]): Promise<DiscountCodeDTO[]> {
       const response = await this.request({
           path: `/fulfillment/discount-codes/import`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as DiscountCodeDTO[];
   }

   async searchDiscountCodes (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/fulfillment/discount-codes/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async filterDiscountCodes (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/fulfillment/discount-codes`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createDiscountCode (dto: DiscountCodeDraftDTO): Promise<DiscountCodeDTO> {
       const response = await this.request({
           path: `/fulfillment/discount-codes`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as DiscountCodeDTO;
   }

   async findDiscountCodeById (id: string): Promise<DiscountCodeDTO> {
       const response = await this.request({
           path: `/fulfillment/discount-codes/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as DiscountCodeDTO;
   }

   async updateDiscountCodeById (id: string, dto: DiscountCodeDraftDTO): Promise<DiscountCodeDTO> {
       const response = await this.request({
           path: `/fulfillment/discount-codes/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as DiscountCodeDTO;
   }

   async deleteDiscountCodeById (id: string): Promise<DiscountCodeDTO> {
       const response = await this.request({
           path: `/fulfillment/discount-codes/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as DiscountCodeDTO;
   }

}
