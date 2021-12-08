import { BaseAPI } from '../../runtime';
import { CustomLineItemTypeFilterResultDTO, CustomLineItemTypeDraftDTO, CustomLineItemTypeDTO } from '../../models';

export class CustomLineItemTypesAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomLineItemTypeFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/custom-line-item-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CustomLineItemTypeFilterResultDTO;
   }

   async registerCustomLineItemType (dto: CustomLineItemTypeDraftDTO): Promise<CustomLineItemTypeDTO> {
       const response = await this._request({
           path: `/fulfillment/custom-line-item-types`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomLineItemTypeDTO;
   }

   async bulkRegisterCustomLineItemType (dto: CustomLineItemTypeDraftDTO[]): Promise<CustomLineItemTypeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/custom-line-item-types/bulk-register`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomLineItemTypeDTO[];
   }

   async updateById (id: string, dto: CustomLineItemTypeDraftDTO): Promise<CustomLineItemTypeDTO> {
       const response = await this._request({
           path: `/fulfillment/custom-line-item-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomLineItemTypeDTO;
   }

   async deleteById (id: string): Promise<CustomLineItemTypeDTO> {
       const response = await this._request({
           path: `/fulfillment/custom-line-item-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CustomLineItemTypeDTO;
   }

}
