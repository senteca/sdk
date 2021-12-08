/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { LoanOfferDTO, UniCreditSessionStartRequestDTO, UniCreditSessionStartResponseDTO, UniCreditCaptureRequestDTO } from '../../../models';

export const MyPaymentsUnicreditCalculateForSKU = async (sku: string, query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, downPaymentCentAmount: number }): Promise<LoanOfferDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/unicredit/calculate-for-sku/sku=${encodeURIComponent(sku)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as LoanOfferDTO[];
}

export const MyPaymentsUnicreditCalculateLoanOrder = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, downPaymentCentAmount: number }): Promise<LoanOfferDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/unicredit/calculate-for-cart`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as LoanOfferDTO[];
}

export const MyPaymentsUnicreditStartSession = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: UniCreditSessionStartRequestDTO): Promise<UniCreditSessionStartResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/unicredit/start-session`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as UniCreditSessionStartResponseDTO;
}

export const MyPaymentsUnicreditCapture = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: UniCreditCaptureRequestDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/unicredit/capture`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        contentType: 'application/json',
    });
    
}

