/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { BNPLoanOfferDTO } from '../../../models';

export const MyPaymentsBnpCalculateForSKU = async (sku: string, query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, preferredInstallmentCentAmount: number, downPaymentCentAmount: number }): Promise<BNPLoanOfferDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/bnp/calculate-for-sku/sku=${encodeURIComponent(sku)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as BNPLoanOfferDTO[];
}

export const MyPaymentsBnpCalculateLoanOrder = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, preferredInstallmentCentAmount: number, downPaymentCentAmount: number }): Promise<BNPLoanOfferDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/bnp/calculate-for-cart`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as BNPLoanOfferDTO[];
}

