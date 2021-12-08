import { BaseAPI } from '../../runtime';
import { LoanOfferDTO, UniCreditSessionStartRequestDTO, UniCreditSessionStartResponseDTO, UniCreditCaptureRequestDTO } from '../../models';

export class MyPaymentsUnicreditAPI extends BaseAPI {
   async calculateForSKU (sku: string, query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, downPaymentCentAmount: number }): Promise<LoanOfferDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-payments/unicredit/calculate-for-sku/sku=${encodeURIComponent(sku)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as LoanOfferDTO[];
   }

   async calculateLoanOrder (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, downPaymentCentAmount: number }): Promise<LoanOfferDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-payments/unicredit/calculate-for-cart`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as LoanOfferDTO[];
   }

   async startSession (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: UniCreditSessionStartRequestDTO): Promise<UniCreditSessionStartResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/my-payments/unicredit/start-session`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as UniCreditSessionStartResponseDTO;
   }

   async capture (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: UniCreditCaptureRequestDTO): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/my-payments/unicredit/capture`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
