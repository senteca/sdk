import { BaseAPI } from '../../runtime';
import { InventoryDraftDTO } from '../../models/InventoryDraftDTO';
import { InventoryDTO } from '../../models/InventoryDTO';
import { InventoryFilterResultDTO } from '../../models/InventoryFilterResultDTO';
import { InventorySearchResultDTO } from '../../models/InventorySearchResultDTO';
import { InventoryQuantityUpdateDTO } from '../../models/InventoryQuantityUpdateDTO';
import { SkuReservationRequestDTO } from '../../models/SkuReservationRequestDTO';
import { SkuReservationResponseDTO } from '../../models/SkuReservationResponseDTO';
import { InventoryReservationDTO } from '../../models/InventoryReservationDTO';

export class InventoriesAPI extends BaseAPI {
   async create (dto: InventoryDraftDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<InventoryFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/inventories`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as InventoryFilterResultDTO;
   }

   async import (dto: InventoryDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/inventories/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async search (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<InventorySearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as InventorySearchResultDTO;
   }

   async getById (id: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async updateById (id: string, dto: InventoryDraftDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async deleteById (id: string): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async getByKey (key: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/key=${encodeURIComponent(key)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async deleteByKey (key: string): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/key=${encodeURIComponent(key)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async setInventoryQuantityById (id: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}/set-quantity`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async setInventoryQuantityByKey (key: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/key=${encodeURIComponent(key)}/set-quantity`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async addInventoryQuantityById (id: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}/add-quantity`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async addInventoryQuantityByKey (key: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/key=${encodeURIComponent(key)}/add-quantity`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async removeInventoryQuantityById (id: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}/remove-quantity`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async removeInventoryQuantityByKey (key: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/key=${encodeURIComponent(key)}/remove-quantity`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async setInventoryReservationsById (id: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}/set-reservations`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async setReservationsQuantityByKey (key: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/key=${encodeURIComponent(key)}/set-reservations`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async addInventoryReservationsById (id: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}/add-reservations`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async addInventoryReservationsByKey (key: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/key=${encodeURIComponent(key)}/add-reservations`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async removeInventoryReservationsById (id: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}/remove-reservations`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async removeInventoryReservationsByKey (key: string, dto: InventoryQuantityUpdateDTO): Promise<InventoryDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/key=${encodeURIComponent(key)}/remove-reservations`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTO;
   }

   async checkAvailability (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: SkuReservationRequestDTO[]): Promise<SkuReservationResponseDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/availability`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SkuReservationResponseDTO;
   }

   async reserve (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: SkuReservationRequestDTO[]): Promise<SkuReservationResponseDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/reserve`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SkuReservationResponseDTO;
   }

   async unreserve (dto: InventoryReservationDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/inventories/unreserve`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

}
