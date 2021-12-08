/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { LoanOfferDTO } from '../../../models';

export const MyPaymentsBnpCalculateForSKU = async (sku: string, query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, preferredInstallmentCentAmount: number, downPaymentCentAmount: number }): Promise<LoanOfferDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/bnp/calculate-for-sku/sku=${encodeURIComponent(sku)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as LoanOfferDTO[];
}

export const MyPaymentsBnpCalculateLoanOrder = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, preferredInstallmentCentAmount: number, downPaymentCentAmount: number }): Promise<LoanOfferDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/bnp/calculate-for-cart`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as LoanOfferDTO[];
}

