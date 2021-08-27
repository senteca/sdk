import { BaseAPI } from '../../runtime';
import { ShippingSenderDTO, ShippingSenderDraftDTO, ShippingSenderFilterResultDTO, SetCustomFieldDTO } from '../../models';

export class ShippingSendersAPI extends BaseAPI {
   async updateEcontSenders (moduleConfigId: string): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders/econt/moduleConfigId=${encodeURIComponent(moduleConfigId)}`,
           method: 'POST',
        });
       
   }

   async updateSpeedySenders (moduleConfigId: string): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders/speedy/moduleConfigId=${encodeURIComponent(moduleConfigId)}`,
           method: 'POST',
        });
       
   }

   async updateEvropatSenders (moduleConfigId: string): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders/evropat/moduleConfigId=${encodeURIComponent(moduleConfigId)}`,
           method: 'POST',
        });
       
   }

   async getAllModuleConfigSenders (moduleConfigKey: string): Promise<ShippingSenderDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders/all/moduleConfigKey=${encodeURIComponent(moduleConfigKey)}`,
           method: 'GET',
        });
       return (response as unknown) as ShippingSenderDTO[];
   }

   async create (dto: ShippingSenderDraftDTO): Promise<ShippingSenderDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ShippingSenderDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ShippingSenderFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ShippingSenderFilterResultDTO;
   }

   async getByKey (key: string): Promise<ShippingSenderDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as ShippingSenderDTO;
   }

   async updateByKey (key: string, dto: ShippingSenderDraftDTO): Promise<ShippingSenderDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders/key=${encodeURIComponent(key)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ShippingSenderDTO;
   }

   async deleteByKey (key: string): Promise<ShippingSenderDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders/key=${encodeURIComponent(key)}`,
           method: 'DELETE',
        });
       return (response as unknown) as ShippingSenderDTO;
   }

   async setShippingSenderCustomByKey (key: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/shipping-senders/key=${encodeURIComponent(key)}/sender-custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
