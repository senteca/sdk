import { BaseAPI } from '../../runtime';
import { LoanOfferDTO } from '../../models';

export class MyPaymentsBnpAPI extends BaseAPI {
   async calculateForSKU (sku: string, query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, preferredInstallmentCentAmount: number, downPaymentCentAmount: number }): Promise<LoanOfferDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-payments/bnp/calculate-for-sku/sku=${encodeURIComponent(sku)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as LoanOfferDTO[];
   }

   async calculateLoanOrder (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, preferredInstallmentCentAmount: number, downPaymentCentAmount: number }): Promise<LoanOfferDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-payments/bnp/calculate-for-cart`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as LoanOfferDTO[];
   }

}
