import { BaseAPI } from '../../runtime';
import { SpeedyLocationCountryDTO, SpeedyLocationCityDTO, SpeedyLocationQuarterDTO, SpeedyLocationStreetDTO, SpeedyLocationOfficeDTO, SpeedyCountryDTO, OrderDTO, SpeedyCityDTO, SpeedyQuarterDTO, SpeedyStreetDTO, SpeedyOfficeDTO } from '../../models';

export class MyShippingsSpeedyAPI extends BaseAPI {
   async findCountry (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/find-country`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationCountryDTO[];
   }

   async findCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/find-city`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationCityDTO[];
   }

   async findQuarter (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/find-quarter`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationQuarterDTO[];
   }

   async findStreet (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/find-street`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationStreetDTO[];
   }

   async findOffice (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/find-office`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationOfficeDTO[];
   }

   async setCountry (dto: SpeedyCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/country`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCountry (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/country`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCity (dto: SpeedyCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/city`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCity (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/city`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setQuarter (dto: SpeedyQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/quarter`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetQuarter (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/quarter`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setStreet (dto: SpeedyStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/street`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetStreet (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/street`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setOffice (dto: SpeedyOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/office`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetOffice (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/speedy/office`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

}
