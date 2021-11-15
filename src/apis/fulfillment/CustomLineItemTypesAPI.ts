import { BaseAPI } from '../../runtime';
import { CustomLineItemTypeDraftDTO, CustomLineItemTypeDTO } from '../../models';

export class CustomLineItemTypesAPI extends BaseAPI {
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

}
